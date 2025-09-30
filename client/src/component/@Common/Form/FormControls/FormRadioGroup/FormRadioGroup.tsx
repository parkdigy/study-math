import React from 'react';
import { FormRadioGroupCommands, FormRadioGroupItemInfo, FormRadioGroupProps as Props } from './FormRadioGroup.types';
import { FormControlBase } from '../@common';
import {
  useAutoUpdateRef,
  useAutoUpdateRefState,
  useAutoUpdateState,
  useFirstSkipEffect,
  useForwardRef,
  useRefState,
  useTimeoutRef,
} from '@pdg/react-hook';
import { FormRadioGroupItem, FormRadioGroupItemCommands } from './sub';
import { koreanAppendRul } from '@pdg/korean';
import { useFormControlGroupState, useFormState } from '../../FormContext';
import './FormRadioGroup.scss';
import { GridCols } from '../../../Layout';
import { useResizeDetector } from 'react-resize-detector';

export const FormRadioGroup = ToForwardRefExoticComponent(
  AutoTypeForwardRef(function <T extends string | number | boolean>(
    {
      // FormRadioGroupProps
      type = 'radio',
      spacing: initSpacing,
      items,
      grid: initGrid,
      // FormControlCommonProps
      className,
      title,
      name,
      required,
      error: initError = false,
      disabled: initDisabled,
      value: initValue,
      onChange,
      onErrorChange,
      onValidate,
      // FormControlBaseProps
      ...formControlBaseProps
    }: Props<T>,
    ref: React.ForwardedRef<FormRadioGroupCommands<T>>
  ) {
    /********************************************************************************************************************
     * Initialize
     * ******************************************************************************************************************/

    const spacing = ifUndefined(initSpacing, type === 'radio' ? 17 : 6);

    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/

    const { disabled: formDisabled } = useFormState();
    const controlGroupState = useFormControlGroupState();

    /********************************************************************************************************************
     * Timeout
     * ******************************************************************************************************************/

    const [, setUpdateAutoGridColsTimeout] = useTimeoutRef();

    /********************************************************************************************************************
     * ResizeDetector
     * ******************************************************************************************************************/

    const { ref: containerRef, width: containerWidth } = useResizeDetector({ handleHeight: false });
    const { ref: maxWidthRef, width: maxWidth } = useResizeDetector({ handleHeight: false });

    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/

    // 자동 넓이 그리도 최초 계산 여부
    const isFirstCalcAutoGridColsRef = useRef(true);
    // overflow 상태로 들어갈 때 넓이 값을 저장, 다시 overflow 상태에서 벗어날 때 비교용
    const overflowCheckMinWidthRef = useRef(0);
    // 첫번째 활성화 아이템의 인덱스
    const firstItemIndexRef = useRef<number>(undefined);
    // 첫번째 활성화 아이템의 커맨드 (validate 실패 시 포커스 이동용)
    const firstItemCommandsRef = useRef<FormRadioGroupItemCommands>(null);

    const onChangeRef = useAutoUpdateRef(onChange);
    const onValidateRef = useAutoUpdateRef(onValidate);

    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/

    const [valueRef, value, _setValue] = useAutoUpdateRefState<T | undefined>(initValue as any);
    const [error, setError] = useAutoUpdateState(initError);
    const [itemsKey, setItemsKey] = useState(0);

    // 최대 넓이 아이템
    const [itemMaxWidthRef, itemMaxWidth, setItemMaxWidth] = useRefState(0);
    // 자동 넓이 그리도 cols 정보
    const [autoGridCols, setAutoGridCols] = useState<GridCols>(12);
    // overflow 상태인지 여부
    const [isOverflowingRef, isOverflowing, setIsOverflowing] = useRefState(false);

    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/

    const disabled = formDisabled || initDisabled;
    const useAutoGrid = !initGrid;

    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/

    useEffect(() => {
      // 첫번째 활성화 아이템 인덱스 설정
      firstItemIndexRef.current = undefined;
      if (items) {
        for (let i = 0; i < items.length; i += 1) {
          if (!items[i].disabled) {
            firstItemIndexRef.current = i;
            break;
          }
        }
      }
      // 첫번째 활성화 아이템 커맨드 초기화
      firstItemCommandsRef.current = null;
      // 자동 넓이 그리드 최초 계산 여부 초기화
      isFirstCalcAutoGridColsRef.current = true;
      // 최대 넓이 아이템 초기화
      setItemMaxWidth(0);
      // overflow 상태 초기화
      setIsOverflowing(false);
      // overflow 체크용 넓이 초기화
      overflowCheckMinWidthRef.current = 0;

      setItemsKey((prev) => prev + 1);

      if (useAutoGrid) {
        nextTick(() => {
          checkOverflow();
        });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [items]);

    useFirstSkipEffect(() => {
      if (error) {
        validate();
      }
    }, [value]);

    useFirstSkipEffect(() => {
      onErrorChange?.(error);
      controlGroupState && controlGroupState.onErrorChange(name, error);
    }, [error]);

    /** overflow 상태 체크 및 설정 */
    useEffect(() => {
      checkOverflow();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [useAutoGrid, maxWidth]);

    /** 자동 넓이 그리드 cols 계산 */
    useEffect(() => {
      if (useAutoGrid && containerWidth && itemMaxWidth) {
        setUpdateAutoGridColsTimeout(
          () => {
            isFirstCalcAutoGridColsRef.current = false;

            let newAutoGridCols = 12;

            let totalWidth = newAutoGridCols * itemMaxWidth + (newAutoGridCols - 1) * spacing;
            while (newAutoGridCols > 1 && totalWidth > containerWidth) {
              newAutoGridCols -= 1;
              totalWidth = newAutoGridCols * itemMaxWidth + (newAutoGridCols - 1) * spacing;
            }
            setAutoGridCols(newAutoGridCols as GridCols);
          },
          isFirstCalcAutoGridColsRef.current ? 0 : 50
        );
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [items, useAutoGrid, containerWidth, itemMaxWidth, spacing]);

    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/

    /** 값 유효성 검증 */
    const validate = useCallback(() => {
      let error: string | boolean = false;
      if (required && valueRef.current === undefined) {
        if (notEmpty(title)) {
          error = `${koreanAppendRul(title)} 선택하지 않았습니다.`;
        } else {
          error = '필수 선택 항목입니다.';
        }
      }
      if (error === false && onValidateRef.current) {
        error = onValidateRef.current(valueRef.current);
      }

      if (error === false) {
        setError(false);
        return true;
      } else {
        setError(error);
        return false;
      }
    }, [onValidateRef, required, setError, title, valueRef]);

    /** overflow 상태 체크 */
    const checkOverflow = useCallback(() => {
      if (useAutoGrid) {
        if (containerRef.current) {
          if (isOverflowingRef.current) {
            // overflow 상태일 때, overflow 진입시의 넓이보다 더 커졌을 때, overflow 해제
            if (containerRef.current.scrollWidth > overflowCheckMinWidthRef.current) {
              setIsOverflowing(false);
            }
          } else {
            // 일반 상태일 때, scrollWidth가 offsetWidth보다 커졌을 때, overflow 상태로 변경
            if (containerRef.current.scrollWidth > maxWidthRef.current.offsetWidth) {
              // overflow 진입시의 넓이 저장
              overflowCheckMinWidthRef.current = containerRef.current.scrollWidth;

              setIsOverflowing(true);
            }
          }
        }
      }
    }, [containerRef, isOverflowingRef, maxWidthRef, setIsOverflowing, useAutoGrid]);

    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/

    const commands = useMemo<FormRadioGroupCommands<T>>(
      () => ({
        focus() {
          firstItemCommandsRef.current?.focus();
        },
        validate,
        setError,
        getValue() {
          return valueRef.current;
        },
        setValue(newValue) {
          _setValue(newValue);
          onChangeRef.current?.(newValue);
        },
      }),
      [_setValue, onChangeRef, setError, validate, valueRef]
    );

    useForwardRef(ref, commands);

    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

    /** 아이템 클릭 핸들러 */
    const handleItemClick = useCallback(
      (value: T) => {
        commands.setValue(value);
      },
      [commands]
    );

    /** 아이템 커맨드 설정 핸들러 */
    const handleItemCommands = useCallback((commands: FormRadioGroupItemCommands) => {
      firstItemCommandsRef.current = commands;
    }, []);

    /** 아이템 넓이 변경 핸들러 */
    const handleItemChangeWidth = useCallback(
      (width: number) => {
        if (width > itemMaxWidthRef.current) {
          setItemMaxWidth(width);
        }
      },
      [itemMaxWidthRef, setItemMaxWidth]
    );

    /********************************************************************************************************************
     * Render Function
     * ******************************************************************************************************************/

    const getItem = useCallback(
      (index: number, item: FormRadioGroupItemInfo<T>, buttonFullWidth = false) => (
        <FormRadioGroupItem
          key={index}
          type={type}
          itemsKey={itemsKey}
          label={item.label}
          value={item.value}
          disabled={disabled || item.disabled}
          error={error !== false}
          active={value === item.value}
          buttonWidth={type === 'radio' ? undefined : isOverflowing && itemMaxWidth ? itemMaxWidth : undefined}
          buttonFullWidth={buttonFullWidth}
          onClick={handleItemClick}
          onChangeWidth={handleItemChangeWidth}
          onCommands={
            firstItemIndexRef.current === undefined || index < firstItemIndexRef.current
              ? handleItemCommands
              : undefined
          }
        />
      ),
      [
        disabled,
        error,
        handleItemChangeWidth,
        handleItemClick,
        handleItemCommands,
        isOverflowing,
        itemMaxWidth,
        itemsKey,
        type,
        value,
      ]
    );

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    let grid: Props<T>['grid'] = undefined;

    if (initGrid) {
      grid = initGrid;
    } else if (isOverflowing) {
      grid = { cols: autoGridCols, spacing };
    }

    return (
      <FormControlBase
        className={classnames(className, 'FormRadioGroup', `FormRadioGroup-${type}`)}
        type='radio_group'
        name={name}
        commands={commands}
        spacing={type === 'radio' ? 12 : 10}
        title={title}
        required={required}
        disabled={disabled}
        error={error}
        {...formControlBaseProps}
      >
        <div ref={maxWidthRef} className='FormRadioGroupMaxWidth' />
        {/* mh, ph는 outline 안보이는 문제 해결을 위해 추가 */}
        <div ref={containerRef} className='FormRadioGroupBody'>
          {grid ? (
            <div className='FormRadioGroupBodyGridContainer'>
              <Grid spacing={ifUndefined(grid.spacing, spacing)} {...grid}>
                {items.map((item, idx) => (
                  <Col key={idx}>{getItem(idx, item, grid?.cols === 1)}</Col>
                ))}
              </Grid>
            </div>
          ) : (
            <Stack className='FormRadioGroupControl' row center spacing={spacing}>
              {items.map((item, idx) => getItem(idx, item))}
            </Stack>
          )}
        </div>
      </FormControlBase>
    );
  })
);

export default FormRadioGroup;

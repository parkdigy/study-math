import React from 'react';
import { Dev_FormOptionsData, Dev_FormOptionsOption, Dev_FormOptionsProps as Props } from './Dev_FormOptions.types';
import { Form } from '@ccomp';
import { Dev_FormControl_Cols, Dev_FormControl_ColsProps } from '../FormControls';
import { Dev_Code } from '../Code';
import { Dev_Panel } from '../Layout';
import { useAutoUpdateRef, useRefState } from '@pdg/react-hook';
import { equal } from '@pdg/compare';
import { AllColors } from '@theme';
import { useScreenSize } from '@context';
import './Dev_FormOptions.scss';
import { useDevFormOptionMultiOptionControls } from './useDevFormOptionMultiOptionControls';
import { useDevFormOptionTextControls } from './useDevFormOptionTextControls';
import { useDevFormOptionBooleanControls } from './useDevFormOptionBooleanControls';

let _showCode = false;

function Dev_FormOptions<TColors extends AllColors = AllColors, TBackgroundColors extends AllColors = AllColors>({
  options,
  optionProps,
  disabledOptions = [],
  selectControlOptions = [],
  formProps,
  colors = [],
  useCustomColor,
  backgroundColors = [],
  useCustomBackgroundColor,
  multiOptionControlType = 'radio',
  code,
  codePropsMap,
  testPosition = 'top',
  defaultData,
  testBackgroundColor,
  onChange,
  onGetTest,
}: Props<TColors, TBackgroundColors>) {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const screen = useScreenSize();

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const onChangeRef = useAutoUpdateRef(onChange);

  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  const useFormControlData = {
    screen,
    colors,
    backgroundColors,
    disabledOptions,
    selectControlOptions,
    multiOptionControlType,
  };

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const flatOptions = useMemo(() => {
    const _flatOptions: Dev_FormOptionsOption[] = [];
    options.flat().forEach((v) => {
      if (!v || v === '|') return;
      if (typeof v === 'object') {
        _flatOptions.push(v.option);
      } else {
        _flatOptions.push(v);
      }
    });
    return _flatOptions;
  }, [options]);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [showCode, setShowCode] = useState(_showCode);
  const [dataRef, data, setData] = useRefState<Dev_FormOptionsData<TColors, TBackgroundColors>>({});

  /** Multi Option Controls */
  const multiOptionControls = useDevFormOptionMultiOptionControls({
    flatOptions,
    optionProps,
    defaultData,
    useCustomColor,
    useCustomBackgroundColor,
    useFormControlData,
  });

  /** Text Controls */
  const textControls = useDevFormOptionTextControls({
    flatOptions,
    optionProps,
    defaultData,
    useFormControlData,
  });

  /** Boolean Controls */
  const booleanControls = useDevFormOptionBooleanControls({
    flatOptions,
    optionProps,
    defaultData,
    useFormControlData,
  });

  /** Cols Controls */
  const [cols, setCols] = useState<Dev_FormControl_ColsProps['cols']>(
    typeof defaultData?.cols === 'number' ? defaultData?.cols : undefined
  );
  const [colsUseResponsive, setColsUseResponsive] = useState<Dev_FormControl_ColsProps['useResponsive']>(
    typeof defaultData?.cols === 'object'
  );
  const [colsResponsiveCols, setColsResponsiveCols] = useState<Dev_FormControl_ColsProps['responsiveCols']>(
    ifUndefined(typeof defaultData?.cols === 'object' ? defaultData?.cols : undefined, {})
  );

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  /** All Controls */
  const allControls = useMemo(
    () => ({ ...multiOptionControls, ...textControls, ...booleanControls }),
    [booleanControls, multiOptionControls, textControls]
  );

  const allControlNames = useMemo(() => keys(allControls), [allControls]);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    const newData: Dev_FormOptionsData<TColors, TBackgroundColors> = {};

    flatOptions.forEach((v) => {
      if (v === 'cols') {
        if (colsUseResponsive) {
          newData.cols = colsResponsiveCols;
        } else {
          newData.cols = cols;
        }
      } else if (allControlNames.includes(v)) {
        newData[v] = allControls[v] as any;
      }
    });

    if (!equal(newData, dataRef.current)) {
      setData(newData);
      onChangeRef.current(newData);
    }
  }, [
    options,
    dataRef,
    setData,
    onChangeRef,
    colsUseResponsive,
    colsResponsiveCols,
    cols,
    flatOptions,
    allControls,
    allControlNames,
  ]);

  /********************************************************************************************************************
   * Memo - Controls
   * ******************************************************************************************************************/

  const colsControl = useMemo(
    () => (
      <Dev_FormControl_Cols
        cols={cols}
        useResponsive={colsUseResponsive}
        responsiveCols={colsResponsiveCols}
        onChangeCols={setCols}
        onChangeUseResponsive={setColsUseResponsive}
        onChangeResponsiveCols={setColsResponsiveCols}
      />
    ),
    [cols, colsResponsiveCols, colsUseResponsive]
  );

  /********************************************************************************************************************
   * Memo - Result
   * ******************************************************************************************************************/

  const testControl = useMemo(
    () => (
      <Box
        className={classnames('Dev_FormOptions_TestControl')}
        mb={testPosition === 'top' ? 10 : undefined}
        mt={testPosition === 'bottom' ? 10 : undefined}
      >
        <Dev_Panel className='Dev_FormOptions_TestControl_Content' backgroundColor={testBackgroundColor}>
          {onGetTest(data)}
        </Dev_Panel>
        <Box mh={10}>
          {showCode && (
            <Dev_Code
              propsMap={codePropsMap}
              customStyle={{
                border: '2px solid var(--color-opacity-07)',
                borderTopWidth: 0,
                borderRadius: 0,
              }}
            >
              {code}
            </Dev_Code>
          )}
          <div
            className={classnames('Dev_FormOptions_TestControl_CodeExpandButton', showCode && 'show-code')}
            onClick={() => {
              _showCode = !showCode;
              setShowCode(!showCode);
            }}
          >
            <T icon={showCode ? 'KeyboardArrowUp' : 'KeyboardArrowDown'} iconProps={{ size: 'xl' }}>
              코드 {showCode ? '닫기' : '보기'}
            </T>
          </div>
        </Box>
      </Box>
    ),
    [code, codePropsMap, data, onGetTest, showCode, testBackgroundColor, testPosition]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Form className='Dev_FormOptions' gap={20} {...formProps}>
      {testPosition === 'top' && testControl}

      {options.map((v, idx) => {
        if (v === '|') {
          return <Divider key={idx} />;
        } else {
          const op: (Dev_FormOptionsOption | { option: Dev_FormOptionsOption; cols: number })[] = [];
          let cols = 0;

          (Array.isArray(v) ? v : [v]).forEach((v2) => {
            if (v2 == null) {
              op.push(v2);
              cols += 1;
            } else if (typeof v2 === 'object') {
              op.push(v2);
              cols += v2.cols;
            } else {
              op.push(v2);
              cols += 1;
            }
          });

          if (screen.smallerThanOrEqual.mobileSm) {
            cols = 1;
          } else if (screen.smallerThanOrEqual.mobileLg) {
            if (op.length >= 3) {
              cols = 2;
            }
          }

          return (
            <Grid key={idx} className='Dev_FormOptions_Controls' cols={cols as any} gap={20}>
              {op.map((v2, idx2) => {
                const optionCols = Math.min(cols, v2 && typeof v2 === 'object' ? v2.cols : 1);

                return (
                  <Col key={idx2} cols={optionCols}>
                    {(() => {
                      const controlName = v2 && typeof v2 === 'object' ? v2.option : v2;
                      if (controlName === 'cols') {
                        return colsControl;
                      } else if (allControlNames.includes(controlName)) {
                        let isReturnControl = true;
                        if (controlName === 'color' && !colors) {
                          isReturnControl = false;
                        } else if (controlName === 'backgroundColor' && !backgroundColors) {
                          isReturnControl = false;
                        }

                        if (isReturnControl) {
                          return allControls[`${controlName}Control`];
                        }
                      }
                    })()}
                  </Col>
                );
              })}
            </Grid>
          );
        }
      })}

      {testPosition === 'bottom' && testControl}
    </Form>
  );
}

export default React.memo(Dev_FormOptions) as typeof Dev_FormOptions;

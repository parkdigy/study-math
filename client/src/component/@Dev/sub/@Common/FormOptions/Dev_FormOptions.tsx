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

  const screenSize = useScreenSize();

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const onChangeRef = useAutoUpdateRef(onChange);

  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  const useFormControlData = {
    screenSize,
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

  const [showCode, setShowCode] = useState(false);
  const [dataRef, data, setData] = useRefState<Dev_FormOptionsData<TColors, TBackgroundColors>>({});

  /** Multi Option Controls */
  const {
    buttonVariant,
    buttonVariantControl,
    iconButtonVariant,
    iconButtonVariantControl,
    alertType,
    alertTypeControl,
    color,
    colorControl,
    backgroundColor,
    backgroundColorControl,
    size,
    sizeControl,
    fontWeight,
    fontWeightControl,
    tooltipPlace,
    tooltipPlaceControl,
    rotate,
    rotateControl,
    spacing,
    spacingControl,
    icon,
    iconControl,
    iconPosition,
    iconPositionControl,
    iconSpacing,
    iconSpacingControl,
    rows,
    rowsControl,
    formCheckboxType,
    formCheckboxTypeControl,
    currentPage,
    currentPageControl,
    lastPage,
    lastPageControl,
  } = useDevFormOptionMultiOptionControls({
    flatOptions,
    optionProps,
    defaultData,
    useCustomColor,
    useCustomBackgroundColor,
    useFormControlData,
  });

  /** Text Controls */
  const {
    title,
    titleControl,
    placeholder,
    placeholderControl,
    url,
    urlControl,
    message,
    messageControl,
    helperText,
    helperTextControl,
    label,
    labelControl,
  } = useDevFormOptionTextControls({
    flatOptions,
    optionProps,
    defaultData,
    useFormControlData,
  });

  /** Boolean Controls */
  const {
    loading,
    loadingControl,
    disabled,
    disabledControl,
    reverse,
    reverseControl,
    required,
    requiredControl,
    showIcon,
    showIconControl,
    hideTitle,
    hideTitleControl,
    onRetry,
    onRetryControl,
    subControl,
    subControlControl,
    rules,
    rulesControl,
    clearable,
    clearableControl,
  } = useDevFormOptionBooleanControls({
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
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    const newData: Dev_FormOptionsData<TColors, TBackgroundColors> = {};

    flatOptions.forEach((v) => {
      switch (v) {
        /** Multi Option Controls */
        case 'buttonVariant':
          newData.buttonVariant = buttonVariant;
          break;
        case 'iconButtonVariant':
          newData.iconButtonVariant = iconButtonVariant;
          break;
        case 'alertType':
          newData.alertType = alertType;
          break;
        case 'color':
          newData.color = color as TColors;
          break;
        case 'backgroundColor':
          newData.backgroundColor = backgroundColor as TBackgroundColors;
          break;
        case 'size':
          newData.size = size;
          break;
        case 'fontWeight':
          newData.fontWeight = fontWeight;
          break;
        case 'tooltipPlace':
          newData.tooltipPlace = tooltipPlace;
          break;
        case 'rotate':
          newData.rotate = rotate;
          break;
        case 'spacing':
          newData.spacing = spacing;
          break;
        case 'icon':
          newData.icon = icon;
          break;
        case 'iconPosition':
          if (icon) newData.iconPosition = iconPosition;
          break;
        case 'iconSpacing':
          if (icon) newData.iconSpacing = iconSpacing;
          break;
        case 'rows':
          newData.rows = rows;
          break;
        case 'formCheckboxType':
          newData.formCheckboxType = formCheckboxType;
          break;
        case 'currentPage':
          newData.currentPage = currentPage;
          break;
        case 'lastPage':
          newData.lastPage = lastPage;
          break;

        /** Text Controls */
        case 'title':
          newData.title = title;
          break;
        case 'placeholder':
          newData.placeholder = placeholder;
          break;
        case 'message':
          newData.message = message;
          break;
        case 'url':
          newData.url = url;
          break;
        case 'helperText':
          newData.helperText = helperText;
          break;
        case 'label':
          newData.label = label;
          break;

        /** Boolean Controls */
        case 'loading':
          newData.loading = loading;
          break;
        case 'disabled':
          newData.disabled = disabled;
          break;
        case 'showIcon':
          newData.showIcon = showIcon;
          break;
        case 'reverse':
          if (ifUndefined(buttonVariant, 'contained') === 'contained') {
            newData.reverse = reverse;
          }
          break;
        case 'required':
          newData.required = required;
          break;
        case 'hideTitle':
          newData.hideTitle = hideTitle;
          break;
        case 'onRetry':
          newData.onRetry = onRetry;
          break;
        case 'subControl':
          newData.subControl = subControl;
          break;
        case 'rules':
          newData.rules = rules;
          break;
        case 'clearable':
          newData.clearable = clearable;
          break;

        /** Cols Controls */
        case 'cols':
          if (colsUseResponsive) {
            newData.cols = colsResponsiveCols;
          } else {
            newData.cols = cols;
          }
          break;
      }
    });

    if (!equal(newData, dataRef.current)) {
      setData(newData);
      onChangeRef.current(newData);
    }
  }, [
    buttonVariant,
    iconButtonVariant,
    color,
    size,
    fontWeight,
    icon,
    iconPosition,
    iconSpacing,
    loading,
    disabled,
    reverse,
    options,
    dataRef,
    setData,
    onChangeRef,
    url,
    rotate,
    alertType,
    title,
    colsUseResponsive,
    colsResponsiveCols,
    cols,
    spacing,
    showIcon,
    backgroundColor,
    flatOptions,
    tooltipPlace,
    message,
    onRetry,
    placeholder,
    required,
    hideTitle,
    subControl,
    rules,
    rows,
    clearable,
    helperText,
    label,
    formCheckboxType,
    currentPage,
    lastPage,
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
            onClick={() => setShowCode(!showCode)}
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
    <Form className='Dev_FormOptions' {...formProps}>
      <Stack spacing={20}>
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

            if (screenSize.smallerThanOrEqual.mobileSm) {
              cols = 1;
            } else if (screenSize.smallerThanOrEqual.mobileLg) {
              if (op.length >= 3) {
                cols = 2;
              }
            }

            return (
              <Grid key={idx} className='Dev_FormOptions_Controls' cols={cols as any} spacing={20}>
                {op.map((v2, idx2) => {
                  const optionCols = Math.min(cols, v2 && typeof v2 === 'object' ? v2.cols : 1);

                  return (
                    <Col key={idx2} cols={optionCols}>
                      {(() => {
                        switch (v2 && typeof v2 === 'object' ? v2.option : v2) {
                          /** Multi Option Controls */
                          case 'buttonVariant':
                            return buttonVariantControl;
                          case 'iconButtonVariant':
                            return iconButtonVariantControl;
                          case 'alertType':
                            return alertTypeControl;
                          case 'color':
                            return colors ? colorControl : null;
                          case 'backgroundColor':
                            return colors ? backgroundColorControl : null;
                          case 'size':
                            return sizeControl;
                          case 'fontWeight':
                            return fontWeightControl;
                          case 'tooltipPlace':
                            return tooltipPlaceControl;
                          case 'rotate':
                            return rotateControl;
                          case 'spacing':
                            return spacingControl;
                          case 'icon':
                            return iconControl;
                          case 'iconPosition':
                            return iconPositionControl;
                          case 'iconSpacing':
                            return iconSpacingControl;
                          case 'rows':
                            return rowsControl;
                          case 'formCheckboxType':
                            return formCheckboxTypeControl;
                          case 'currentPage':
                            return currentPageControl;
                          case 'lastPage':
                            return lastPageControl;

                          /** Text Controls */
                          case 'title':
                            return titleControl;
                          case 'placeholder':
                            return placeholderControl;
                          case 'url':
                            return urlControl;
                          case 'message':
                            return messageControl;
                          case 'helperText':
                            return helperTextControl;
                          case 'label':
                            return labelControl;

                          /** Boolean Controls */
                          case 'loading':
                            return loadingControl;
                          case 'disabled':
                            return disabledControl;
                          case 'reverse':
                            return reverseControl;
                          case 'showIcon':
                            return showIconControl;
                          case 'required':
                            return requiredControl;
                          case 'hideTitle':
                            return hideTitleControl;
                          case 'onRetry':
                            return onRetryControl;
                          case 'subControl':
                            return subControlControl;
                          case 'rules':
                            return rulesControl;
                          case 'clearable':
                            return clearableControl;

                          /** Cols Controls */
                          case 'cols':
                            return colsControl;
                          default:
                            return null;
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
      </Stack>
    </Form>
  );
}

export default React.memo(Dev_FormOptions) as typeof Dev_FormOptions;

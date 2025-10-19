import React from 'react';
import { Dev_FormControl_BackgroundColorProps as Props } from './Dev_FormControl_BackgroundColor.types';
import { ColorPicker, FormRadioGroup, FormSelect } from '@ccomp';
import { AllColors, DefaultColors } from '@theme';
import { Dev_PanelItem } from '../../Layout';
import Color from 'color';

function Dev_FormControl_BackgroundColor<TColors extends AllColors = AllColors>({
  variant = 'select',
  colors,
  disabled,
  useCustomColor,
  value,
  onChange,
  ...props
}: Props<TColors>) {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const theme = useTheme();

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [expanded, setExpanded] = useState(false);

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const selectItems = useMemo(() => {
    const _items = colors.map((color) => lv(color, color));
    if (value?.startsWith('#')) {
      _items.unshift(lv('지정 색상', value));
    }
    return _items;
  }, [colors, value]);

  const radioItems = useMemo(() => {
    const _items = colors
      .filter((color) => (expanded ? true : contains(DefaultColors, color as any)))
      .map((color) => lv(color, color));

    _items.unshift(lv('미지정', undefined));
    return _items;
  }, [colors, expanded]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  const isNamedColor = !!value && AllColors.includes(value as any);
  const color = value
    ? value.startsWith('#')
      ? value
      : Color(isNamedColor ? theme.colors[value as AllColors] : value).hexa()
    : value;

  return (
    <Dev_PanelItem icon='ColorLens' title='배경 색상 (backgroundColor)' mt={-5}>
      <Flex relative>
        {variant === 'select' ? (
          <FormSelect
            name='backgroundColor'
            items={selectItems}
            value={value}
            onChange={onChange}
            placeholder='미지정'
            clearable
            disabled={disabled}
            subControl={
              useCustomColor ? (
                <ColorPicker defaultColor={theme.colors.text} color={color} onChange={onChange} />
              ) : undefined
            }
            {...props}
          />
        ) : (
          <Box relative>
            <Flex row center gap={10} absolute right={0} top={-30}>
              <IconButton size={10} variant='rounded' onClick={() => setExpanded((prev) => !prev)}>
                {expanded ? 'KeyboardArrowUp' : 'KeyboardArrowDown'}
              </IconButton>

              {useCustomColor && (
                <ColorPicker
                  defaultColor={theme.colors.text}
                  color={ifUndefined(color, theme.colors.background)}
                  onChange={onChange}
                />
              )}
            </Flex>

            <FormRadioGroup
              type='smallButton'
              name='backgroundColor'
              items={radioItems}
              disabled={disabled}
              value={value}
              onChange={onChange}
              {...props}
            />
          </Box>
        )}
      </Flex>
    </Dev_PanelItem>
  );
}

export default React.memo(Dev_FormControl_BackgroundColor) as typeof Dev_FormControl_BackgroundColor;

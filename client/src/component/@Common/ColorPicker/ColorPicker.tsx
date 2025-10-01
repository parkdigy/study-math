import React, { CSSProperties } from 'react';
import { ColorPickerProps as Props } from './ColorPicker.types';
import { HexAlphaColorPicker } from 'react-colorful';
import './ColorPicker.scss';
import { useRefState } from '@pdg/react-hook';
import { useWindowSize } from 'usehooks-ts';

export const ColorPicker = React.forwardRef<HTMLDivElement, Props>(
  ({ className, defaultColor, color: initColor, onChange }, ref) => {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/

    const id = useId();
    const { width: windowWidth } = useWindowSize();

    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/

    const swatchRef = useRef<HTMLDivElement>(null);
    const popoverRef = useRef<HTMLDivElement>(null);

    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/

    const [isOpenRef, isOpen, setIsOpen] = useRefState(false);
    const [color, _setColor] = useState(ifUndefined(initColor, defaultColor));

    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/

    useEffect(() => {
      if (!isOpen) {
        _setColor(initColor);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initColor]);

    /** 외부 영역 클릭 시 팝오버 닫기 */
    useEffect(() => {
      let startedInside = false;
      let startedWhenMounted = false;

      const clickHandler = (event: PointerEvent) => {
        if (!isOpenRef.current) return;
        if (event.target && (event.target as HTMLElement).className.includes(`ColorPicker_Swatch-${id}`)) return;
        if (startedInside || !startedWhenMounted) return;
        if (!popoverRef.current || popoverRef.current.contains(event.target as any)) return;

        setIsOpen(false);
      };

      const validateEventStart = (event: MouseEvent | TouchEvent) => {
        if (!isOpenRef.current) return;

        startedWhenMounted = !!popoverRef.current;
        startedInside = !!popoverRef.current && popoverRef.current.contains(event.target as any);
      };

      document.addEventListener('mousedown', validateEventStart);
      document.addEventListener('touchstart', validateEventStart);
      document.addEventListener('click', clickHandler);

      return () => {
        document.removeEventListener('mousedown', validateEventStart);
        document.removeEventListener('touchstart', validateEventStart);
        document.removeEventListener('click', clickHandler);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [popoverRef]);

    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/

    const setColor = useCallback(
      (newColor: string) => {
        _setColor(newColor);
        onChange?.(newColor);
      },
      [_setColor, onChange]
    );

    const toggle = useCallback(() => {
      setIsOpen(!isOpen);
    }, [isOpen, setIsOpen]);

    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/

    let popoverStyle: CSSProperties | undefined;

    if (isOpen && swatchRef.current) {
      popoverStyle = {};
      const { left, width } = swatchRef.current.getBoundingClientRect();
      const center = left + width / 2;

      if (center + 110 > windowWidth) {
        popoverStyle.right = 0;
      } else if (center - 110 < 0) {
        popoverStyle.left = 0;
      } else {
        popoverStyle.left = '50%';
        popoverStyle.transform = 'translate(-50%, 0)';
      }
    }

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <div ref={ref} className={classnames(className, 'ColorPicker')}>
        <div
          ref={swatchRef}
          className={classnames('ColorPicker_Swatch', `ColorPicker_Swatch-${id}`)}
          style={{ backgroundColor: color }}
          onClick={(e) => {
            if ((e.target as HTMLElement).className.includes(`ColorPicker_Swatch-${id}`)) {
              toggle();
            }
          }}
        >
          <div
            className={classnames('ColorPicker_Popover', isOpen && 'ColorPicker_Popover-open')}
            style={popoverStyle}
            ref={popoverRef}
          >
            {isOpen && (
              <>
                <HexAlphaColorPicker color={color} onChange={setColor} />
                <div className='ColorPicker_CloseButton' onClick={toggle}>
                  닫기
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
);

export default ColorPicker;

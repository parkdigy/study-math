import React from 'react';
import SimpleBar from 'simplebar-react';
import { FormSelectDropdownCommands, FormSelectDropdownProps as Props } from './FormSelectDropdown.types';
import { FormSelectItem } from '../../FormSelect.types';
import { useAutoUpdateRef, useRefState } from '@pdg/react-hook';
import { FormSelectDropdownItem } from './FormSelectDropdownItem';
import { useResizeDetector } from 'react-resize-detector';
import './FormSelectDropdown.scss';

function FormSelectDropdown<T extends string | number>({
  id,
  isOpen,
  searchable,
  loading,
  activeItem,
  emptyItemText = '항목이 없습니다.',
  loadingEmptyItemText = '불러오는 중...',
  items: initItems,
  onClick,
  onCommands,
}: Props<T>) {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const scrollNodeRef = useRef<HTMLDivElement>(null);

  /********************************************************************************************************************
   * Resize Detector
   * ******************************************************************************************************************/

  const { ref: containerRef, height: containerHeight } = useResizeDetector<HTMLDivElement>({ handleWidth: false });

  useEffect(() => {
    if (containerRef.current && containerHeight) {
      const { bottom } = containerRef.current.getBoundingClientRect();
      if (window.scrollY + bottom > window.scrollY + window.innerHeight) {
        window.scrollTo({ left: 0, top: window.scrollY + bottom - window.innerHeight, behavior: 'smooth' });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerHeight]);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [tempActiveItemRef, tempActiveItem, setTempActiveItem] = useRefState<FormSelectItem<T>>();
  const [isSetSimpleBarRef, setIsSetSimpleBarRef] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState<string>();

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const items = useMemo(() => {
    if (searchable && notEmpty(searchKeyword)) {
      return initItems?.filter((item) => item.label.includes(searchKeyword));
    } else {
      return initItems;
    }
  }, [initItems, searchKeyword, searchable]);

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const itemsRef = useAutoUpdateRef(items);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    if (isOpen) {
      setTempActiveItem(activeItem ? activeItem : getFirstEnabledItem());
    } else {
      setTempActiveItem(undefined);
      setIsSetSimpleBarRef(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && searchable) {
      let found = false;

      if (tempActiveItem) {
        found = items?.find((item) => item.value === tempActiveItem.value) !== undefined;
      }

      if (!found && activeItem) {
        found = items?.find((item) => item.value === activeItem.value) !== undefined;
        if (found) {
          setTempActiveItem(activeItem);
        }
      }

      if (!found) {
        setTempActiveItem(getFirstEnabledItem());
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, items]);

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  const getFirstEnabledItem = useCallback(
    (reverse = false) => {
      if (notEmpty(itemsRef.current)) {
        if (reverse) {
          return itemsRef.current
            .slice()
            .reverse()
            .find((item) => !item.disabled);
        } else {
          return itemsRef.current.find((item) => !item.disabled);
        }
      }
    },
    [itemsRef]
  );

  /********************************************************************************************************************
   * Commands
   * ******************************************************************************************************************/

  const commands = useMemo<FormSelectDropdownCommands<T>>(
    () => ({
      prevItem() {
        if (notEmpty(itemsRef.current) && tempActiveItemRef.current) {
          let found = false;
          let isSet = false;
          for (const item of itemsRef.current.slice().reverse()) {
            if (found && !item.disabled) {
              isSet = true;
              setTempActiveItem(item);
              break;
            } else if (item.value === tempActiveItemRef.current.value) {
              found = true;
            }
          }
          if (!isSet) {
            setTempActiveItem(getFirstEnabledItem(true));
          }
        } else {
          setTempActiveItem(getFirstEnabledItem(true));
        }
      },
      nextItem() {
        if (notEmpty(itemsRef.current) && tempActiveItemRef.current) {
          let found = false;
          let isSet = false;
          for (const item of itemsRef.current) {
            if (found && !item.disabled) {
              isSet = true;
              setTempActiveItem(item);
              break;
            } else if (item.value === tempActiveItemRef.current.value) {
              found = true;
            }
          }
          if (!isSet) {
            setTempActiveItem(getFirstEnabledItem());
          }
        } else {
          setTempActiveItem(getFirstEnabledItem());
        }
      },
      getTempActiveItem() {
        return tempActiveItemRef.current;
      },
      setSearchKeyword(keyword: string) {
        setSearchKeyword(ifEmpty(keyword, undefined));
      },
    }),
    [getFirstEnabledItem, itemsRef, setTempActiveItem, tempActiveItemRef]
  );

  useEffect(() => {
    onCommands(commands);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [commands]);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleItemActive = useCallback(
    (item: FormSelectItem<T>) => {
      setTempActiveItem(item);
    },
    [setTempActiveItem]
  );

  const handleActiveItemElement = useCallback((el: HTMLDivElement | null) => {
    nextTick(() => {
      if (scrollNodeRef.current && el) {
        const { top: barTop, height: barHeight } = scrollNodeRef.current.getBoundingClientRect();
        const { top: elTop, bottom: elBottom } = el.getBoundingClientRect();
        const scrollTop = scrollNodeRef.current.scrollTop;

        const barViewTop = scrollTop;
        const barViewBottom = scrollTop + barHeight;

        const itemTop = elTop - barTop + scrollTop;
        const itemBottom = elBottom - barTop + scrollTop;

        if (itemBottom > barViewBottom) {
          scrollNodeRef.current?.scrollTo(0, scrollTop + (itemBottom - barViewBottom));
        } else if (itemTop < barViewTop) {
          scrollNodeRef.current?.scrollTo(0, scrollTop - (barViewTop - itemTop));
        }
      }
    });
  }, []);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return isOpen ? (
    <div ref={containerRef} className='FormSelectDropdown__Container'>
      <div className='FormSelectDropdown'>
        <SimpleBar
          scrollableNodeProps={{
            ref: (el: any) => {
              if (el) {
                scrollNodeRef.current = el;
                setIsSetSimpleBarRef(true);
              }
            },
          }}
          className='FormSelect__SimpleBar'
          tabIndex={-1}
          autoHide={false}
        >
          {isSetSimpleBarRef && (
            <>
              {empty(items) ? (
                <div className='FormSelectDropdown__EmptyItems'>{loading ? loadingEmptyItemText : emptyItemText}</div>
              ) : (
                items.map((item, idx) => (
                  <div
                    key={idx}
                    ref={tempActiveItem && item.value === tempActiveItem.value ? handleActiveItemElement : undefined}
                  >
                    <FormSelectDropdownItem
                      id={id}
                      info={item}
                      active={!!(activeItem && item.value === activeItem.value)}
                      tempActive={!!(tempActiveItem && item.value === tempActiveItem.value)}
                      onActive={handleItemActive}
                      onClick={onClick}
                    />
                  </div>
                ))
              )}
            </>
          )}
        </SimpleBar>
      </div>
    </div>
  ) : null;
}

export default React.memo(FormSelectDropdown) as typeof FormSelectDropdown;

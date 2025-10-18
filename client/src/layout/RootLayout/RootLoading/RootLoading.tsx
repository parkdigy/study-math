import React from 'react';
import { RootLoadingProps as Props } from './RootLoading.types';
import { useLocation } from 'react-router';
import './RootLoading.scss';

export const RootLoading = ({}: Props) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const location = useLocation();

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const showCountRef = useRef(0);
  const notUseTimerRef = useRef<NodeJS.Timeout>(undefined);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [isUse, setIsUse] = useState(false);
  const [isShow, setIsShow] = useState(false);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    return () => {
      showCountRef.current = 0;
      setIsUse(false);
      setIsShow(false);
    };
  }, [location.pathname]);

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  const increaseShowCount = useCallback(() => {
    if (notUseTimerRef.current) {
      clearTimeout(notUseTimerRef.current);
      notUseTimerRef.current = undefined;
    }

    showCountRef.current += 1;
    setIsUse(true);
    setIsShow(true);
  }, []);

  const decreaseShowCount = useCallback(() => {
    if (showCountRef.current > 0) {
      showCountRef.current -= 1;
      if (showCountRef.current === 0) {
        setIsShow(false);

        if (notUseTimerRef.current) {
          clearTimeout(notUseTimerRef.current);
          notUseTimerRef.current = undefined;
        }

        notUseTimerRef.current = setTimeout(() => {
          notUseTimerRef.current = undefined;
          setIsUse(false);
        }, 300);
      }
    }
  }, []);

  /********************************************************************************************************************
   * Context Value
   * ******************************************************************************************************************/

  const showLoading = useCallback(() => {
    increaseShowCount();
  }, [increaseShowCount]);

  const hideLoading = useCallback(() => {
    decreaseShowCount();
  }, [decreaseShowCount]);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    __setLoading(showLoading, hideLoading);
  }, [showLoading, hideLoading]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return isUse ? (
    <div
      className={classnames('RootLoading', isShow ? 'RootLoading-show' : 'RootLoading-hide')}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <div className='RootLoading__Content'>
        <div className='RootLoading__Text' />
      </div>
    </div>
  ) : null;

  return null;
};

export default RootLoading;

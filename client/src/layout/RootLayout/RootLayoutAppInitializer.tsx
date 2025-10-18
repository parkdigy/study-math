import { useLocation, useNavigate } from 'react-router';

export const RootLayoutAppInitializer = () => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const navigate = useNavigate();
  const location = useLocation();

  /********************************************************************************************************************
   * LayoutEffect
   * ******************************************************************************************************************/

  useLayoutEffect(() => {
    __setNavigate(navigate);
  }, [navigate]);

  useEffect(() => {
    __setLocation(location);
  }, [location]);

  useEffect(() => {
    window.scrollTo({ top: __getNavigateScrollTopPos() });
    __setNavigateScrollTopPos(0);
  }, [location.pathname, location.search, location.hash]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return null;
};

export default RootLayoutAppInitializer;

import { useNavigate } from 'react-router';

export const RootLayoutAppInitializer = () => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    __setNavigate(navigate);
  }, [navigate]);

  return null;
};

export default RootLayoutAppInitializer;

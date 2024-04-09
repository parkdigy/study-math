import { useNavigate } from 'react-router-dom';
import app from '@app';

export const RootLayoutAppInitializer = () => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    app.setNavigate(navigate);
  }, [navigate]);

  return null;
};

export default RootLayoutAppInitializer;

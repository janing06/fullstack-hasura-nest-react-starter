import { useRoutes } from 'react-router-dom';
import { routes } from '../../routes';

export const AppRoute = () => {
	const element = useRoutes(routes);
	return <>{element}</>;
};

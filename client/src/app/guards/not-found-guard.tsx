import { Navigate } from 'react-router-dom';
import { paths } from '../../shared/paths';

export const NotFoundGuard = () => {
	// TODO: add logic to check if user is logged in
	const isLoggedIn = true;

	if (!isLoggedIn) {
		return <Navigate to={paths.auth.login} />;
	}

	return <Navigate to={paths.notFound} />;
};

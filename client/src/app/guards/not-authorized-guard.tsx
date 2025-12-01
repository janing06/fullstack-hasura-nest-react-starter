import { Navigate } from 'react-router-dom';
import { paths } from '../../shared/paths';

type Props = {
	children: React.ReactNode;
};

export const NotAuthorizedGuard = ({ children }: Props) => {
	// TODO: add logic to check if user is logged in
	const isLoggedIn = true;

	if (isLoggedIn) {
		return <Navigate to={paths.home} />;
	}

	return children;
};

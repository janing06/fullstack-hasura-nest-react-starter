import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { paths } from '../../shared/paths';

type Props = {
	children: ReactNode;
};

export const AuthorizedGuard = ({ children }: Props) => {
	// TODO: add logic to check if user is logged in
	const isLoggedIn = true;

	if (!isLoggedIn) {
		return <Navigate to={paths.auth.login} />;
	}

	return children;
};

import { Outlet, type RouteObject } from 'react-router-dom';
import { HomePageContainer } from '../../pages/home-page';
import { paths } from '../../shared/paths';
import { AuthorizedGuard, NotAuthorizedGuard, NotFoundGuard } from '../guards';

export const routes: RouteObject[] = [
	{
		ErrorBoundary: () => null, // TODO: update
		children: [
			{
				element: (
					<AuthorizedGuard>
						<Outlet />
					</AuthorizedGuard>
				),
				children: [
					{
						path: paths.home,
						element: <HomePageContainer />,
					},
				],
			},
			{
				element: (
					<NotAuthorizedGuard>
						<Outlet />
					</NotAuthorizedGuard>
				),
				children: [],
			},
			{
				element: <NotFoundGuard />,
				path: '*',
			},
		],
	},
];

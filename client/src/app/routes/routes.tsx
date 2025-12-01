import {
	AuthorizedGuard,
	NotAuthorizedGuard,
	NotFoundGuard,
} from '@app/guards';
import { HomePageContainer } from '@pages/home-page';
import { paths } from '@shared/paths';
import { Outlet, type RouteObject } from 'react-router-dom';

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

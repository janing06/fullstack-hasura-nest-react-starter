import { AppProvider } from './app/app-provider';
import { ChakraUIProvider } from './chakra-ui/chakra-ui-provider';
import { AppRoute } from './router/react-router-dom-provider';

export const Providers = () => {
	return (
		<AppProvider>
			<ChakraUIProvider>
				<AppRoute />
			</ChakraUIProvider>
		</AppProvider>
	);
};

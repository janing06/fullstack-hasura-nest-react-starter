import { ChakraProvider } from '@chakra-ui/react';
import type { ReactNode } from 'react';
import { theme } from './theme';

type Props = {
	children: ReactNode;
};

export const ChakraUIProvider = ({ children }: Props) => {
	return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

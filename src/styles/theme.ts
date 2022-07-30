import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      200: '#DADADA',
      400: '#999999',
      600: '#47585B',
    },
    yellow: {
      100: '#FFBA08',
    },
    white: {
      light: '#ffffff',
      100: '#F5F8FA',
    },
    black: {
      dark: '#000000',
    },
    red: {
      900: '1C1401',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'white.100',
        color: 'gray.600',
      },
    },
  },
});

import { useState } from 'react';
import { MantineProvider, ColorSchemeProvider, } from '@mantine/core';
import App_Shell from './constructure/app_shell';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  const [colorScheme, setColorScheme] = useState('light');
  const toggleColorScheme = () =>
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');

  return (
    <BrowserRouter>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
          <App_Shell />
        </MantineProvider>
      </ColorSchemeProvider>
    </BrowserRouter>
  );
}
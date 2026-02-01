import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/layout/styles.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router';
import { router } from './app/router/Routes.tsx';
//import App from './app/layout/App.tsx';

const queryClient = new QueryClient();

const theme = createTheme({
  palette: {
    background: {
      default: '#eeeeee',
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <ToastContainer position='bottom-right' theme='colored' />
      <ThemeProvider theme={theme}>
        <RouterProvider router={router}  />
        {/* <App /> */}
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
)

import React from 'react';
// import ReactDOM from 'react-dom/client'
import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router-dom';

import { router } from './Routes.tsx';
// import App from "./App.tsx";
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

const queryClient = new QueryClient();
ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);

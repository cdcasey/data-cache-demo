import React from 'react';
// import ReactDOM from 'react-dom/client'
import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './store/root.ts';
import { router } from './Routes.tsx';
// import App from "./App.tsx";
import './index.css';

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);

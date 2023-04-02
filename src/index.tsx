import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Start Applying RecoilRoot once first draft is complete!
// import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		{/* <RecoilRoot> */}
		{/* <Routes> */}
		<App />
		{/* </Routes> */}
		{/* </RecoilRoot> */}
	</React.StrictMode>
);

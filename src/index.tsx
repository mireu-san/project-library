import React from 'react';
import ReactDOM from 'react-dom/client';
// Start Applying RecoilRoot once first draft is complete!
// import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import BookList from './components/BookList/BookList';
import BookDetails from './components/BookDetails/BookDetails';
import './index.css';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="list" element={<BookList />} />
				<Route path="/details/:id" element={<BookDetails />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

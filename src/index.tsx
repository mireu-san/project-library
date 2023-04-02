import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Start Applying RecoilRoot once first draft is complete!
// import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import SearchResult from './pages/SearchResult/SearchResult';
import BookList from './components/BookList/BookList';
import BookDetail from './components/BookDetail/BookDetail';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="searchresult" element={<SearchResult />} />
				<Route path="list" element={<BookList />} />
				<Route path="/detail/:id" element={<BookDetail />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import BookList from './components/BookList/BookList';
import BookDetails from './components/BookDetails/BookDetails';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import BookmarkList from './components/BookmarkList/BookmarkList';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<AppProvider>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="book" element={<BookList />} />
					<Route path="/book/:id" element={<BookDetails />} />
					<Route path="/bookmark" element={<BookmarkList />} />
				</Routes>
				{/* <Footer /> */}
			</BrowserRouter>
		</AppProvider>
	</React.StrictMode>
);

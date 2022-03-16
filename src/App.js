import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import { Routes, Route } from 'react-router-dom';
import Details from './Components/TrackDetails';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<div className="App">
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/music/:id" element={<Details />} />
						<Route path="/album/:id" element={<Details />} />
						<Route path="/artist/:id" element={<Details />} />
					</Routes>
				</main>
			</div>
		</QueryClientProvider>
	);
}

export default App;

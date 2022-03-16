import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import { Routes, Route } from 'react-router-dom';
import TrackDetails from './Components/TrackDetails';
import { QueryClient, QueryClientProvider } from 'react-query';
import AlbumDetails from './Components/AlbumDetails';
import ArtistDetails from './Components/ArtistDetails';

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<div className="App">
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/music/:id" element={<TrackDetails />} />
						<Route path="/album/:id" element={<AlbumDetails />} />
						<Route path="/artist/:id" element={<ArtistDetails />} />
					</Routes>
				</main>
			</div>
		</QueryClientProvider>
	);
}

export default App;

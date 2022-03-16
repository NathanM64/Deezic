import { Container } from '@mui/material';
import { useQuery } from 'react-query';
import MusicTable from './MusicTable';

function getUrl() {
  return `http://api.musixmatch.com/ws/1.1/chart.tracks.get?apikey=${process.env.REACT_APP_API_KEY}`;
}

function Home() {
  const { data, isLoading, isFetching, error } = useQuery([getUrl()], () =>
    fetch(getUrl()).then((response) => response.json())
  );

  return (
    <div>
      <Container sx={{ mt: 4 }}>
        {error && <div>{error}</div>}
        {(isLoading || isFetching) && <div>Loading musics...</div>}
        {!isLoading && !error && <MusicTable data={data} />}
      </Container>
    </div>
  );
}

export default Home;

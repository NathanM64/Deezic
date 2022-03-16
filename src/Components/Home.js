import { Container, Typography } from '@mui/material';
import { useQuery } from 'react-query';
import MusicTable from './MusicTable';

function getUrl() {
  return `http://api.musixmatch.com/ws/1.1/chart.tracks.get?apikey=${process.env.REACT_APP_API_KEY}&chart_name=hot`;
}

function Home() {
  const { data, isLoading, isFetching, error } = useQuery([getUrl()], () =>
    fetch(getUrl(), { mode: 'cors' }).then((response) => response.json())
  );
  console.log(data?.message.body)
  return (
    <div>
      <Container sx={{ mt: 4 }}>
        <Typography variant="h3" align="center" color={'white'}>
          Trends
        </Typography>
        {error && <div>{error}</div>}
        {(isLoading || isFetching) && <div>Loading musics...</div>}
        {!isLoading && !error && <MusicTable data={data?.message.body.track_list} />}
      </Container>
    </div>
  );
}

export default Home;

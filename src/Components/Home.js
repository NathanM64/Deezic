import { Container, Typography } from '@mui/material';
import { useCallback, useState } from 'react';
import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import MusicTable from './MusicTable';
import SearchBar from './SearchBar';

function getUrl(value) {
  return !value.length > 0
    ? `http://api.musixmatch.com/ws/1.1/chart.tracks.get?apikey=${process.env.REACT_APP_API_KEY}&chart_name=mxmweekly&page_size=20`
    : `http://api.musixmatch.com/ws/1.1/track.search?apikey=${process.env.REACT_APP_API_KEY}&q=${value}&page_size=12&s_track_rating=desc`;
}

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(searchParams.get('q') ? searchParams.get('q') : '');

  const { data, isLoading, isFetching, error } = useQuery([value], () =>
    fetch(getUrl(value), { mode: 'cors' }).then((response) => response.json())
  );

  const onChange = useCallback(
    (e) => {
      setValue(e.target.value);
      setSearchParams(e.target.value ? { q: e.target.value } : '');
    },
    [setSearchParams]
  );

  return (
    <div>
      <Container sx={{ mt: 4 }}>
        <Typography variant="h3" align="center" color={'white'}>
          Trends
        </Typography>
        <SearchBar value={value} onChange={onChange} />
        {error && <div>{error}</div>}
        {(isLoading || isFetching) && <div>Loading musics...</div>}
        {!isLoading && !error && <MusicTable data={data?.message.body.track_list} />}
      </Container>
    </div>
  );
}

export default Home;

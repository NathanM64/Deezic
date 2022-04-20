import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { lazy, Suspense } from 'react';
import { useQuery } from 'react-query';
import { Navigate, useParams } from 'react-router-dom';

const Lyrics = lazy(() => import('./Lyrics'));

function getUrl(value) {
  return `http://api.musixmatch.com/ws/1.1/track.get?apikey=${process.env.REACT_APP_API_KEY}&commontrack_id=${value}`;
}

export default function TrackDetails() {
  const { id } = useParams();
  const {
    data: track,
    isLoading,
    isFetching,
    error
  } = useQuery('track', () => fetch(getUrl(id)).then((response) => response.json()));
  if ((error || track?.message.header.status_code != 200) && !isLoading)
    return <Navigate to="/" replace={true} />;
  console.log(track);
  return (
    <Container>
      {error && <div>{error}</div>}
      {(isLoading || isFetching) && <div>Loading track...</div>}
      {!isLoading && !error && (
        <Box
          sx={{ backgroundColor: 'grey', borderRadius: 1, m: 'auto', mt: 5, width: '50%', p: 2 }}
        >
          <Typography variant="h4" textAlign="center">
            {track.message.body.track.track_name}
          </Typography>
          <Typography variant="body1">
            <b>Artist : </b>
            {track.message.body.track.artist_name}
          </Typography>
          <Typography variant="body1">
            <b>Album : </b>
            {track.message.body.track.album_name}
          </Typography>
          <Typography variant="body1">
            <b>Rating : </b>
            {track.message.body.track.track_rating}
          </Typography>
          <Typography variant="body1">
            <b>Genres : </b>
            {track.message.body.track.primary_genres?.music_genre_list.map(
              (item) => item.music_genre.music_genre_name
            )}
          </Typography>
          {track.message.body.track.has_lyrics && (
            <Suspense fallback="Loading...">
              <Lyrics
                track_title={track.message.body.track.track_name}
                artist_name={track.message.body.track.artist_name}
              />
            </Suspense>
          )}
        </Box>
      )}
    </Container>
  );
}

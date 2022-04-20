import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useQuery } from 'react-query';
import { Navigate, useParams } from 'react-router-dom';

function getUrl(value) {
  return `/artist.get?apikey=${process.env.REACT_APP_API_KEY}&artist_id=${value}`;
}

export default function ArtistDetails() {
  const { id } = useParams();
  const {
    data: artist,
    isLoading,
    isFetching,
    error
  } = useQuery('artist', () => fetch(getUrl(id)).then((response) => response.json()));

  console.log(artist);
  if (error && !isLoading) return <Navigate to="/" replace={true} />;
  return (
    <Container>
      {error && <div>{error}</div>}
      {(isLoading || isFetching) && <div>Loading artist...</div>}
      {!isLoading && !error && (
        <Box
          sx={{ backgroundColor: 'grey', borderRadius: 1, m: 'auto', mt: 5, width: '50%', p: 2 }}>
          <Typography variant="h4" textAlign="center">
            {artist.message.body.artist.artist_name}
          </Typography>
          <Typography variant="body1">
            <b>Begin date : </b>
            {artist.message.body.artist.begin_date}
          </Typography>
          <Typography variant="body1">
            <b>Country : </b>
            {artist.message.body.artist.artist_country}
          </Typography>
          <Typography variant="body1">
            <b>Rating : </b>
            {artist.message.body.artist.artist_rating}
          </Typography>
        </Box>
      )}
    </Container>
  );
}

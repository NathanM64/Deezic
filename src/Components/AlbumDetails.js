import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useQuery } from 'react-query';
import { Navigate, useParams } from 'react-router-dom';

function getUrl(value) {
  return `http://api.musixmatch.com/ws/1.1/album.get?apikey=${process.env.REACT_APP_API_KEY}&album_id=${value}`;
}

export default function AlbumDetails() {
  const { id } = useParams();
  const {
    data: album,
    isLoading,
    isFetching,
    error
  } = useQuery('album', () => fetch(getUrl(id)).then((response) => response.json()));
  if ((error || album?.message.header.status_code != 200) && !isLoading)
    return <Navigate to="/" replace={true} />;
  console.log(album);

  return (
    <Container>
      {error && <div>{error}</div>}
      {(isLoading || isFetching) && <div>Loading album...</div>}
      {!isLoading && !error && (
        <Box
          sx={{ backgroundColor: 'grey', borderRadius: 1, m: 'auto', mt: 5, width: '50%', p: 2 }}
        >
          <Typography variant="h4" textAlign="center">
            {album.message.body.album.album_name}
          </Typography>
          <Typography variant="body1">
            <b>Artist : </b>
            {album.message.body.album.artist_name}
          </Typography>
          <Typography variant="body1">
            <b>Label : </b>
            {album.message.body.album.album_label}
          </Typography>
          <Typography variant="body1">
            <b>Copyright : </b>
            {album.message.body.album.album_copyright}
          </Typography>
          <Typography variant="body1">
            <b>Rating : </b>
            {album.message.body.album.album_rating}
          </Typography>
          <Typography variant="body1">
            <b>Genres : </b>
            {album.message.body.album.primary_genres?.music_genre_list.map(
              (item) => item.music_genre.music_genre_name
            )}
          </Typography>
        </Box>
      )}
    </Container>
  );
}

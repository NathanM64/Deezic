import { Modal, Box, Typography, Button } from '@mui/material';
import { useState } from 'react';
import { useQuery } from 'react-query';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

function getUrl({ track_title, artist_name }) {
  return `/matcher.lyrics.get?apikey=${process.env.REACT_APP_API_KEY}&q_track=${track_title}&q_artist=${artist_name}`;
}

export default function Lyrics({ track_title, artist_name }) {
  const [open, setOpen] = useState(false);

  const {
    data: lyrics,
    isLoading,
    isFetching,
    error
  } = useQuery('lyrics', () =>
    fetch(getUrl(track_title, artist_name)).then((response) => response.json())
  );

  if (error) return null;
  return (
    <>
      <Button sx={{ color: 'white' }} variant="contained" onClick={() => setOpen(!open)}>
        Lyrics
      </Button>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClose={() => setOpen(false)}>
        <Box sx={style}>
          {error && <div>{error}</div>}
          {(isLoading || isFetching) && <div>Loading track...</div>}
          {!isLoading && !error && (
            <div>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Lyrics
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {lyrics.message.body.lyrics.lyrics_body}
              </Typography>
            </div>
          )}
        </Box>
      </Modal>
    </>
  );
}

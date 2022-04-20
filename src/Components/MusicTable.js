import { TableBody, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import TrackDetails from './TrackDetails';
import { Link } from 'react-router-dom';
import RatingTable from './RatingTable';

function MusicTable({ data }) {
  return (
    <TableContainer sx={{ color: 'white', mb: 20 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Artist</TableCell>
            <TableCell>Album</TableCell>
            <TableCell>Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((track) => (
            <TableRow key={track.track.track_id}>
              <TableCell component="td" scope="row">
                <Link
                  to={`/music/${track.track.commontrack_id}`}
                  element={<TrackDetails />}
                  className="nav-link table"
                >
                  {track.track.track_name}
                </Link>
              </TableCell>
              <TableCell component="td" scope="row">
                <Link
                  to={`/artist/${track.track.artist_id}`}
                  element={<TrackDetails />}
                  className="nav-link table"
                >
                  {track.track.artist_name}
                </Link>
              </TableCell>
              <TableCell component="td" scope="row">
                <Link
                  to={`/album/${track.track.album_id}`}
                  element={<TrackDetails />}
                  className="nav-link table"
                >
                  {track.track.album_name}
                </Link>
              </TableCell>
              <TableCell component="td" scope="row">
                {' '}
                <RatingTable value={track.track.track_rating} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

MusicTable.defaultProps = {
  data: []
};

export default MusicTable;

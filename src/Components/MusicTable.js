import { TableBody, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

function MusicTable({ data }) {
  return (
    <TableContainer sx={{ color: 'white' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Artiste</TableCell>
            <TableCell>Album</TableCell>
            <TableCell>Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(track => (
            <TableRow key={track.track.track_id}>
              <TableCell component="td" scope="row">{track.track.track_name}</TableCell>
              <TableCell component="td" scope="row">{track.track.artist_name}</TableCell>
              <TableCell component="td" scope="row">{track.track.album_name}</TableCell>
              <TableCell component="td" scope="row">{track.track.track_rating}</TableCell>
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

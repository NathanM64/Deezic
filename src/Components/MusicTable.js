import { TableBody, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

function MusicTable() {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow></TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

MusicTable.defaultProps = {
  data: []
};

export default MusicTable;

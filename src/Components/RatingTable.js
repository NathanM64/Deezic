import { Tooltip, Typography } from '@mui/material';

function RatingTable({ value }) {
  const rating = Math.floor(parseInt(value / 10));

  const getRate = () => {
    let items = [];
    for (let i = 0; i < rating; i++) {
      items.push(
        <Typography variant="body2" key={`1-${i}`} sx={{ color: 'white' }}>
          l
        </Typography>
      );
    }
    for (let i = 0; i < 10 - rating; i++) {
      items.push(
        <Typography variant="body2" key={`2-${i}`} sx={{ color: 'black' }}>
          l
        </Typography>
      );
    }

    return items;
  };

  return (
    <div>
      <Tooltip title={`${value / 10}/10`} placement="right">
        <span style={{ display: 'flex' }}>{getRate()}</span>
      </Tooltip>
    </div>
  );
}

export default RatingTable;

import { Input } from "@mui/material";

function SearchBar({ value, onChange }) {

  return (
    <Input type="text" value={value} onChange={onChange} sx={{ background: 'white', p: 1, border: '5px solid black' }} fullWidth />
  );
};

export default SearchBar;
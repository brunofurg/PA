import * as React from 'react';
import Pagination from '@mui/material/Pagination';
//import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export default function PaginationControlled() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    console.log(value);
    setPage(value);
  };

  return (
    <Stack spacing={2}>
      {/* <Typography>Page: {page}</Typography> */}
      <Pagination count={5} page={page} onChange={handleChange} />
    </Stack>
  );
}



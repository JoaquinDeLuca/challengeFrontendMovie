import { Box, Typography } from '@mui/material';
import Search from 'src/components/SearchMovie/Search';

export default function search() { 
  return (
    <Box> 
      <Typography variant='h6' sx={{textAlign: 'center',  margin: 4}}>Search for the movie you want</Typography>
      <Search />
    </Box>
  )
}

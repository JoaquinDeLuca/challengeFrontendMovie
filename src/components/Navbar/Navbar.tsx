import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export default function ElevateAppBar() {
  return (
    <>
        <AppBar position='sticky' sx={{height:'8vh', justifyContent: 'center'}}>
          <nav className='nav'>
            <Typography variant='h5'>
              <Link href={'/'} className='title'>Movies</Link>
            </Typography>
            <Toolbar>
              <Link href={'/favorites'} className='Link'>Favorites</Link>
              <Link href={'/search'} className='Link'>Search movie</Link>
            </Toolbar>
          </nav>
        </AppBar>
    </>
  );
}

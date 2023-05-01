import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export default function ElevateAppBar() {
  return (
    <>
        <AppBar position='sticky'>
          <nav>
            <Toolbar>
              <Typography variant='h4' sx={{flexGrow: 1}}>
                <Link href={'/'} className='title'>Challenge</Link>
              </Typography>
              <Link href={'favorites'} className='Link'>Favorites</Link>
              <Link href={'search'} className='Link'>Search a movie</Link>
            </Toolbar>
          </nav>
        </AppBar>
    </>
  );
}

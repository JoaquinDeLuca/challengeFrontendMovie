import { Container, Typography } from '@mui/material';
import { useGetMoviesQuery } from 'src/redux/services/movieApi';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies, selectState } from 'src/redux/actions/movieDetailsSlice';
import Card from 'src/components/Card/Card';

export default function Home() {
  // Me traigo el dispatch para disparar la acción setMovies
  const dispatch = useDispatch();
  // Accedo al estado de redux
  const state = useSelector(selectState);

  const {data: movieData, isSuccess, isLoading} = useGetMoviesQuery()
  if(isLoading) return <Typography variant='body1' fontSize={20} textAlign={'center'}>Loading...</Typography>
  if(isSuccess) dispatch(setMovies(movieData))

  return (
    <Container maxWidth={'xl'}>
      <Typography variant='h3' sx={{textAlign: 'center', margin: 3}}>Movies more populaires</Typography>
      <Card data={state?.results} />
    </Container>
  )
}
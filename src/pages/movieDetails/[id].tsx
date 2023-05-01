import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import CardDetails from 'src/components/DetailsMovie/DetailsCard';
import {selectState} from 'src/redux/actions/movieDetailsSlice';
import { Typography } from "@mui/material";

export default function details() {

  const router = useRouter()
  const stateMovie = useSelector(selectState);

  // Acá capturó el, id que se manda por la URL y lo paso a número para que pueda comparar el find
  const id = Number(router.query.id);

  //  A partir del estado que accedo con useSelector, hago una búsqueda intentando encontrar la peli a partir del ID de la query
  const movieDetails = stateMovie.results.find( movie => movie.id === id)

  return (
    <div>
      <Typography fontSize={30} margin={2} textAlign={'center'}>Details Movie</Typography>
      {movieDetails ? 
        <CardDetails data={movieDetails} />
       : 
        <p>No movie found</p>
      }
    </div>
  )
}
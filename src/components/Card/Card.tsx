import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActions, Container, Typography } from "@mui/material";
import { setFavorites, moviesFav } from "src/redux/actions/favoritesSlice";
import { setOneMovie } from "src/redux/actions/movieDetailsSlice";
import { useDispatch, useSelector } from "react-redux";
import { Result } from "index";
import Link from "next/link";

interface Props {
  data: Result[];
}

export default function ActionAreaCard({ data }: Props) {
  const dispatch = useDispatch();
  // Accedo al  estados de favoritos
  const moviesFavorites = useSelector(moviesFav);

  // Mi fun recibe la peli y con el dispatch disparo la acción setMovie que va a
  // setear en el estado, esa peli o la va a quitar si ya esta agregada.
  const handleClick = (movie: Result) => {
    dispatch(setFavorites(movie));
  };

  const handleLink = (movie: Result) => {
    dispatch(setOneMovie(movie))
  }

  const printCard = (movie: Result) => {
    const { id, title, backdrop_path, overview } = movie;
    //Si la pel que esta recorriendo el map, se incluye en moviesFavorites.fav,
    // puedo cambiar el valor del botón, según el includes.
    let isFavorites = moviesFavorites.Result.includes(movie);
    return (
      <Card sx={{ maxWidth: 390 }} key={id}>
        <CardMedia
          component="img"
          alt={title}
          height="200"
          image={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title.substring(0,29)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {overview.substring(0, 120)}...
          </Typography>
        </CardContent>
        <CardActions sx={{display: 'flex', justifyContent: 'space-evenly'}}>
          <Button onClick={() => handleClick(movie)} variant="outlined">
            {isFavorites ? "Remove from favorites" : "Add to favorites"}
          </Button>
          <Link className="Link" href={`movieDetails/${id}`} onClick={() => handleLink(movie)}>
            <Button variant="contained">See more</Button>
          </Link>
        </CardActions>
      </Card>
    );
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 3,
        justifyContent: "center",
        paddingLeft: 0,
        paddingRight: 0
      }}
    >
      {data?.map(printCard)}
    </Container>
  );
}

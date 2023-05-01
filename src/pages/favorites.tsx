import Card from "src/components/Card/Card";
import { useSelector } from "react-redux";
import { moviesFav } from "src/redux/actions/favoritesSlice";
import { Box, Typography } from "@mui/material";

export default function favorites() {
  // Accedo al estado de redux para poder pasarle las pelis favoritas al componente Card, así las puede pintar/mostrar
  const movieFavotires = useSelector(moviesFav);

  return (
    <>
      {/* Acá hago un condicional, para mostrar las películas favoritas que tenga y en caso de que no, muestre un mensaje  */}
      {movieFavotires.Result.length === 0 ? (
        <Box
          component={"div"}
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: 4,
            minHeight: "77vh",
          }}
        >
          <Typography variant="h5">You don't have favorites</Typography>
        </Box>
      ) : (
        <Box component={"div"} sx={{ margin: 3, minHeight: '78vh' }}>
          <Typography variant="h5" sx={{ textAlign: "center", margin: 2 }}>
            Your favorite movies
          </Typography>
          <Card data={movieFavotires.Result} />
        </Box>
      )}
    </>
  )
}

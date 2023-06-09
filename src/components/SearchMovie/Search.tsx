import { Box, Container, TextField, Typography } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import Card from "src/components/Card/Card";
import { useGetMovieSearchQuery } from "src/redux/services/movieApi";

export default function Search() {
  const [dataInput, setDataInput] = useState(
    localStorage.getItem("movieSearch") || ""
  );

  // Funcion que captura los datos del input y los setea en state
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDataInput(e.target.value);
  };

  // acá guardo en el local storoge el valor del input
  useEffect(() => {
    localStorage.setItem("movieSearch", dataInput);
  }, [dataInput]);

  const { data, isLoading, isSuccess } = useGetMovieSearchQuery(dataInput);

  const showResults = isSuccess && data && data.results && data.results.length > 0;
  const showMessage = !isLoading && (!showResults || dataInput === '');

  return (
    <Box sx={{ minHeight: '75vh'}}>
      <Box
        component={"form"}
        //Acá lo puse así para no hacer una simple fun que tenga solamente el preventDefault 
        // y no se recargue la pag si el usuario aprieta enter
        onSubmit={(e) => e.preventDefault()}
        sx={{ display: "flex",justifyContent:'center', margin: 6 }}
      >
        <TextField
          id="outlined-basic"
          label="Search a movie"
          variant="outlined"
          type="search"
          name="search"
          focused 
          required
          onChange={handleChange}
        />
      </Box>
      <Box component={"div"}>
        {isLoading && <Typography variant="h6" textAlign={"center"}>Loading...</Typography>}  
        {showMessage && <Typography textAlign={'center'} fontSize={20}> {dataInput === '' ? 'Search for the movie you want' : 'No results found'}</Typography>}
        {showResults &&
        <>
            <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              margin: 2,
            }}
            >
            <Typography variant="h6">{dataInput && `You searched: ${dataInput}` }</Typography>
          </Box>
          <Container
            maxWidth="lg"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
              justifyContent: "center"
            }}
          >
            <Card data={data?.results} />
          </Container>
        </>
        }
      </Box>
    </Box>
  );
}

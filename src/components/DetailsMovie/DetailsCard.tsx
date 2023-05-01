import { Box, Button, Container, Typography } from "@mui/material";
import { Result } from "index";
import Comments from 'src/components/Comment/Comments';
import React, { useState } from "react";

interface Props {
  data: Result;
}

export default function DetailsCard({data}:Props) {
  const [Showinputs, setShowInputs] = useState(false);
  const { title, poster_path, overview, vote_average, id, release_date, original_language, comment, nameUser } = data;

  return (
    <>
    <div className="containerDetails">
      <img className="imgDetails" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
      <div className="info">
        <Typography variant="h3">{title}</Typography>
        <Typography>{overview}</Typography>
        <Typography><Typography component={'span'} fontWeight={'500'}>Votes:</Typography> {vote_average}</Typography>
        <Typography><Typography component={'span'} fontWeight={'500'}>Realease date: </Typography>{release_date.toString()}</Typography>
        <Typography><Typography component={'span'} fontWeight={'500'}>Orginal Language: </Typography>{original_language}</Typography>
        {/* Si exite cada una de esas propiedades voy a mostrar el comentario */}
        {comment && nameUser && 
        <>
          <Typography variant="h5" marginTop={2}>Comments</Typography>
          <Typography fontWeight={'600'}>{nameUser}</Typography>
          <Typography>{comment}</Typography>
        </>
        }
        {/* logica para poder añadir un comentario  */}
        <Box>
          { <Button variant="outlined" onClick={() => setShowInputs(!Showinputs)} sx={{marginTop: 4}}>Add Comment</Button>}
        </Box>
        <Box sx={{display: 'flex',flexDirection: 'column' , width: '360px',}}>
          {Showinputs && <Comments id={id} key={id} />}
        </Box>
      </div>
    </div>
        
    </>
  );
}

import { Box, Button, TextField, Typography } from '@mui/material'
import { commentState } from 'index';
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setCommentMovie } from 'src/redux/actions/movieDetailsSlice'

interface Props{
  id: number
}

export default function Comments({id}:Props) {
  const dispatch = useDispatch();
  const [comments, setComments] = useState<commentState>({
    idMovie: id,
    nameUser: '',
    comments: ''
  })

  // fun que va capturar los datos de nuestros inputs
  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
      setComments({...comments, [name]:value});
    }

    // fun que va a disparar la acción setCommentMovie y va setear en el estado el comentario
  const handleSubmit = (e:FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(setCommentMovie(comments));
  }

  return (
    <Box sx={{display: 'flex', flexDirection: 'column'}}
        component={'form'}
        onSubmit={handleSubmit}
    >
        <Typography variant='h6' marginTop={4}>Comments</Typography>
        <TextField  id="standard-basic" label="first name" variant="standard" name='nameUser' onChange={handleChange} required/>
        <TextField
          id="standard-multiline-static"
          label="comment"
          multiline
          rows={3}
          variant="standard"
          onChange={handleChange}
          name='comments'
          required
        />
        <Button variant="contained" type='submit' sx={{marginTop:2}}>Send</Button>
    </Box>
  )
}

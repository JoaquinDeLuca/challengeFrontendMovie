import { Box, Container, Typography } from "@mui/material";

export default function Footer() {
  return (
    <>
      <Box sx={{bgcolor:'#2196f3', marginTop: 5}}>
        <Container
            sx={{display: 'flex', justifyContent: 'center', padding: 2}}
        >
            <Typography color={'white'}>
               Challenge | 2023
            </Typography>
        </Container>
      </Box>
    </>
  );
}

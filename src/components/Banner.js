import { Typography, Container, useMediaQuery} from "@mui/material";

export function Banner() {

  const isScreenSmall = useMediaQuery('(max-width:560px)');

  return (
    <Container maxWidth="sm" sx={{marginBottom: '50px'}}>
        <Typography
            component="h1"
            variant = {isScreenSmall ? 'h4' : 'h3'}
            align="center"
            color="#3e4444"
            gutterBottom
            fontFamily = 'Montserrat, sans-serif'
            fontWeight='600'
        >
            Dados COMEX
        </Typography>
        <hr style={{
            backgroundColor: 'rgb(233, 162, 8)',
            height: '5px',
            border: 'none',
            margin: '0',
            borderRadius: '5px',
        }} />
    </Container>
  );
}


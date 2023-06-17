import { Typography, Container } from '@mui/material';


export function Footer() {

  return (
    <footer style={{backgroundColor: "#527186", 
                    marginTop: 'auto', height: 150, 
                    color: 'white',  display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                  }}>
      <Container maxWidth="sm">
        <Typography variant="body1" align="center" sx={{fontFamily: 'Verdana, sans-serif'}}>
          Desenvolvido por Thomas Santos
        </Typography>
      </Container>
    </footer>
  );
}


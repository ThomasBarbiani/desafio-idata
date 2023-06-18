import { AppBar, Button, Stack, Toolbar, useMediaQuery} from "@mui/material";
import logo from "../images/logo.png";

export function Navbar() {
  
  const isScreenSmall = useMediaQuery('(max-width:850px)');

  return (
    <AppBar position="static" sx={{ height: 120, backgroundColor: "white"}}>
      <Toolbar>
          <img src={logo} alt="Logo" style={{ margin: '40px',}} height={isScreenSmall ? '40' : '70' }/>
        <Stack direction="row" spacing={2} sx={{ marginLeft: "auto", marginRight: "120px" }}>
          <Button  variant="contained" sx={{ fontSize: '1rem', 
              fontFamily: 'Verdana, sans-serif',
              backgroundColor: '#527186',
              '&:hover': {
                backgroundColor: '#435866', 
              }, }}
          >
            Opções
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}


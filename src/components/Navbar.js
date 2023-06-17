import { AppBar, Button, Stack, Toolbar} from "@mui/material";
import logo from "../images/logo.png";

export function Navbar() {
  
  return (
    <AppBar position="static" sx={{ height: 120, backgroundColor: "white"}}>
      <Toolbar>
          <img src={logo} alt="Logo" style={{ margin: '30px', height: 70 }} />
        <Stack direction="row" spacing={2} sx={{ marginLeft: "auto", marginRight: "120px" }}>
          <Button  variant="contained" sx={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'}}>
            Opçoes
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}


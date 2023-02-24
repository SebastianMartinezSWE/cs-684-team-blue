import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CatchingPokemonIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          The Big Blue Theory
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">Sign Up</Button>
          <Button color="inherit">Sign In</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

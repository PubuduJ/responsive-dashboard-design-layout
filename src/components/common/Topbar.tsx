import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import MenuIcon from '@mui/icons-material/Menu';
import sizeConfigs from "../../configs/sizeConfigs";

type Props = {
  handleDrawerOpen: () => void
}

const Topbar = ({ handleDrawerOpen }: Props) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 1,
        backgroundColor: colorConfigs.topbar.bg,
        color: colorConfigs.topbar.color,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        <div style={{ marginTop: 10, marginBottom: 10 }}>
          {/* <Logo fill="black" stroke="green" height="40" width="250" /> */}
          LOGO
        </div>

        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
        // sx={{ mr: 2, ...(open && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>

        <div style={{ marginLeft: "auto" }}>
        </div>
        {/* <ProfileMenu /> */}
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
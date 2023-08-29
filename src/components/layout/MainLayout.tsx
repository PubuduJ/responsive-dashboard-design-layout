import { Outlet } from "react-router-dom";
import { Box, styled, Toolbar } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import Sidebar from "../common/Sidebar";
import Topbar from "../common/Topbar";
import { useCallback, useState } from "react";
import { useMediaQuery } from "react-responsive";

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${sizeConfigs.sidebar.width}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const MainLayout = () => {
  const [isSideBarOpen, setisSideBarOpen] = useState(false);
  const isMobile = useMediaQuery({ query: `(max-width: 600px)` });

  const handleDrawerOpen = useCallback(() => {
    setisSideBarOpen(!isSideBarOpen);
  }, [isSideBarOpen]);

  const handleDrawerToggle = useCallback((status: boolean) => {
    setisSideBarOpen(status);
  }, [])

  return (
    <Box sx={{ display: "flex" }}>
      <Topbar handleDrawerOpen={handleDrawerOpen} />

      <Box
        component="nav"
        sx={{
          width: isSideBarOpen && !isMobile ? sizeConfigs.sidebar.width : 0,
          flexShrink: 0
        }}
      >
        <Sidebar isSideBarOpen={isSideBarOpen} handleDrawerToggle={handleDrawerToggle} />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: `100%`,
          minHeight: "100vh",
          backgroundColor: colorConfigs.mainBg
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
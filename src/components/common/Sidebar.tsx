import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import sizeConfigs from '../../configs/sizeConfigs';
import { useMediaQuery } from 'react-responsive';
import colorConfigs from '../../configs/colorConfigs';
import appRoutes from '../../routes/appRoutes';
import SidebarItemCollapse from './SidebarItemCollapse';
import SidebarItem from './SidebarItem';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

interface Props {
  window?: () => Window;
  isSideBarOpen: boolean;
  handleDrawerToggle: (isOpen: boolean) => void
}

export default function Sidebar(props: Props) {
  const [open, setOpen] = useState(false);
  const { window, isSideBarOpen, handleDrawerToggle } = props;
  const isMobile = useMediaQuery({ query: `(max-width: 600px)` });

  useEffect(() => setOpen(isSideBarOpen), [isSideBarOpen]);

  const onDrawerToggle = () => {
    setOpen(false);
    handleDrawerToggle(false)
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        container={container}
        variant="temporary"
        open={open && isMobile}
        onClose={onDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: sizeConfigs.sidebar.width },
        }}
      >
        <List disablePadding style={{
          paddingTop: 100,
          color: colorConfigs.sidebar.inactiveFontColor,
        }}>
          {appRoutes.map((route, index) => (
            route.sidebarProps ? (
              route.child ? (
                <SidebarItemCollapse item={route} key={index} />
              ) : (
                <SidebarItem item={route} key={index} />
              )
            ) : null
          ))}
        </List>

      </Drawer>
      <Drawer
        sx={{
          width: sizeConfigs.sidebar.width,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: sizeConfigs.sidebar.width,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open && !isMobile}
      >
        <List disablePadding style={{
          paddingTop: 100,
          color: colorConfigs.sidebar.inactiveFontColor,
        }}>
          {appRoutes.map((route, index) => (
            route.sidebarProps ? (
              route.child ? (
                <SidebarItemCollapse item={route} key={index} />
              ) : (
                <SidebarItem item={route} key={index} />
              )
            ) : null
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

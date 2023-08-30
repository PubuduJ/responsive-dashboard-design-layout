import React, { SetStateAction, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import sizeConfigs from '../../configs/sizeConfigs';
import { useMediaQuery } from 'react-responsive';
import colorConfigs from '../../configs/colorConfigs';
import appRoutes from '../../routes/appRoutes';
import SideBarItemCollapse from './SideBarItemCollapse';
import SideBarItem from './SideBarItem';

type Props = {
    window?: () => Window;
    isSideBarOpen: boolean;
    handleDrawerToggle: (isOpen: boolean) => void;
    setIsSideBarOpen: React.Dispatch<SetStateAction<boolean>>;
}

const SideBar = (props: Props) => {
    const [open, setOpen] = useState(false);
    const { window, isSideBarOpen, handleDrawerToggle, setIsSideBarOpen } = props;
    const isMobile = useMediaQuery({ query: `(max-width: 600px)` });

    useEffect(() => setOpen(isSideBarOpen), [isSideBarOpen]);

    const onDrawerToggle = () => {
        setOpen(false);
        handleDrawerToggle(false)
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer
                container={container}
                variant="temporary"
                open={open && isMobile}
                onClose={onDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: sizeConfigs.sidebar.width, backgroundColor: "#E5E9F1" },
                }}
            >
                <List disablePadding style={{
                    paddingTop: 70,
                    fontVariant: 'h6',
                    color: colorConfigs.sidebar.inactiveFontColor,
                    backgroundColor: "#E5E9F1"
                }}>
                    {appRoutes.map((route, index) => (
                        route.sidebarProps ? (
                            route.child ? (
                                <SideBarItemCollapse item={route} key={index} setIsSideBarOpen={setIsSideBarOpen} />
                            ) : (
                                <SideBarItem item={route} key={index} setIsSideBarOpen={setIsSideBarOpen} />
                            )
                        ) : null
                    ))}
                </List>
            </Drawer>

            <Drawer
                sx={{
                    backgroundColor: "red",
                    width: sizeConfigs.sidebar.width,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: sizeConfigs.sidebar.width,
                        boxSizing: 'border-box',
                        backgroundColor: "#E5E9F1",
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open && !isMobile}
            >
                <List disablePadding style={{
                    paddingTop: 70,
                    fontVariant: 'h6',
                    color: colorConfigs.sidebar.inactiveFontColor,
                    backgroundColor: "#E5E9F1"
                }}>
                    {appRoutes.map((route, index) => (
                        route.sidebarProps ? (
                            route.child ? (
                                <SideBarItemCollapse item={route} key={index} setIsSideBarOpen={setIsSideBarOpen} />
                            ) : (
                                <SideBarItem item={route} key={index} setIsSideBarOpen={setIsSideBarOpen} />
                            )
                        ) : null
                    ))}
                </List>
            </Drawer>
        </Box>
    );
}

export default SideBar;
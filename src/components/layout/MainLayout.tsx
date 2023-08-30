import { Outlet } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import sizeConfigs from "../../configs/sizeConfigs";
import Sidebar from "../common/Sidebar";
import Topbar from "../common/Topbar";
import { useCallback, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import {setBooleanValue} from "../../redux/features/booleanValueSlice";

const MainLayout = () => {
    const dispatch = useDispatch();


    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const isMobile = useMediaQuery({ query: `(max-width: 600px)` });

    const handleDrawerOpen = useCallback(() => {
        setIsSideBarOpen(!isSideBarOpen);
        dispatch(setBooleanValue(!isSideBarOpen))

    }, [isSideBarOpen]);

    const handleDrawerToggle = useCallback((status: boolean) => {
        setIsSideBarOpen(status);
    }, []);

    return (
        <>
            <Topbar handleDrawerOpen={handleDrawerOpen} />
            <Box sx={{ display: "flex", backgroundColor: "#E5E9F1" }}>
                <Box
                    component="nav"
                    sx={{
                        width: isSideBarOpen && !isMobile ? sizeConfigs.sidebar.width : 0,
                    }}
                >
                    <Sidebar
                        isSideBarOpen={isSideBarOpen}
                        handleDrawerToggle={handleDrawerToggle}
                        setIsSideBarOpen={setIsSideBarOpen}
                    />
                </Box>
                <Box
                    component="main"
                    marginTop={"64px"}
                    minHeight={"calc(100vh - 64px)"}
                    flexGrow={1}
                    width={"100px"}
                    bgcolor={"#E5E9F1"}
                    // Change 1. Make mui box position to relative.
                    position={"relative"}
                >
                    <Box
                        // Change 2. Add A log as a background image of the mui box.
                        width={(window.innerWidth > 600) ? "915px" : "750px"}
                        height={"100%"}
                        right={0}
                        position={"absolute"}
                        sx={{
                            backgroundImage: 'url(/Logo-Big-A.svg)',
                            backgroundRepeat: "no-repeat"
                        }}
                    ></Box>
                    <Box
                        // Change 3. Put outlet to a mui box.
                        position={"relative"}
                    >
                        <Outlet />
                    </Box>
                </Box>
            </Box>
            <Box
                pt={1} pb={1}
                bgcolor={"#E5E9F1"}
                component={"footer"}
                textAlign={"center"}
                position={"fixed"}
                bottom={0}
                sx={{
                    left: isSideBarOpen && !isMobile ? sizeConfigs.sidebar.width : 0,
                    width: isSideBarOpen && !isMobile ? `calc(100% - ${sizeConfigs.sidebar.width})` : "100%",
                }}
            >
                <Typography variant={"caption"}>© {new Date().getFullYear()} Pubudu Janith</Typography>
            </Box>
        </>
    );
};

export default MainLayout;
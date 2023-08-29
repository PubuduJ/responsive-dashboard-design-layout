import {Box, Toolbar} from "@mui/material";
import TopBar from "../common/TopBar";
import sizeConfigs from "../../configs/sizeConfigs";
import SideBar from "../common/SideBar";
import colorConfigs from "../../configs/colorConfigs";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <Box sx={{display: "flex"}}>
                <TopBar/>
                <Box
                    component={"nav"}
                    sx={{
                        width: sizeConfigs.sidebar.width,
                        flexShrink: 0
                    }}
                >
                    <SideBar/>
                </Box>
                <Box
                    component={"main"}
                    sx={{
                        flexGrow: 1,
                        p: 3,
                        width: `calc(100% - ${sizeConfigs.sidebar.width})`,
                        minHeight: "100vh",
                        backgroundColor: colorConfigs.mainBg
                    }}
                >
                    <Toolbar/>
                    <Outlet/>
                </Box>
            </Box>
        </>
    )
}

export default MainLayout;
import {Outlet} from "react-router-dom";
import {Box, Toolbar} from "@mui/material";
import sizeConfigs from "../../configs/sizeConfigs";
import colorConfigs from "../../configs/colorConfigs";
import Topbar from "../common/Topbar";
import Sidebar from "../common/Sidebar";

function MainLayout() {
    // After Topbar and sidebar, Outlet is represented the main body content.
    // Outlet is used to inject nested children content to it.
    return (
        <Box sx={{
            display: "flex",
        }}>
            <Topbar/>
            <Sidebar/>
            <Box
                component={"main"}
                sx={{
                    flexGrow: 1,
                    padding: 3,
                    width: `calc(100% - ${sizeConfigs.sidebar.width})`,
                    minHeight: "100vh",
                    backgroundColor: colorConfigs.mainBg
                }}
            >
                <Toolbar/>
                <Outlet/>
            </Box>
        </Box>
    )
}

export default MainLayout;
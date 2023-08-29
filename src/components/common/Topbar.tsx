import {AppBar, Toolbar, Typography} from "@mui/material";
import sizeConfigs from "../../configs/sizeConfigs";
import colorConfigs from "../../configs/colorConfigs";

function Topbar() {
    // Topbar markup by MUI.
    return (
        <AppBar
            position={"fixed"}
            sx={{
                width: `calc(100% - ${sizeConfigs.sidebar.width})`,
                marginLeft: sizeConfigs.sidebar.width,
                boxShadow: "unset",
                backgroundColor: colorConfigs.topbar.bg,
                color: colorConfigs.topbar.color
            }}
        >
            <Toolbar>
                <Typography variant={"h4"}>
                    React Top Bar
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Topbar;
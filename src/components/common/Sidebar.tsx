import {Avatar, Drawer, List, Stack, Toolbar} from "@mui/material";
import sizeConfigs from "../../configs/sizeConfigs";
import colorConfigs from "../../configs/colorConfigs";
import assets from "../../assets";
import appRoutes from "../../routes/appRoutes";
import {RouteType} from "../../routes/config";
import SidebarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";

function Sidebar() {
    return (
        <Drawer
            variant={"permanent"}
            sx={{
                width: sizeConfigs.sidebar.width,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: sizeConfigs.sidebar.width,
                    boxSizing: "border-box",
                    borderRight: "0px",
                    backgroundColor: colorConfigs.sidebar.bg,
                    color: colorConfigs.sidebar.color
                }
            }}
        >
            <List disablePadding>
                <Toolbar sx={{marginBottom: "20px"}}>
                    <Stack
                        sx={{width: "100%"}}
                        direction={"row"}
                        justifyContent={"center"}
                    >
                        <Avatar src={assets.images.logo}/>
                    </Stack>
                </Toolbar>
                {appRoutes.map((route: RouteType, index: number) => {
                    return (
                        route.sidebarProps ? (
                            route.child ? (
                                <SidebarItemCollapse key={index} item={route}/>
                            ) : (
                                <SidebarItem key={index} item={route}/>
                            )
                        ) : null
                    );
                })}
            </List>
        </Drawer>
    );
}

export default Sidebar;
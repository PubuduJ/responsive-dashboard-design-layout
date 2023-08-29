import {RouteType} from "../../routes/config";
import {ListItemButton, ListItemIcon} from "@mui/material";
import {Link} from "react-router-dom";
import colorConfigs from "../../configs/colorConfigs";
import {useAppSelector} from "../../redux/store";

type Props = {
    item: RouteType
}

function SidebarItem({item}: Props) {
    const {appState} = useAppSelector((store) => {
        return store.appState;
    });

    if (item.sidebarProps && item.path) {
        return (
            <ListItemButton
                component={Link}
                to={item.path}
                sx={{
                    "&: hover": {
                        backgroundColor: colorConfigs.sidebar.hoverBg
                    },
                    backgroundColor: appState === item.state ? colorConfigs.sidebar.activeBg : "unset",
                    paddingY: "12px",
                    paddingX: "24px"
                }}
            >
                <ListItemIcon
                    sx={{
                        color: colorConfigs.sidebar.color
                    }}
                >
                    {item.sidebarProps.icon}
                </ListItemIcon>
                {item.sidebarProps.displayText}
            </ListItemButton>
        );
    }
    else if (item.sidebarProps && item.index) {
        return (
            <ListItemButton
                component={Link}
                to={"/"}
                sx={{
                    "&: hover": {
                        backgroundColor: colorConfigs.sidebar.hoverBg
                    },
                    backgroundColor: appState === item.state ? colorConfigs.sidebar.activeBg : "unset",
                    paddingY: "12px",
                    paddingX: "24px"
                }}
            >
                <ListItemIcon
                    sx={{
                        color: colorConfigs.sidebar.color
                    }}
                >
                    {item.sidebarProps.icon}
                </ListItemIcon>
                {item.sidebarProps.displayText}
            </ListItemButton>
        );
    }
    else return null;
}

export default SidebarItem;
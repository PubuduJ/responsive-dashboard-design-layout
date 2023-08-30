import { ListItemButton, ListItemIcon, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import colorConfigs from "../../configs/colorConfigs";
import { RootState } from "../../redux/store";
import { RouteType } from "../../routes/config";
import React, {SetStateAction} from "react";

type Props = {
    item: RouteType;
    setIsSideBarOpen: React.Dispatch<SetStateAction<boolean>>;
};

const SideBarItem = ({ item, setIsSideBarOpen }: Props) => {
    const { appState } = useSelector((state: RootState) => state.appState);

    return (
        item.sidebarProps && item.path ? (
            <ListItemButton
                component={Link}
                to={item.path}
                onClick={() => {
                    setIsSideBarOpen(false);
                }}
                sx={{
                    "&: hover": {
                        backgroundColor: colorConfigs.sidebar.hoverBg
                    },
                    backgroundColor: appState === item.state ? colorConfigs.sidebar.activeBg : "unset",
                    paddingY: "12px",
                    paddingX: "24px",
                    color: appState === item.state ? colorConfigs.sidebar.activeFontColor : colorConfigs.sidebar.inactiveFontColor,
                }}
            >
                <ListItemIcon sx={{
                    color: colorConfigs.sidebar.activeFontColor,
                }}>
                    {item.sidebarProps.icon && item.sidebarProps.icon}
                </ListItemIcon>
                <Typography variant='h6' >
                    {item.sidebarProps.displayText}
                </Typography>
            </ListItemButton>
        ) : null
    );
};

export default SideBarItem;
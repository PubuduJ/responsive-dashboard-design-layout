import {RouteType} from "../../routes/config";
import React, {useEffect, useState} from "react";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import colorConfigs from "../../configs/colorConfigs";
import {Collapse, List, ListItemButton, ListItemIcon, ListItemText, Typography} from "@mui/material";
import SidebarItem from "./SidebarItem";
import {useAppSelector} from "../../redux/store";

type Props = {
    item: RouteType
}

function SidebarItemCollapse({item}: Props) {
    const[open, setOpen] = useState<boolean>(false);

    const {appState} = useAppSelector((store) => {
        return store.appState;
    });

    useEffect(() => {
        // if current state is matched with the item state, when page refresh open will be true.
        if (appState.includes(item.state)) {
            setOpen(true);
        }
    }, [appState, item])

    return (
        item.sidebarProps ? (
            <>
                <ListItemButton
                    onClick={() => {setOpen(!open)}}
                    sx={{
                        "&: hover": {
                            backgroundColor: colorConfigs.sidebar.hoverBg
                        },
                        paddingY: "12px",
                        paddingX: "24px"
                    }}
                >
                    <ListItemIcon
                        sx={{
                            color: colorConfigs.sidebar.color
                        }}
                    >
                        {item.sidebarProps.icon && item.sidebarProps.icon}
                    </ListItemIcon>
                    <ListItemText
                        disableTypography
                        primary={
                            <Typography>
                                {item.sidebarProps.displayText}
                            </Typography>
                        }
                    />
                    {open ? <ExpandLessOutlinedIcon/> : <ExpandMoreOutlinedIcon/>}
                </ListItemButton>
                <Collapse in={open} timeout={"auto"}>
                    <List>
                        {item.child?.map((route: RouteType, index: number) => {
                            return (
                                route.sidebarProps ? (
                                    route.child ? (
                                        <SidebarItemCollapse item={route} key={index}/>
                                    ) : (
                                        // We can return this only also.
                                        <SidebarItem item={route} key={index}/>
                                    )
                                ) : null
                            );
                        })}
                    </List>
                </Collapse>
            </>
        ) : null
    );
}

export default SidebarItemCollapse;
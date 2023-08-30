import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import AddHomeOutlinedIcon from '@mui/icons-material/AddHomeOutlined';
import {RouteType} from "./config";
import HomePage from "../pages/home/HomePage";
import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout";
import DefaultPage from "../pages/dashboard/DefaultPage";
import DashboardIndex from "../pages/dashboard/DashboardIndex";
import ChangelogPage from "../pages/changelog/ChangelogPage";
import AnalyticsPage from "../pages/dashboard/AnalyticsPage";
import SaasPage from "../pages/dashboard/SaasPage";

const appRoutes: RouteType[] = [
    {
        index: true,
        element: <HomePage/>,
        state: "home",
        sidebarProps: {
            displayText: "Home",
            icon: <AddHomeOutlinedIcon/>
        }
    },
    {
        path: "/dashboard",
        element: <DashboardPageLayout/>,
        state: "dashboard",
        sidebarProps: {
            displayText: "Dashboard",
            icon: <DashboardOutlinedIcon/>
        },
        child: [
            {
                index: true,
                element: <DashboardIndex/>,
                state: "dashboard.index"
            },
            {
                path: "/dashboard/default",
                element: <DefaultPage/>,
                state: "dashboard.default",
                sidebarProps: {
                    displayText: "Default"
                }
            },
            {
                path: "/dashboard/analytics",
                element: <AnalyticsPage/>,
                state: "dashboard.analytics",
                sidebarProps: {
                    displayText: "AnalyticsPage"
                }
            },
            {
                path: "/dashboard/sass",
                element: <SaasPage/>,
                state: "dashboard.sass",
                sidebarProps: {
                    displayText: "SassPage"
                }
            }
        ]
    },
    {
        element: <ChangelogPage/>,
        state: "changelog",
        sidebarProps: {
            displayText: "Changelog",
            icon: <FormatListBulletedOutlinedIcon/>
        }
    }
]

export default appRoutes;
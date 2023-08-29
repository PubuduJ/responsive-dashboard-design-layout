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
// Define all the routes in the application using appRoutes array.

const appRoutes: RouteType[] = [
    {
        // This is the index route, path will be same path as "/"
        index: true,
        element: <HomePage/>,
        state: "home",
        sidebarProps: {
            displayText: "Home",
            icon: <AddHomeOutlinedIcon/>
        }
    },
    {
        // Dashboard page has its own children.
        // Hence, Dashboard page layout has its own outlet to inject those as well.
        path: "/dashboard",
        element: <DashboardPageLayout/>,
        state: "dashboard",
        sidebarProps: {
            displayText: "Dashboard",
            icon: <DashboardOutlinedIcon/>
        },
        child: [
            // when path is "/dashboard", this element will be displayed in the main container.
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
        // When path is "/changelog" this element will be displayed in the main container.
        path: "/changelog",
        element: <ChangelogPage/>,
        state: "changelog",
        sidebarProps: {
            displayText: "Changelog",
            icon: <FormatListBulletedOutlinedIcon/>
        }
    }
]

export default appRoutes;
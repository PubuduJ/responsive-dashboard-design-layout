import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import AddHomeOutlinedIcon from '@mui/icons-material/AddHomeOutlined';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Person3Icon from '@mui/icons-material/Person3';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import {RouteType} from "./config";
import HomePage from "../pages/home/HomePage";
import Admin from "../pages/admin/Admin";
import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout";
import DefaultPage from "../pages/dashboard/DefaultPage";
import DashboardIndex from "../pages/dashboard/DashboardIndex";
import ChangelogPage from "../pages/changelog/ChangelogPage";
import AnalyticsPage from "../pages/dashboard/AnalyticsPage";
import SaasPage from "../pages/dashboard/SaasPage";
import UserManagement from "../pages/user/UserManagement";
import RoleManagement from "../pages/user/RoleManagement";
import UserPageLayout from "../pages/user/UserPageLayout";
import ReportPageLayout from "../pages/report/ReportPageLayout";
import AnalyticalReports from "../pages/report/AnalyticalReports";
import InternalReports from "../pages/report/InternalReports";
import ProposalReports from "../pages/report/ProposalReports";
import SalesReports from "../pages/report/SalesReports";

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
        path: "/admin",
        element: <Admin/>,
        state: "admin",
        sidebarProps: {
            displayText: "Admin",
            icon: <AdminPanelSettingsIcon/>
        }
    },
    {
        path: "/user",
        element: <UserPageLayout/>,
        state: "user",
        sidebarProps: {
            displayText: "User",
            icon: <Person3Icon/>
        },
        child: [
            {
                path: "/user/user-management",
                element: <UserManagement/>,
                state: "user.user-management",
                sidebarProps: {
                    displayText: "User Management",
                },
            },
            {
                path: "/user/role-management",
                element: <RoleManagement/>,
                state: "user.role-management",
                sidebarProps: {
                    displayText: "Role Management",
                }
            }
        ]
    },
    {
        path: "/reports",
        element: <ReportPageLayout/>,
        state: "Reports",
        sidebarProps: {
            displayText: "Reports",
            icon: <LibraryBooksIcon/>
        },
        child: [
            {
                path: "/reports/analytical-reports",
                element: <AnalyticalReports/>,
                state: "reports.analytical-reports",
                sidebarProps: {
                    displayText: "Analytical Reports",
                },
            },
            {
                path: "/reports/internal-reports",
                element: <InternalReports/>,
                state: "reports.internal-reports",
                sidebarProps: {
                    displayText: "Internal Reports",
                }
            },
            {
                path: "/reports/proposal-reports",
                element: <ProposalReports/>,
                state: "reports.proposal-reports",
                sidebarProps: {
                    displayText: "Proposal Reports",
                }
            },
            {
                path: "/reports/sales-reports",
                element: <SalesReports/>,
                state: "reports.sales-reports",
                sidebarProps: {
                    displayText: "Sales Reports",
                }
            }
        ]
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
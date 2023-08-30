import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Person3Icon from '@mui/icons-material/Person3';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import {RouteType} from "./config";
import Admin from "../pages/admin/Admin";
import UserManagement from "../pages/user/UserManagement";
import RoleManagement from "../pages/user/RoleManagement";
import UserPageLayout from "../pages/user/UserPageLayout";
import ReportPageLayout from "../pages/report/ReportPageLayout";
import AnalyticalReports from "../pages/report/AnalyticalReports";
import InternalReports from "../pages/report/InternalReports";
import ProposalReports from "../pages/report/ProposalReports";
import SalesReports from "../pages/report/SalesReports";
import Dashboard from "../pages/dashboard/Dashboard";
import Settings from "../pages/settings/Settings";

const appRoutes: RouteType[] = [
    {
        index: true,
        element: <Dashboard/>,
        state: "home",
        sidebarProps: {
            displayText: "Dashboard",
            icon: <DashboardIcon/>
        }
    },
    {
        path: "/dashboard",
        element: <Dashboard/>,
        state: "dashboard",
        sidebarProps: {
            displayText: "Dashboard",
            icon: <DashboardIcon/>
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
        path: "/settings",
        element: <Settings/>,
        state: "settings",
        sidebarProps: {
            displayText: "Settings",
            icon: <SettingsIcon/>
        }
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
    }
]

export default appRoutes;
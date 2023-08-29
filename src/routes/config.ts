import {ReactNode} from "react";
// Define the RouteType.
// appRoutes RouteType array is used to define routes as well as used in Sidebar component.

export type RouteType = {
    // index is used to denote whether it is index route or not.
    index?: boolean,
    // path is the absolute path from the "/", since we inject routes under the "/".
    path?: string,
    // element is used to represent the element prop in the route.
    element: ReactNode,
    // state is used to represent the state of the route.
    state: string,
    // child array is used to define the child routes.
    child?: RouteType[],
    // sidebarProps are used to give the functionality of the side bar to navigate to correct body page.
    sidebarProps?: {
        // Icon of the sidebar text.
        icon?: ReactNode
        // Sidebar text.
        displayText: string,
    }
};
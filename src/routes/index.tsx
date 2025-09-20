import App from "@/App";
import about from "@/pages/About";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        // element: <App />,
        Component: App,
        path: "/",
        children: [
            {
                path: "about",
                Component: about
            }
        ]
    },
    {
        path: "/login",
        Component: Login
    },
    {
        path: "/register",
        Component: Register
    }

])
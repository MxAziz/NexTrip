import App from "@/App";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        // element: <App />,
        Component: App,
        path: "/",
        children: [
            {
                path: "about",
                Component: () => <div>about page</div>
            }
        ]
    },

])

import { createBrowserRouter } from "react-router-dom"
import Layout from "../layout/Layout"
import HoneyMap from "../pages/HoneyMap/HoneyMap"



const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <HoneyMap />,
            },
        ],
    },
])

export default router
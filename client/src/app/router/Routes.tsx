import { createBrowserRouter, Navigate } from "react-router";
import App from "../layout/App";
import NotFound from "../../features/errors/NotFound";
import TaskItemsPage from "../layout/taskItems/TaskItemPage";
import ServerError from "../../features/errors/ServerError";


/* If nothing working and you dont use [<TaskItemPage />] then you cdn [delete] this */
export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <TaskItemsPage /> }, // default page for /
            { path: 'taskItems', element: <TaskItemsPage /> },
            { path: 'not-found', element: <NotFound /> },
            { path: 'server-error', element: <ServerError /> },
            { path: '*', element: <Navigate replace to='/not-found' /> },
        ],
    },
]);
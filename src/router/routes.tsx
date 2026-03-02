import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/pages/HomePage";
import AgeStatisticsPage from "../components/pages/AgeStatisticsPage";
import SalaryStatisticsPage from "../components/pages/SalaryStatisticsPage";
import DepartmentStatisticsPage from "../components/pages/DepartmentStatisticsPage";
import LayoutPage from "../components/pages/LayoutPage";
import AddEmployeePage from "../components/pages/AddEmployeePage";
import StatisticsPage from "../components/pages/StatisticsPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "add", element: <AddEmployeePage /> },
      {
        path: "statistics",
        element: <StatisticsPage />,
        children: [
          { path: "age", element: <AgeStatisticsPage /> },
          { path: "salary", element: <SalaryStatisticsPage /> },
          {
            path: "department",
            element: <DepartmentStatisticsPage />,
          },
        ],
      },
    ],
  },
]);
export default router;

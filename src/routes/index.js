import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "layouts/index";

function Loadable(Component) {
  const result = (props) => (
    <Suspense fallback={<></>}>
      <Component {...props} />
    </Suspense>
  );
  return result;
}

export default function Router() {
  return useRoutes([
    {
      element: (<MainLayout />),
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "resources",
          element: <Resources />,
        },
        {
          path: "careers",
          element: <Careers />,
        },
        {
          path: "privacy",
          element: <Privacy />,
        },
        {
          path: "terms",
          element: <Terms />,
        },
        {
          path: "research",
          element: <Research />,
        },
      ]
    }
  ]);
}


const Home = Loadable(
  lazy(() => import("views/home"))
);
const Resources = Loadable(
  lazy(() => import("views/resources"))
);
const Careers = Loadable(
  lazy(() => import("views/careers"))
);
const Privacy = Loadable(
  lazy(() => import("views/privacy"))
);
const Terms = Loadable(
  lazy(() => import("views/terms"))
);
const Research = Loadable(
  lazy(() => import("views/research"))
);

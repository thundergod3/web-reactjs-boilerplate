import { Switch, Route } from "react-router-dom";
import { lazy } from "react";

import ROUTES from "@/constants/routes";

// Lazy load pages
const Homepage = lazy(() => import("./homepage"));

const MainRoute = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.home} component={Homepage} />
    </Switch>
  );
};

export default MainRoute;

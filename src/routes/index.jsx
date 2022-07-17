import { Route, Switch } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { About } from "../pages/About";
import { Projects } from "../pages/Projects";
import { Techs } from "../pages/Techs";
import { Contact } from "../pages/Contact";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/About">
        <About />
      </Route>
      <Route exact path="/Projects">
        <Projects />
      </Route>
      <Route exact path="/Techs">
        <Techs />
      </Route>
      <Route exact path="/Contact">
        <Contact />
      </Route>
    </Switch>
  );
};

export default Routes;

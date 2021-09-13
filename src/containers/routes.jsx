import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { HooksMainComponent } from "./usingHooks/HooksMain";
import { ReduxMainComponent } from "./usingRedux/ReduxMain";

export const Routing = () => {
  return (
    // BROWSERROUTER - router implementation that uses the HTML5 history API(pushState, replaceState and the popstate event) to keep your UI in sync with the URL
    <BrowserRouter>
      <div>
        <ul>
          <li>
            {/* LINK - used to create links to different routes and implement
            navigation around the application. It works like HTML anchor tag */}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/hooks">Hooks Example</Link>
          </li>
          <li>
            <Link to="/redux">Redux Examples</Link>
          </li>
          <li>
            <Link to="/sample">Check Here</Link>
          </li>
        </ul>
        {/* SWITCH - used to render only the first route that matches the location
            rather than rendering all matching routes 
            ROUTE - the conditionally shown component that renders some UI when
            its path matches the current URL */}
        <Switch>
          <Route exact path="/"></Route>
          <Route exact path="/hooks">
            <HooksMainComponent />
          </Route>
          <Route exact path="/redux" component={ReduxMainComponent}></Route>
          {/* Component can be added via 2 ways - using component='' OR between Tags */}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

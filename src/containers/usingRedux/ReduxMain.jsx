import { Fragment } from "react";
import BugsFunctionalComponent from "../../components/bugs/BugsFunctionalCompUsingHooks";
import BugsClassCompDirectDispatch from "../../components/bugs/BugsClassCompDirectDispatch";
import BugsClassCompUsingConnect from "../../components/bugs/BugsClassCompUsingConnect";

export const ReduxMainComponent = () => {
  return (
    <Fragment>
      <BugsFunctionalComponent />
      <BugsClassCompDirectDispatch />
      <BugsClassCompUsingConnect />
    </Fragment>
  );
};

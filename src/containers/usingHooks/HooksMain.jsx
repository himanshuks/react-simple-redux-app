import { Fragment } from "react";
import { ClickCounter } from "../../components/hooksExample/ClickCounter";
import { APIFunctions } from "../../components/hooksExample/WorkingAPI";

export const HooksMainComponent = () => {
  return (
    <Fragment>
      <ClickCounter />
      <APIFunctions />
    </Fragment>
  );
};

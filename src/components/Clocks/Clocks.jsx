import { Clock } from "./Clock.jsx";

export const Clocks = ({ timeFull, timeLap, classes }) => (
  <div className={classes}>
    <Clock timeInDecs={timeFull}>full time</Clock>
    <Clock timeInDecs={timeLap}>lap time</Clock>
  </div>
);

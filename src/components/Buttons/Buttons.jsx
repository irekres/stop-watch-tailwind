import { StartStopButton } from "./StartStopButton.jsx";
import { ResetButton } from "./ResetButton.jsx";
import { LapButton } from "./LapButton.jsx";

export const Buttons = ({
  isRunning,
  onStartStop,
  onReset,
  onLap,
  classes,
}) => (
  <div className={classes}>
    <StartStopButton isRunning={isRunning} onStartStop={onStartStop} />
    <ResetButton onReset={onReset} />
    {isRunning && <LapButton onLap={onLap} />}
  </div>
);

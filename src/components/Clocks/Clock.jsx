import { timeFormat } from "../../../utils/timeFormat.js";

export const Clock = ({ timeInDecs, children }) => {
  return (
    <div className="clocks text-xs uppercase">
      <div className="text-center">{children}</div>
      <div className="text-center text-6xl">{timeFormat(timeInDecs)}</div>
    </div>
  );
};

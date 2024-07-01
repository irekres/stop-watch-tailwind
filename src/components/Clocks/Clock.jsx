import { timeFormat } from "../../../utils/timeFirmat.js";

export const Clock = ({ timeInDecs, children }) => {
  return (
    <div className="clocks text-xs uppercase">
      <div className="text-center">{children}</div>
      <div className="text-center text-3xl">{timeFormat(timeInDecs)}</div>
    </div>
  );
};

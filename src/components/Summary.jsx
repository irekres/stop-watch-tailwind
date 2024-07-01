import { timeFormat } from "../../utils/timeFormat.js";
import { averageLapTime } from "../../utils/averageLapTime.js";

export const Summary = ({
  classes,
  fullTime,
  timeOfLaps,
  numberOfLaps,
  fastestLap,
  slowestLap,
}) => (
  <div className={classes}>
    {fullTime === 0 ? (
      <p className="uppercase italic font-mono text-3xl text-orange-600 h-screen flex flex-col justify-center items-center">
        There is no results yet.
      </p>
    ) : (
      <table className="table-auto w-4/5">
        <tbody>
          <tr>
            <td>Full time:</td>
            <td>{timeFormat(fullTime)}</td>
          </tr>
          {numberOfLaps > 0 && (
            <tr>
              <td>Number of laps:</td>
              <td>{numberOfLaps}</td>
            </tr>
          )}
          {numberOfLaps > 1 ? (
            <>
              <tr>
                <td>Average lap time:</td>
                <td>{averageLapTime(timeOfLaps, numberOfLaps)}</td>
              </tr>
              <tr>
                <td>Fastest lap:</td>
                <td>{timeFormat(fastestLap)}</td>
              </tr>
              <tr>
                <td>Slowest lap:</td>
                <td>{timeFormat(slowestLap)}</td>
              </tr>
            </>
          ) : (
            <tr>
              <td>Time of lap:</td>
              <td>{timeFormat(fastestLap)}</td>
            </tr>
          )}
        </tbody>
      </table>
    )}
  </div>
);

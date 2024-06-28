import { Lap } from "./Lap.jsx";

export const Laps = ({ laps, classes }) => {
  const headers = ["nr", "when it was", "time"];

  return (
    <div className={classes}>
      {laps.length === 0 ? (
        <p className="uppercase italic font-mono text-3xl text-orange-600 h-screen flex flex-col justify-center items-center">
          There is no results yet.
        </p>
      ) : (
        <table className="table-auto w-4/5">
          <caption className="caption-top uppercase italic font-mono text-3xl text-orange-600">
            Results of laps
          </caption>
          <thead>
            <tr>
              {headers.map((header) => (
                <th className="border border-slate-600 uppercase">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {laps.map((lap) => (
              <Lap key={lap.nr}>{lap}</Lap>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

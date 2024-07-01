import { useEffect, useState } from "react";

import { Buttons } from "./Buttons/Buttons.jsx";
import { Clocks } from "./Clocks/Clocks.jsx";
import { Laps } from "./Laps/Laps.jsx";

export const StopWatch = () => {
  const [laps, setLaps] = useState([]);
  const [timeFull, setTimeFull] = useState(0);
  const [timeLap, setTimeLap] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTimeFull((prevState) => prevState + 1);
        setTimeLap((prevState) => prevState + 1);
      }, 100);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning((prevState) => !prevState);
  };

  const handleReset = () => {
    setTimeFull(0);
    setTimeLap(0);
    setLaps([]);
  };

  const handleLap = () => {
    const current = new Date();
    setLaps((prevState) => [
      ...prevState,
      {
        nr: prevState.length + 1,
        date: current.toLocaleDateString() + " " + current.toLocaleTimeString(),
        time: timeLap,
      },
    ]);

    setTimeLap(0);
  };

  return (
    <div className="h-screen min-w-[800px] min-h-[800px] grid grid-cols-[300px_1fr] auto-rows-fr">
      <Clocks
        timeFull={timeFull}
        timeLap={timeLap}
        classes="col-start-1 col-end-2 row-start-1 row-end-2 flex flex-col justify-evenly items-center"
      />
      <Laps
        laps={laps}
        classes="col-start-2 col-end-3 row-start-1 row-end-3 flex flex-row justify-center items-start"
      ></Laps>
      <Buttons
        isRunning={isRunning}
        onStartStop={handleStartStop}
        onReset={handleReset}
        onLap={handleLap}
        classes="col-start-1 col-end-2 row-start-2 row-end-3
      grid grid-rows-3"
      ></Buttons>
    </div>
  );
};

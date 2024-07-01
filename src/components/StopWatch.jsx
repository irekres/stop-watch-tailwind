import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

import { Buttons } from "./Buttons/Buttons.jsx";
import { Clocks } from "./Clocks/Clocks.jsx";
import { Laps } from "./Laps/Laps.jsx";
import { Summary } from "./Summary.jsx";

export const StopWatch = () => {
  const [laps, setLaps] = useState([]);
  const [fastestSlowest, setFastestSlowest] = useState({
    fastestLap: 0,
    slowestLap: 0,
    timeOfLaps: 0,
  });
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

  useEffect(() => {
    const tempArray = laps.map((lap) => lap.time);
    setFastestSlowest({
      fastestLap: Math.min(...tempArray),
      slowestLap: Math.max(...tempArray),
      timeOfLaps:
        tempArray.length === 0
          ? 0
          : tempArray.reduce((acc, curr) => acc + curr),
    });
  }, [laps.length]);

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
        id: uuid(),
        nr: prevState.length + 1,
        date: current.toLocaleDateString() + " " + current.toLocaleTimeString(),
        time: timeLap,
      },
    ]);

    setTimeLap(0);
  };

  return (
    <div className="h-screen min-w-[800px] min-h-[800px] grid grid-cols-[400px_1fr] auto-rows-fr">
      <Clocks
        classes="col-start-1 col-end-2 row-start-1 row-end-2 flex flex-col justify-evenly items-center"
        timeFull={timeFull}
        timeLap={timeLap}
      />
      {isRunning ? (
        <Laps
          classes="max-w-7xl col-start-2 col-end-3 row-start-1 row-end-3 flex flex-row justify-center items-start"
          laps={laps}
        ></Laps>
      ) : (
        <Summary
          classes="min-w-[600px] max-w-7xl uppercase italic font-mono text-3xl text-orange-600 h-screen flex flex-col justify-center items-center"
          fullTime={timeFull}
          timeOfLaps={fastestSlowest.timeOfLaps}
          numberOfLaps={laps.length}
          fastestLap={fastestSlowest.fastestLap}
          slowestLap={fastestSlowest.slowestLap}
        />
      )}
      <Buttons
        classes="col-start-1 col-end-2 row-start-2 row-end-3 grid grid-rows-3"
        isRunning={isRunning}
        onStartStop={handleStartStop}
        onReset={handleReset}
        onLap={handleLap}
      ></Buttons>
    </div>
  );
};

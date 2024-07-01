import { timeFormat } from "./timeFormat.js";

export const averageLapTime = (fullTime, numberOfLaps) =>
  timeFormat(fullTime / numberOfLaps);

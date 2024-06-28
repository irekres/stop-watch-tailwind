export const StartStopButton = ({ isRunning, onStartStop }) => (
  <button
    type="button"
    className="text-lime-700 hover:text-white border border-lime-700 hover:bg-lime-800 focus:ring-4
    focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
    me-2 mb-2 dark:border-lime-500 dark:text-lime-500 dark:hover:text-white dark:hover:bg-lime-700
    dark:focus:ring-lime-800"
    onClick={onStartStop}
  >
    {isRunning ? "STOP" : "START"}
  </button>
);

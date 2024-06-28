export const Clock = ({ timeInDecs, children }) => {
  const format = (decs) => {
    const dec = decs % 10;
    const sec = Math.floor((decs - dec) / 10) % 60;
    const min = Math.floor((decs - sec * 10 - (decs % 10)) / 600);

    return `${min > 9 ? min : "0" + min} : ${
      sec > 9 ? sec : "0" + sec
    } : ${dec}`;
  };
  return (
    <div className="clocks text-xs uppercase">
      <div className="text-center">{children}</div>
      <div className="text-center text-3xl">{format(timeInDecs)}</div>
    </div>
  );
};

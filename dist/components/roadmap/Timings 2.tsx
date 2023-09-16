import Icon from "./Icon";

interface Props {
  timerMin: String;
  timerMax: String;
  calendar: String;
  timerMinColor: String;
  timerMaxColor: String;
  calendarColor: String;
}

function Timings({
  timerMin,
  timerMax,
  calendar,
  timerMinColor,
  timerMaxColor,
  calendarColor,
}: Props) {
  const timerMinTextString = timerMinColor + "-text";
  const timerMaxTextString = timerMaxColor + "-text";
  const calendarTextString = calendarColor + "-text";
  return (
    <>
      <div className="icon-row">
        <Icon type="timer" />{" "}
        <span className={timerMinTextString}>{timerMin}</span> -{" "}
        <span className={timerMaxTextString}>{timerMax}</span>
      </div>
      <div className="icon-row">
        <Icon type="calendar" />{" "}
        <span className={calendarTextString}>{calendar}</span>
      </div>
    </>
  );
}

export default Timings;

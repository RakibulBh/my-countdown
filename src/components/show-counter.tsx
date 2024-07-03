import DateTimeDisplay from "./date-time-display";

export const ShowCounter = ({
  days,
  hours,
  minutes,
  seconds,
}: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}) => {
  return (
    <div className="p-[3rem] mt-20 bg-black rounded-xl shadow-white-glow">
      <a
        href="https://tapasadhikary.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row justify-center items-center font-bold text-xl leading-7 p-2 rounded no-underline text-white"
      >
        <DateTimeDisplay value={days} isDanger={days <= 100} />
        <p className="text-4xl">:</p>
        <DateTimeDisplay value={hours} isDanger={false} />
        <p className="text-4xl">:</p>
        <DateTimeDisplay value={minutes} isDanger={false} />
        <p className="text-4xl">:</p>
        <DateTimeDisplay value={seconds} isDanger={false} />
      </a>
    </div>
  );
};

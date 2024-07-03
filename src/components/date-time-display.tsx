const DateTimeDisplay = ({
  value,
  isDanger,
}: {
  value: number;
  isDanger: boolean;
}) => {
  return (
    <div
      className={`leading-5 items-center flex flex-col py-0 px-[0.75rem] text-7xl ${
        isDanger ? "text-[#ff0000]" : ""
      }`}
    >
      <p className="text-gray-300">
        {value.toString().length === 1 ? "0" + value : value}
      </p>
    </div>
  );
};

export default DateTimeDisplay;

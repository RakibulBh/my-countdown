import { ShowCounter } from "./components/show-counter";
import { useCountdown } from "./hooks/useCountdown";

function App() {
  const [days, hours, minutes, seconds] = useCountdown(new Date("2025-07-02"));

  return (
    <div
      className="h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/mountains.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white/25 w-[40rem] h-[40rem] rounded-md py-8 px-4 text-center">
        <h1 className="text-4xl font-bold text-[#ff0000]">
          YOUR TIME IS RUNNING OUT
        </h1>
        <p className="font-extrabold mt-20 text-3xl">
          <strong>TIME</strong> UNTIL YOU'RE{" "}
          <span className="underline underline-offset-4 decoration-wavy decoration-red-600">
            20
          </span>
        </p>
        <ShowCounter
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      </div>
    </div>
  );
}

export default App;

import { useEffect, useMemo, useState } from "react";

const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const targetDate = useMemo(() => new Date("2023-11-31T00:00:00"), []);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const timeDifference = targetDate - currentDate;

      if (timeDifference <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [targetDate]);

  return (
    <div className=" ml-10 md:ml-0">
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col p-2 bg-red-400  rounded-box">
          <span className="countdown font-paytone text-white text-2xl lg:text-5xl">
            <span style={{ "--value": days }}></span>
          </span>
          days
        </div>
        <div className="flex flex-col p-2 bg-red-400  rounded-box">
          <span className="countdown font-paytone text-white text-2xl lg:text-5xl">
            <span style={{ "--value": hours }}></span>
          </span>
          hours
        </div>
        <div className="flex flex-col p-2 bg-red-400  rounded-box">
          <span className="countdown font-paytone text-white text-2xl lg:text-5xl">
            <span style={{ "--value": minutes }}></span>
          </span>
          min
        </div>
        <div className="flex flex-col p-2 bg-red-400  rounded-box">
          <span className="countdown font-paytone text-white text-2xl lg:text-5xl">
            <span style={{ "--value": seconds }}></span>
          </span>
          sec
        </div>
      </div>
    </div>
  );
};

export default Countdown;

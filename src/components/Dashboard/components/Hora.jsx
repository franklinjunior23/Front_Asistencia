import { useEffect, useState } from "react";

function Hora() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, []);
  const formatTime = (time) => {
    const hours = time.getHours().toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const seconds = time.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };
  return <section className="w-full grid place-content-center text-center py-2 px-3 ">
    <h2 >Hora Dinamico</h2>
    <span className="text-center text-[70px] font-medium tracking-wider">{formatTime(time)}</span>
  </section>;
}

export default Hora;

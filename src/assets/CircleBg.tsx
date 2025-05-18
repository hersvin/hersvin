import { useEffect, useState } from "react";

const GlobalCircleGradient = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="bg-[#0F172A] pointer-events-none fixed inset-0 -z-10 overflow-hidden text-black">
      <div
        className="absolute w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-slate-700 via-slate-700 to-slate-700 opacity-30 blur-3xl transition-transform duration-200"
        style={{
          left: position.x - 500,
          top: position.y - 500,
        }}></div>
    </div>
  );
};

export default GlobalCircleGradient;

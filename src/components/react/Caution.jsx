import { useState, useEffect } from "react";

const Caution = () => {
  const [isActive, setActive] = useState(true);

  useEffect(() => {
    const cautionStatus = localStorage.getItem("caution");
    if (cautionStatus === "disable") {
      setActive(false);
    }
  }, []);

  const closeCaution = () => {
    setActive(false);
    localStorage.setItem("caution", "disable");
  };

  return (
    isActive && (
      <div
        id="caution"
        className="flex flex-row justify-center items-center gap-5 text-xl text-center py-2 bg-yellow-400 select-none"
      >
        <img
          src="/src/assets/gif/development.gif"
          className="h-10 rounded-full"
          alt="Development"
        />
        <h1 className="font-bold">This website is still under development</h1>
        <button
          className="text-red-500 font-bold text-3xl cursor-pointer"
          onClick={closeCaution}
        >
          ✖
        </button>
      </div>
    )
  );
};

export default Caution;

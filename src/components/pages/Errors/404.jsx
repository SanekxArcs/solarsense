import React from "react";

const Error404 = () => {
  return (
    <>
      <div className="grid place-content-center min-h-[380px] max-h-screen max-w-[1170px] mx-auto  ">
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="font-black text-red-500 text-9xl">
            <span className="pr-5 text-4xl">Błąd</span>404
          </h1>
          <p>Proszę wrócić do strony głównej</p>
        </div>
      </div>
    </>
  );
};

export default Error404;
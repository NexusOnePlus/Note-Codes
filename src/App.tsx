import "./App.css";
import { Link } from "react-router-dom";
// @deno-types="@types/react"
// import { useState } from 'react'
function App() {
  return (
    <div className="bg-black dark">
      <div className="flex p-9 bg-fixed gap-11 flex-col place-items-center bg-gradient-to-t from-blue-950 to-black text-white
      h-full lg:min-h-screen min-w-full overflow-hidden">
        <div className="grid place-items-center py-6">
          <img src="/icon.svg" height={"200px"} width={"200px"} />
        </div>
        <div>
          <h1 className="text-[50px] font-extrabold lg:text-[80px]">
            CodeWars
          </h1>
          <p className="font-normal  text-white/70 text-center m-4">
            Ejercicios resueltos v:::::
          </p>
        </div>
        <div className="grid place-items-center grid-flow-row lg:grid-flow-col h-full gap-3 lg:gap-7 px-32 text-center">
          <Link to="/hackerank">
            <div className="bg-green-500/20  border-4 border-green-400 h-[100px]  w-[250px] lg:h-[150px] p-5 content-center rounded-2xl text-[20px] lg:text-[30px] font-bold">
              Hackerank
            </div>
          </Link>
          <Link to="/codeforces">
            <div className="bg-red-500/20 border-4 border-red-400  h-[100px]  w-[250px] lg:h-[150px] p-5 content-center rounded-2xl text-[20px] lg:text-[30px] font-bold">
              CodeForces
            </div>
          </Link>
          <Link to="/omegaup">
            <div className="bg-blue-500/20 border-4 border-blue-400  h-[100px]  w-[250px] lg:h-[150px] p-5 content-center rounded-2xl text-[20px] lg:text-[30px] font-bold">
              Omega Up
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;

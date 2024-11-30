import { array } from "../../../AppData/Local/deno/npm/registry.npmjs.org/@types/prop-types/15.7.13/index.d.ts";
import "./App.css";
import { Link } from "react-router-dom";
// @deno-types="@types/react"
// import { useState } from 'react'

type Buble = {
  left: string;
  top: string;
  size: string;
  opacity: number;
  color: string;
};

const randomBubles = (): Buble => {
  const value = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min);
  return {
    left: `${value(0,100)}%`,
    top: `${value(0,100)}%`,
    size: `${value(2,10)}rem`,
    opacity: 0.7,
    color: `hsl(${value(200,255)}, 100%, 70%)`
  }
  
}




function App() {
  const bubles = Array.from({ length: 10 }, randomBubles);

  return (
    <div className="bg-black dark">
      <div className="flex p-9 bg-fixed gap-11 flex-col place-items-center bg-gradient-to-t from-slate-950 to-neutral-950 text-white h-full lg:min-h-screen min-w-full overflow-hidden relative">
        {bubles.map((buble: Buble, ind) => (
          <div
            key={ind}
            className="absolute rounded-full"
            style={{
              left: buble.left,
              top: buble.top,
              width: buble.size,
              height: buble.size,
              opacity: buble.opacity,
              backgroundColor: 'transparent',
              boxShadow: `0 0 10px ${buble.color}, 0 0 20px ${buble.color}`,
            }}
          />
        ))}
        <div className="grid place-items-center py-6 z-10">
          <img src="/icon.svg" height={"200px"} width={"200px"} />
        </div>
        <div>
          <h1 className="text-[50px] font-extrabold lg:text-[80px]">
            CodeWars
          </h1>
          <p className="font-normal text-white/70 text-center m-4">
            Ejercicios resueltos v:::::
          </p>
        </div>
        <div className="grid place-items-center grid-flow-row lg:grid-flow-col h-full gap-3 lg:gap-7 px-32 text-center">
          <Link to="/hackerank">
            <div className="bg-green-500/20 border-4 border-green-400 h-[100px] w-[250px] lg:h-[150px] p-5 content-center rounded-2xl text-[20px] lg:text-[30px] font-bold">
              Hackerank
            </div>
          </Link>
          <Link to="/codeforces">
            <div className="bg-red-500/20 border-4 border-red-400 h-[100px] w-[250px] lg:h-[150px] p-5 content-center rounded-2xl text-[20px] lg:text-[30px] font-bold">
              CodeForces
            </div>
          </Link>
          <Link to="/omegaup">
            <div className="bg-blue-500/20 border-4 border-blue-400 h-[100px] w-[250px] lg:h-[150px] p-5 content-center rounded-2xl text-[20px] lg:text-[30px] font-bold">
              Omega Up
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;

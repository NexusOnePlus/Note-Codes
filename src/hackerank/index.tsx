import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hk = () => {
  const [hacks, setHacks] = useState([]);

  useEffect(() => {
    fetch(`https://nexus-api-note-co-78.deno.dev/codes/hackerank`)
      .then(async (res) => await res.json())
      .then((json) => setHacks(json));
  
    // console.log(hacks);
  }, []);

  return (
    <div className="bg-gradient-to-t from-teal-950 to-black min-h-screen gap-6 text-white p-10">
      <div>
        <h1 className="text-[50px] font-extrabold lg:text-[50px] text-center">
          CodeWars
        </h1>
        <p className="font-normal  text-white/70 text-center m-4">
          Ejercicios de Hackerank
        </p>
        <h1 className="text-[15px] font-normal lg:text-[15px] text-center">
          Click en cualquier problema a visualizar
        </h1>
      </div>
      <div className="grid place-items-center grid-flow-row lg:grid-cols-4 h-full gap-3 lg:gap-7 text-center mt-10">
        {hacks.map((hack: any) => {
          return (
            <Link key={hack.id} to={`/hackerank/${hack.id}`}>
              <div
                key={hack.id}
                className="bg-green-900/20  border-4 border-emerald-300 h-[100px]  w-[250px] lg:h-[150px] p-5 content-center rounded-2xl text-[20px] lg:text-[30px] font-bold"
              >
                <h1 className="text-[20px]">{hack.name}</h1>
                <p className="text-[15px] text-gray-400 overflow-hidden h-1/2 "> | {hack.description} </p>
              </div>
            </Link>
          );
        })}
      </div>
      <Link to ="/new/hackerank">
      <div className="bg-black text-center  border-4 border-white h-[70px]  w-[70px] lg:w-[100px] lg:h-[100px] lg:p-3 content-center rounded-2xl text-[30px] lg:text-[40px] font-bold fixed bottom-10 right-10">
        <h1>+</h1>
      </div>
      </Link>
    </div>
  );
};
export default Hk;

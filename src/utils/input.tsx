import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const input = () => {
    const { pt } = useParams();
    const [dato, setDato] = useState({
        name: '',
        description: '',
        solution: '',
        original: '',
    });
    const send = () => {
        // console.log(dato);
        fetch(`${import.meta.env.VITE_API_URL}code/${pt}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dato)
        })
        .then((res) => {
            if(!res.ok){
                console.log('Problem found')
                return;
            }
            return res.json()
        })
        .then(data => console.log(data))
        .catch(error => {console.log(error)})
  
    };
    useEffect(() => {
    }, [dato]);
    return (
        <div className="bg-neutral-950 gap-6 text-white p-10  min-h-screen">
            <div>
                <h1 className="text-[50px] font-extrabold lg:text-[50px] text-center">
                    CodeWars
                </h1>
                <p className="font-normal  text-white/70 text-center m-4">
                    Inserte el nuevo codigo
                </p>
                <h1 className="text-[15px] font-normal lg:text-[15px] text-center">
                    New Code
                </h1>
            </div>
            <div className="grid place-items-center grid-flow-row lg:grid-flow-row h-full gap-3 lg:gap-7 mt-10">
                <div className="grid lg:grid lg:grid-flow-col place-items-center  gap-4 w-full">
                    <div className="grid bg-green-900/20  border-4 border-teal-500 h-full gap-2 lg:gap-0 w-full lg:h-[120px] p-5 rounded-2xl font-bold">
                        <h1 className="text-[20px] font-bold lg:text-[20px]">
                            Nombre del problema
                        </h1>
                        <input
                            maxLength={30}
                            className="text-[15px] focus:outline-none overflow-scroll border-b-2 bg-transparent"
                            value={dato.name}
                            onChange={(e) =>
                                setDato({ ...dato, name: e.target.value })}
                        />
                    </div>
                    <div className="grid bg-green-900/20  border-4 border-teal-500 h-full gap-2  lg:gap-0 w-full lg:h-[120px] p-5 rounded-2xl font-bold">
                        <h1 className="text-[20px] font-bold lg:text-[20px]">
                            Link del problema original
                        </h1>
                        <input
                            maxLength={120}
                            className="text-[15px] focus:outline-none overflow-scroll border-b-2 bg-transparent"
                            value={dato.original}
                            onChange={(e) =>
                                setDato({ ...dato, original: e.target.value })}
                        />
                    </div>
                </div>
                <div className="grid bg-green-900/20  border-4 border-teal-500 h-full gap-2  lg:gap-2 w-full lg:h-[150px] p-5 rounded-2xl font-bold">
                    <h1 className="text-[20px] font-bold lg:text-[20px]">
                        Descripcion
                    </h1>
                    <textarea
                        maxLength={500}
                        value={dato.description}
                        onChange={(e) =>
                            setDato({ ...dato, description: e.target.value })}
                        className="text-[15px] focus:outline-none p-3 border-2 rounded-lg  bg-transparent"
                    />
                </div>
                <div className="grid bg-green-900/20  border-4 border-teal-500 h-full gap-2  lg:gap-2 w-full lg:h-full p-5 rounded-2xl font-bold">
                    <h1 className="text-[20px] font-bold lg:text-[20px]">
                        Codigo
                    </h1>
                    <textarea
                        maxLength={20000}
                        rows={20}
                        value={dato.solution}
                        onChange={(e) =>
                            setDato({ ...dato, solution: e.target.value })}
                        className="text-[15px] focus:outline-none p-3 border-2 rounded-lg  bg-transparent"
                    />
                </div>
                <Link onClick={() => send()} to="/">
                    <div className="bg-green-900/20 text-center  border-4 border-white p-3 mt-2 lg:p-4 content-center rounded-2xl text-[20px]  lg:text-[40px] font-bold">
                        <h1>Submit</h1>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default input;

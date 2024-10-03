"use client"
import { useState } from "react";

interface HandleProps {
    a: string;
    b: string;
}

const GeneralFunction: React.FC = () => {

    const [numero1, setNumero1] = useState<string>("")
    const [numero2, setNumero2] = useState<string>("")

    const [respSoma, setRespSoma] = useState<number | undefined>()
    const [respSub, setRespSub] = useState<number | undefined>()
    const [respMult, setRespMult] = useState<number | undefined>()
    const [respDiv, setRespDiv] = useState<number | undefined>()

    const erro = "Digite corretamente Usuario >:("

    const handleAll = ({a,b} : HandleProps) => {
        const n1 = parseFloat(a)
        const n2 = parseFloat(b)

        if (!isNaN(n1) && !isNaN(n2)) {
            setRespDiv(n2 !== 0 ? n1 / n2 : undefined)
            setRespMult(n1 * n2)
            setRespSoma(n1 + n2)
            setRespSub(n1 - n2)
        }
        else{
            setRespDiv(undefined)
            setRespMult(undefined)
            setRespSoma(undefined)
            setRespSub(undefined)
        }
    }

    const style =
    {
        main: "min-h-screen w-full bg-black flex-col flex justify-center items-center text-white"
    }

    return(
        <>
            <main className={style.main}>
                <div className="bg-slate-500 m-5 mt-20 p-7 flex-col flex border rounded-2xl gap-5 ">   
                    <div className="flex-row flex gap-7 justify-around flex-wrap">
                        <div>
                            <input className="max-w-36 text-black border rounded-lg" type="text" placeholder="Numero 01" value={numero1} onChange={(e) => setNumero1(e.target.value)}/>
                        </div>
                        <div>
                            <input className="max-w-36 text-black border rounded-lg" type="text" placeholder="Numero 02" value={numero2} onChange={(e) => setNumero2(e.target.value)}/>
                        </div>
                    </div>
                    
                    <div className="flex justify-center">
                        <button className=" text-white bg-slate-600 p-1 border rounded-lg" onClick={() => handleAll({a: numero1, b: numero2})}>Calcular Todos</button>
                    </div>

                    <div className="flex-row flex gap-7 justify-around w-full flex-wrap">
                        <div className="flex-col flex items-center gap-2">
                            <h2>Soma</h2>
                            <p>{!isNaN(respSoma ?? NaN) ? respSoma : erro}</p>
                        </div>
                        <div className="flex-col flex items-center gap-2">
                            <h2>Subtração</h2>
                            <p>{!isNaN(respSoma ?? NaN) ? respSub : erro}</p>
                        </div>
                    </div>

                    <div className="flex-row flex gap-7 justify-around w-full flex-wrap">
                        <div className="flex-col flex items-center gap-2">
                            <h2>Multiplicação</h2>
                            <p>{!isNaN(respSoma ?? NaN) ? respMult : erro}</p>
                        </div>
                        <div className="flex-col flex items-center gap-2">
                            <h2>Divisão</h2>
                            <p>{!isNaN(respSoma ?? NaN) ? respDiv?.toFixed(2) : erro}</p>
                        </div>
                    </div>

                </div>
            </main>
        </>
    )
}

export default GeneralFunction;
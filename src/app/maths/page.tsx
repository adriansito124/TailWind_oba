"use client"
import { Handlee } from "next/font/google"
import React, { useState } from "react"

const Maths: React.FC = () => {
    const [numero1, setNumero1] = useState<string>("")
    const [numero2, setNumero2] = useState<string>("")
    const [respSoma, setRespSoma] = useState<number | undefined>(0)
    const [respSub, setRespSub] = useState<number | undefined>(0)
    const [respMut, setRespMut] = useState<number | undefined>(0)
    const [respDiv, setRespDiv] = useState<number | undefined>(0)
    const msgError = "Digite um número válido"
    const msgZero = "Não é possivel dividir por zero"

    const handleSoma = () => {
        const n1 = parseFloat(numero1)
        const n2 = parseFloat(numero2)
        if(!isNaN(n1) && !isNaN(n2)){
            setRespSoma(n1 + n2)
        }
        else{
            setRespSoma(undefined)
        }
    }

    const handleSub = () => {
        const n1 = parseFloat(numero1)
        const n2 = parseFloat(numero2)
        if(!isNaN(n1) && !isNaN(n2)){
            setRespSub(n1 - n2)
        }
        else{
            setRespSub(undefined)
        }
    }

    const handleMut = () => {
        const n1 = parseFloat(numero1)
        const n2 = parseFloat(numero2)
        if(!isNaN(n1) && !isNaN(n2)){
            setRespMut(n1 * n2)
        }
        else{
            setRespMut(undefined)
        }
    }

    const handleDiv = () => {
        const n1 = parseFloat(numero1)
        const n2 = parseFloat(numero2)
        if(!isNaN(n1) && !isNaN(n2) && n2 != 0){
            setRespDiv(n1 / n2)
        }
        else{
            setRespDiv(undefined)
        }
    }

    const style =
    {
        main: "min-h-screen w-full bg-black flex-col flex justify-center items-center text-white"
    }

     return (
    <>
        <main className={style.main}>
            <div className="bg-slate-500 m-5 mt-20 max-w-96 p-7 flex-col flex border rounded-2xl gap-5">
                <div className="flex-row flex gap-7 justify-around flex-wrap">
                    <div className="flex-col flex items-center gap-2">
                        <label htmlFor="n1">Número 1</label>
                        <input className="max-w-36 text-black border rounded-lg" id="n1" type="text" value={numero1} onChange={(e) => setNumero1(e.target.value)}/>
                    </div>
                    <div className="flex-col flex items-center gap-2">
                        <label htmlFor="n2">Número 2</label>
                        <input className="max-w-36 text-black border rounded-lg" id="n2" type="text" value={numero2} onChange={(e) => setNumero2(e.target.value)}/>
                    </div>
                </div>

                <div className="flex-row flex gap-7 justify-around w-full flex-wrap">
                    <div className="flex-col flex items-center gap-2">
                        <button className=" text-white bg-slate-600 p-1 border rounded-lg" onClick={handleSoma}>SOMAR</button>
                        <h2 className="text-center min-w-16  p-1 text-black border bg-white rounded-lg">{!isNaN(respSoma ?? NaN) ? respSoma : msgError}</h2>
                    </div>
                    <div className="flex-col flex items-center gap-2">
                        <button className=" text-white bg-slate-600 p-1 border rounded-lg" onClick={handleSub}>SUBTRAIR</button>
                        <h2 className="text-center min-w-16  p-1 text-black border bg-white rounded-lg">{!isNaN(respSub ?? NaN) ? respSub : msgError}</h2>
                    </div>
                </div>
                <div className="flex-row flex gap-7 justify-around w-full flex-wrap">
                    <div className="flex-col flex items-center gap-2">
                        <button className=" text-white bg-slate-600 p-1 border rounded-lg" onClick={handleMut}>MULTIPLICAR</button>
                        <h2 className="text-center min-w-16  p-1 text-black border bg-white rounded-lg">{!isNaN(respMut ?? NaN) ? respMut : msgError}</h2>
                    </div>
                    <div className="flex-col flex items-center gap-2">
                        <button className=" text-white bg-slate-600 p-1 border rounded-lg" onClick={handleDiv}>DIVIDIR</button>
                        <h2 className="text-center min-w-16  p-1 text-black border bg-white rounded-lg">{!isNaN(respDiv ?? NaN) ? respDiv?.toFixed(2) : msgError}</h2>
                    </div>
                </div>
            </div>
        </main>
    </>
    )

}

export default Maths
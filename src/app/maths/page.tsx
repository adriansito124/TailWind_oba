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

     return (
    <>
        <h1>Use client com controle de estado</h1>
        <div>
            <label htmlFor="n1">Número 1</label>
            <input id="n1" type="text" value={numero1} onChange={(e) => setNumero1(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="n2">Número 2</label>
            <input id="n2" type="text" value={numero2} onChange={(e) => setNumero2(e.target.value)}/>
        </div>
        <div>
            <h2>Soma</h2>
            {!isNaN(respSoma ?? NaN) ? respSoma : msgError}
            <button onClick={handleSoma}>SOMAR</button>
        </div>
        <div>
            <h2>Subtração</h2>
            {!isNaN(respSub ?? NaN) ? respSub : msgError}
            <button onClick={handleSub}>SUBTRAIR</button>
        </div>
        <div>
            <h2>Multiplicação</h2>
            {!isNaN(respMut ?? NaN) ? respMut : msgError}
            <button onClick={handleMut}>MULTIPLICAR</button>
        </div>
        <div>
            <h2>Divisão</h2>
            {!isNaN(respDiv ?? NaN) ? respDiv : msgError}
            <button onClick={handleDiv}>DIVIDIR</button>
        </div>
    </>
    )

}

export default Maths
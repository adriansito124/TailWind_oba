"use client"

import { useEffect, useState } from "react";

interface IData {
    name: string;
    id: number;
}

const FetchPage = () => {
    const [characters, setCharacters] = useState<IData[]>([])

    useEffect(() => {
        const load = async () => {
            const res = await fetch("https://rickandmortyapi.com/api/character?page=1")
            const data = await res.json()
            setCharacters(data.results)
        }
        load();
    }, [])

    const style =
    {
        main: "min-h-screen w-full bg-black flex-col flex justify-center items-center text-white"
    }

    return(
        <>
            <main className={style.main}>
                <h1>Characters</h1>
                {characters.map((item, index) => {
                    return(
                        <div key={item.id}>
                            <h2>{item.name}</h2>
                        </div>
                    )
                })}
            </main>
        </>
    )
}

export default FetchPage;
import type { Metadata } from "next";
import city1  from "@/assets/city1.jpg";
import city2  from "@/assets/city2.jpg";
import city3  from "@/assets/city3.jpg";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Teste Next.ts",
  description: "Aprendizagem técnica Bosch",
}; 

export default function Home() {

  const style =
    {
        main: "min-h-screen w-full bg-black flex justify-center items-center",
        tela: "flex w-full flex-row justify-around items-center flex-wrap m-36",
        card: "w-full max-w-96 min-w-56 m-5 border rounded-2xl mt-3 hover:scale-110 transition duration-150 ease-in-out",
        imagem: "border rounded-t-2xl",
        texto: "bg-white flex-col flex items-center p-8 gap-1 text-center",
        baxo1: "text-white flex-row flex justify-around gap-1 text-center w-full bg-pink-600 border rounded-b-2xl",
        baxo2: "text-white flex-row flex justify-around gap-1 text-center w-full bg-orange-600 border rounded-b-2xl",
        baxo3: "text-white flex-row flex justify-around gap-1 text-center w-full bg-green-600 border rounded-b-2xl",
    }

  return (
   <>
    <main className={style.main}>
      <div className={style.tela}>
        <div className={style.card}>
          <Image className={style.imagem} src={city1} alt=""/>
          <div className={style.texto}>
              <h5 className="text-base font-semibold text-pink-600">4 days ago</h5>
              <h2 className="text-3xl font-bold">Post One</h2>
              <p className="mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim felis at nisi facilisis, dictum.</p>
          </div>
          <div className={style.baxo1}>
            <div className="flex flex-col items-center justify-center gap-1 p-3 w-full">
              <h2 className="text-2xl font-normal">4°</h2>
              <h2 className="text-xs font-light">READ</h2>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 p-3 w-full">
              <h2 className="text-2xl font-normal">5123</h2>
              <h2 className="text-xs font-light">VIEWS</h2>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 p-3 w-full">
              <h2 className="text-2xl font-normal">32</h2>
              <h2 className="text-xs font-light">COMMENTS</h2>
            </div>
          </div>
        </div>
        <div className={style.card}>
          <Image className={style.imagem} src={city2} alt=""/>
          <div className={style.texto}>
              <h5 className="text-base font-semibold text-orange-600">1 week ago</h5>
              <h2 className="text-3xl font-bold">Post Two</h2>
              <p className="mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim felis at nisi facilisis, dictum.</p>
          </div>
          <div className={style.baxo2}>
            <div className="flex flex-col items-center justify-center gap-1 p-3 w-full">
              <h2 className="text-2xl font-normal">7°</h2>
              <h2 className="text-xs font-light">READ</h2>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 p-3 w-full">
              <h2 className="text-2xl font-normal">7152</h2>
              <h2 className="text-xs font-light">VIEWS</h2>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 p-3 w-full">
              <h2 className="text-2xl font-normal">21</h2>
              <h2 className="text-xs font-light">COMMENTS</h2>
            </div>
          </div>
        </div>
        <div className={style.card}>
          <Image className={style.imagem} src={city3} alt=""/>
          <div className={style.texto}>
              <h5 className="text-base font-semibold text-green-600">3 week ago</h5>
              <h2 className="text-3xl font-bold">Post Three</h2>
              <p className="mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim felis at nisi facilisis, dictum.</p>
          </div>
          <div className={style.baxo3}>
            <div className="flex flex-col items-center justify-center gap-1 p-3 w-full">
              <h2 className="text-2xl font-normal">4°</h2>
              <h2 className="text-xs font-light">READ</h2>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 p-3 w-full">
              <h2 className="text-2xl font-normal">5123</h2>
              <h2 className="text-xs font-light">VIEWS</h2>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 p-3 w-full">
              <h2 className="text-2xl font-normal">32</h2>
              <h2 className="text-xs font-light">COMMENTS</h2>
            </div>
          </div>
        </div>
      </div>
    </main>
   </>
  );
} 
import type { Metadata } from "next";
import city1  from "@/assets/city1.jpg";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Teste Next.ts",
  description: "Aprendizagem técnica Bosch",
}; 

export default function Home() {

  const style =
    {
        main: "h-screen bg-black flex justify-center items-center",
        tela: "flex w-full flex-row justify-around items-center flex-wrap",
        card: "w-full max-w-80 min-w-52 border rounded-2xl mt-3 hover:scale-110",
        imagem: "border rounded-t-2xl",
        texto: "bg-white flex-col flex items-center p-8 gap-1 text-center",
    }

  return (
   <>
    <main className={style.main}>
      <div className={style.tela}>
        <div className={style.card}>
          <Image className={style.imagem} src={city1} alt=""/>
          <div className={style.texto}>
              <h5 className="text-sm font-semibold text-pink-600">4 days ago</h5>
              <h2 className="text-3xl font-bold">Post One</h2>
              <p className="mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim felis at nisi facilisis, dictum.</p>
          </div>
          <div>

          </div>
        </div>
        <div className={style.card}>
          <Image className={style.imagem} src={city1} alt=""/>
          <div className={style.texto}>
              <h5 className="text-sm font-semibold text-pink-600">4 days ago</h5>
              <h2 className="text-3xl font-bold">Post One</h2>
              <p className="mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim felis at nisi facilisis, dictum.</p>
          </div>
          <div>
            
          </div>
        </div>
        <div className={style.card}>
          <Image className={style.imagem} src={city1} alt=""/>
          <div className={style.texto}>
              <h5 className="text-sm font-semibold text-pink-600">4 days ago</h5>
              <h2 className="text-3xl font-bold">Post One</h2>
              <p className="mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim felis at nisi facilisis, dictum.</p>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </main>
   </>
  );
} 
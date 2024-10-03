import { ROUTES } from "@/constants/routes";
import Link from "next/link";

interface IMenu {
    op1: string;
    op2: string;
    op3: string;
    op4: number;
}

export const Menu:React.FC<IMenu> = ({op1, op2, op3, op4}) => {

    const style =
    {
        p: "bg-cyan-700 px-2 py-1 w-1/5 min-w-32 text-branco cursor-pointer",
        nav: "text-preto bg-cyan-800 gap-3 p-3 font-robFont text-large flex flex-row justify-center align-center fixed w-full flex-wrap" 
    }
    return(
        <nav className={style.nav}>
          <Link href={ROUTES.home} className={style.p}>{op1}</Link>
          <Link  href={ROUTES.maths} className={style.p}>{op2}</Link>   
          <Link  href={ROUTES.generalFunction} className={style.p}>{op3}</Link>
        </nav>
    )
}
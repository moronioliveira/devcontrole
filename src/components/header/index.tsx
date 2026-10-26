import Link from "next/link";
import { FiLogOut, FiUser } from "react-icons/fi";

export function Header(){
    return(
        <header className="w-full flex items-center py-4 px-2 bg-white h-20 shadow-sm">
            <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
                <Link href="/">
                <h1 className="font-bold text-2xl pl-1 hover:tracking-widest duration-300">
                    <span className="text-blue-500">Dev</span> Controle
                </h1>
                </Link>

                <div className="flex items-baseline gap-4">
                    <Link href="/dashboard">
                    <FiUser size={26} color="#4b5563"/>
                    </Link>

                <button>
                     <Link href="/dashboard">
                    <FiLogOut size={26} color="#4b5563"/>
                    </Link>
                </button>
                </div>
            </div>
        </header>
    )
}
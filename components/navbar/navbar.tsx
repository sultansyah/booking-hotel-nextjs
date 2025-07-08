import Link from "next/link"
import Image from 'next/image';
import NavLink from "@/components/navbar/navlink";

const Navbar = () => {
    return (
        <div className="fixed top-0 w-full bg-white shadow-sm z-20">
            <div className="max-w-screen-xl mx-auto flex flex-warp items-center justify-between p-4">
                <div className="p-2">
                    <Link href="/">
                        <Image src="/logo.png" width={128} height={49} alt="logo" priority />
                    </Link>
                </div>
                <NavLink />
            </div>
        </div>
    )
}

export default Navbar
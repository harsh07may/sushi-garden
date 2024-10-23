import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Navbar = ({ className, ...props }: Props) => {
  return (
    <nav className={cn("flex justify-center w-full", className)}>
      <div className="w-[600px] flex justify-evenly gap-5 py-5 rounded-full border-2 border-[#b28024] bg-[#ffe194]">
        <Link href="/" className="text-3xl hover:scale-105">
          Home
        </Link>
        <Link href="#about" className="text-3xl hover:scale-105">
          About
        </Link>
        <Link href="#credits" className="text-3xl hover:scale-105">
          Credits
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

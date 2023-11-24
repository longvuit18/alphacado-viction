// import { ButtonConnectWallet } from "./button";
import Logo from "@/assets/logo.png"
import Image from "next/image";
import Link from "next/link";
import Button from "./common/button";
import { ButtonConnectProvider } from "./button_connect_provider";


export const Header = () => {
  return (
    <header>
      <div className="container mx-auto py-9">
        <div className="h-[84px] w-full flex justify-between mb-9 items-start border-b-2 border--[#142321]">
          <Image src={Logo} alt="logo alphacado" height={40} />
          <nav className="flex gap-9 text-[#142321] items-center">
            <Link href={"/app/swap"} className="text-[18px] hover:font-semibold font-bold">Swap</Link>
            <Link href={"/app/swap"} className="text-[18px] hover:font-semibold">Deposit</Link>
            <Link href={"/app/vault"} className="text-[18px] hover:font-semibold">Vault</Link>
            <Link href={"/app/swap"} className="text-[18px] hover:font-semibold">Analytics</Link>
            <ButtonConnectProvider className="h-12">

            </ButtonConnectProvider>
          </nav>
        </div>
      </div>
    </header>
  );
}
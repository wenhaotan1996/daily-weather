import Image from "next/image";
import weatherIcon from "@/public/weathericon.png";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#394F68] to-[#183B7E]">
      <div className="h-40 w-40 animate-pulse">
        <Image
          className="object-contain"
          src={weatherIcon}
          alt="weather icon"
        />
      </div>

      <h1 className="mt-6 text-xl font-bold text-white md:text-4xl lg:text-6xl">
        Loading weather infomation...
      </h1>
    </div>
  );
}

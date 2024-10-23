import AudioPlayer from "@/components/AudioPlayer";
import Navbar from "@/components/shared/navbar";
import { Button } from "@/components/ui/button";

import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#F8EFD2]">
      <div className="absolute bottom-2 left-2">
        <AudioPlayer />
      </div>
      <Navbar className="absolute top-5" />
      <section className="flex justify-around h-screen items-center">
        <div className="space-y-10">
          <p className="font-medium text-9xl break-words">Sushi Garden</p>
          <p className="font-medium text-4xl">
            Rice, Spice, and Everything Nice!
          </p>
          <Button
            variant={"primary"}
            className="text-2xl text-white font-medium"
          >
            {"Let's begin!"}
          </Button>
        </div>
        <div className="flex gap-5 h-[300px]">
          <Image src={"/nigiri.svg"} alt="maki" width={240} height={240} />
          <Image src={"/maki.svg"} alt="maki" width={180} height={240} />
        </div>
      </section>
    </main>
  );
}

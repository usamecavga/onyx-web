import FullScreenVideo from "@/components/fullScreenVideo";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <FullScreenVideo
        video={{
          mobile:
            "https://streaming.developxpartners.com/768460240342961112834553.mp4",
          desktop:
            "https://streaming.developxpartners.com/768460240342961112834553.mp4",
          cover: "/img/home.jpg",
        }}
        title={{
          main: "Unmatched",
          sub: "Expertise",
        }}
        button={true}
      />
      <section className="bg-[url('/img/onyx-white-xy.svg')] bg-repeat-x bg-contain bg-bottom bg-black w-full">
        <div className="text-center font-title italic px-24 py-20 md:px-64 md:py-52 text-md md:text-4xl text-white uppercase flex sm:flex-row flex-col items-center gap-20 justify-center">
          <div className="flex flex-col sm:justify-center justify-start items-center gap-3">
            <span className="flex flex-row items-center gap-3 text-7xl">
              150<span className="text-[32px]">+</span>
            </span>
            <span className="text-[24px]">Equipments</span>
          </div>
          <div className="flex flex-col sm:justify-center justify-start items-center gap-3">
            <span className="flex flex-row items-center gap-3 text-7xl">
            270,000<span className="text-[32px]">Sq.ft</span>
            </span>
            <span className="text-[24px]">Built-Up Facilities and Stores</span>
          </div>
          <div className="flex flex-col sm:justify-center justify-start items-start gap-3">
            <span className="flex flex-row items-center justify-center gap-3 text-7xl w-full">
            10<span className="text-[32px]">+</span>
            </span>
            <span className="text-[24px]">Years of Industry Expertise</span>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full object-cover">
          <Image
            src="/img/dubai.jpg"
            alt="Develop X"
            width={1920}
            height={1080}
            className="w-screen"
          />
        </div>
      </section>
    </main>
  );
}

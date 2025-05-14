import FullScreenVideo from "@/components/fullScreenVideo";
import Image from "next/image";

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
      <section className="bg-[url('/img/123contracting-white-xy.svg')] bg-repeat-x bg-contain bg-bottom bg-black w-full">
        <div className="text-center font-title italic px-24 py-20 md:px-64 md:py-52 text-md md:text-4xl text-white uppercase flex sm:flex-row flex-col items-center gap-20 justify-center">
          <div className="flex flex-col sm:justify-center justify-start items-center">
            <span className="text-[32px]">
              To be a leading force in the construction industry by building
              with integrity, innovation, and excellence—shaping spaces that
              inspire and stand the test of time.
            </span>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full object-cover">
          <Image
            src="/img/dubai.jpg"
            alt="123 Contracting"
            width={1920}
            height={1080}
            className="w-screen"
          />
        </div>
      </section>
    </main>
  );
}

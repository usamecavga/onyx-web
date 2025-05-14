import FullScreenVideo from "@/components/fullScreenVideo";
import Image from "next/image";

export default function Company() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      <FullScreenVideo
        video={{
          mobile:
            "https://streaming.developxpartners.com/278974021512994542935804.mp4",
          desktop:
            "https://streaming.developxpartners.com/278974021512994542935804.mp4",
          cover: "/img/company.jpg",
        }}
        title={{
          main: "Company",
          sub: "",
        }}
      />
      <section className="container px-8 md:pt-16 py-4 mx-auto">
        <p className="mb-8 text-3xl font-title text-center text-black">
          {`"We partner with individuals, real estate developers, investors, and governments to deliver exceptional projects worldwide. What differentiates us from the competition is our unique partnership model which is built around sharing risks and rewards with our clients, as compared to conventional fee earning models.”`}
        </p>
        <hr />
      </section>

      <section className="container mx-auto px-8 pb-16">
        <div className="md:mt-24 mt-12">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            <div>
              <Image
                src="/img/ude.jpg"
                alt="ude"
                className="col-span-1"
                width={800}
                height={800}
              />
            </div>
            <div className="col-span-1">
              <p className="text-sm leading-relaxed mb-4 text-black">
                OEA Aluminium is one of the leading players in the architecture
                façade systems in the UAE specialized in Aluminium Curtain Wall,
                Frameless Railings, Aluminium Cladding, Decorative Metal Work,
                Doors and Windows, Skylights etc. OEA is an approved fabricator
                for international systems such as Schüco (Germany), Technal
                (France), Reynaers (Belgium) & Sykon (Germany). OEA is equipped
                with modern factory and facilities located at Jebel Ali
                Industrial Area and have successfully delivered projects of
                different sizes and ranges for our reputed clients such as
                Jumeriah Golf Estate, Al Ghurair Real Estate, Dubai Insurance
                and Al Shirawi Family.
              </p>
            </div>
          </div>
        </div>
        <div className="md:mt-24 mt-12">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            <div className="order-2">
              <Image
                src="/img/ude-2.jpg"
                alt="ude"
                className="col-span-1"
                width={800}
                height={800}
              />
            </div>
            <div className="col-span-1 order-1">
              <p className="text-sm leading-relaxed mb-4 text-black">
                UDE is also the proud mother company of 123 Contracting, further
                expanding our capabilities and service offerings within the
                construction and development sector.
              </p>
              <p className="text-sm leading-relaxed mb-4 text-black">
                At UDE, we are committed to excellence in construction, with a
                strong focus on superior client service. By listening closely to
                our clients’ needs and tailoring our expertise accordingly, we
                demonstrate our ability to fully understand and implement the
                scope of every project. We are equally dedicated to
                strengthening our capabilities by attracting and retaining top
                talent. Each project we undertake is led by a specialized team
                whose expertise addresses the unique challenges of the work
                involved. Teamwork is at the heart of UDE’s culture. Our Project
                Managers and senior leadership display exceptional commitment
                and personal involvement, ensuring the successful delivery of
                all major projects. From the ground up, the knowledge and
                dedication of our people drive sustained performance,
                positioning UDE for continued success in the future.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-8 py-16">
        <div className="md:mt-24 mt-12">
          <h2 className="text-5xl font-title font-bold mb-8 w-full text-left text-black">
            Abdulla Fahem Aal Abdulla
          </h2>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
            <div>
              <Image
                src="/img/abdulla.jpg"
                alt="Portrait of Abdulla Fahem Aal Abdulla"
                className="col-span-1"
                width={400}
                height={500}
              />
            </div>
            <div className="col-span-2">
              <p className="text-sm leading-relaxed mb-4 text-black">
                Abdulla, the visionary founder and CEO of FAY HOLDING,possesses
                extensive experience in the real estate andconstruction sectors.
                A graduate of the American University witha degree in Business
                Studies, he commenced his career atUnited Developing Engineering
                LLC, where he acquired profoundindustry knowledge. His
                entrepreneurial spirit inspired him toestablish several key
                ventures within the group, including 123Properties LLC and 123
                Contracting LLC OPC, therebypositioning FAY HOLDING as a leader
                across multiple domains.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container grid md:grid-cols-2 px-8 md:py-16 py-4 mx-auto gap-8">
        <div>
          <h2 className="text-5xl font-title font-bold mb-8 w-full text-left text-black">
            Vision
          </h2>
          <p className="text-sm leading-relaxed mb-4 text-black text-justify">
            To be a leading force in the construction industry by building with
            integrity, innovation, and excellence—shaping spaces that inspire
            and stand the test of time.
          </p>
          <p className="text-sm leading-relaxed mb-4 text-black">
            We envision a future where every project we deliver reflects our
            commitme nt to quality, client satisfaction, and s ustainable
            growth.
          </p>
        </div>
        <div>
          <h2 className="text-5xl font-title font-bold mb-8 w-full text-left text-black">
            Mission
          </h2>
          <p className="text-sm leading-relaxed mb-4 text-black text-justify">
            To deliver high-quality construction solutions throughexceptional
            craftsmanship, transparent project management,and client-focused
            service.
          </p>
          <p className="text-sm leading-relaxed mb-4 text-black">
            We are dedicated to transforming ideas into
            reality—safely,efficiently, and with a passion for exceeding
            expectations.
          </p>
        </div>
      </section>
    </main>
  );
}

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
          <h2 className="text-5xl font-title font-bold mb-8 w-full text-left text-black">
            OEA Aluminium
          </h2>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            <div>
              <Image
                src="/img/ole-aluminium.jpg"
                alt="ole-aluminium"
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
          <h2 className="text-5xl font-title font-bold mb-8 w-full text-black md:text-right text-left">
            ILID & OEA Interiors
          </h2>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            <div className="order-2">
              <Image
                src="/img/oae-interiors.jpg"
                alt="oae-interiors"
                className="col-span-1"
                width={800}
                height={800}
              />
            </div>
            <div className="col-span-1 order-1">
              <p className="text-sm leading-relaxed mb-4 text-black">
                ILID & OEA Interiors is developed to cater to our client with
                high quality interior design work and we have a highly qualified
                team of Architects and Interior Designers who have worked with
                international clients and consultants. ILID & OEA Interiors have
                delivered high quality works for different clients who belong to
                different sectors such as Hospitality, Luxury Villas etc. Our
                major clients are Gulf Court Hotels, Hotel Taj and Private
                Villas to name a few.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container grid md:grid-cols-2 px-8 md:py-16 py-4 mx-auto gap-8">
        <div>
          <h2 className="text-5xl font-title font-bold mb-8 w-full text-left text-black">
            Health, Safety and Environmental Policy
          </h2>
          <p className="text-sm leading-relaxed mb-4 text-black text-justify">
            OGC gives high importance to establishing new and advanced programme
            related to Health, Safety and Environment (HSE). We value our
            employees greatly and our team’s exceptional skills are rare and
            highly prized. To ensure the safety of our teammates, we have
            adopted the HSE MS as a guideline and framework for the management
            to monitor their activities. Additionally, our commitment to
            occupational health and safety is demonstrated through our ISO
            180001 certificate, while our adherence to environmental protection
            principles, including pollution prevention and improved
            environmental performance, is affirmed through our ISO 14001
            certificate.
          </p>
        </div>
        <div>
          <h2 className="text-5xl font-title font-bold mb-8 w-full text-left text-black">
            Quality Policy
          </h2>
          <p className="text-sm leading-relaxed mb-4 text-black text-justify">
            Quality is of utmost importance to OGC, and it serves as the
            cornerstone of all our activities. Our internal auditing, strategic
            policies, processes, and human resource systems all contribute to
            achieving the highest level of quality. We have developed a
            comprehensive Quality Assurance Programme, which we initiate during
            the estimation and tendering stage and carry out throughout the
            entire life cycle of any project, from planning to closeout – with
            no room for shortcomings.
          </p>
          <p className="text-sm leading-relaxed mb-4 text-black">
            Our international certifications attest to the fact that all our
            projects at OGC are meticulously designed, developed, constructed,
            tested, and maintained in full compliance with the engineering
            standards and technical specifications of ISO 9001:2000 and ISO
            10006. We utilize only original and reliable information to ensure
            that our future endeavors align perfectly with our objectives.
          </p>
        </div>
      </section>
    </main>
  );
}

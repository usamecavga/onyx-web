import FullScreenVideo from "@/components/fullScreenVideo";
import Image from "next/image";

export default function Company() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      <FullScreenVideo
        video={{
          mobile:
            "https://streaming.developxpartners.com/843149783420398116957537.mp4",
          desktop:
            "https://streaming.developxpartners.com/843149783420398116957537.mp4",
          cover: "/img/investment.jpg",
        }}
        title={{
          main: "Services",
          sub: "",
        }}
      />
      <section className="container mx-auto md:py-16 py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <h3 className="text-2xl text-center font-bold font-title mb-8 uppercase text-black">
              General Contracting
            </h3>
            <p className="text-justify text-sm text-black">
              We handle every aspect of your project from start to finish with
              precision andprofessionalism.Trust our experienced team to turn
              your vision into reality, on time and on budget.
            </p>
          </div>
          <div>
            <h3 className="text-2xl text-center font-bold font-title mb-8 uppercase text-black">
              BuildsResidential & Commercial Construction
            </h3>
            <p className="text-justify text-sm text-black">
              From cozy homes to large-scale commercial spaces, we build with
              quality and care.Your ideal space is just a blueprint away—crafted
              by experts in both residential andcommercial construction.
            </p>
          </div>
          <div>
            <h3 className="text-2xl text-center font-bold font-title mb-8 uppercase text-black">
              Renovations & Remodeling
            </h3>
            <p className="text-justify text-sm text-black">
              Transform your space with stylish, functional upgrades tailored to
              your lifestyle.Whether modernizing or restoring, we bring fresh
              life to every room.
            </p>
          </div>
        </div>
      </section>
      <section className="container mx-auto md:py-16 py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <h3 className="text-2xl text-center font-bold font-title mb-8 uppercase text-black">
              Site Development & Excavation
            </h3>
            <p className="text-justify text-sm text-black">
              We prepare the ground for success with expert excavation and site
              services.From grading to groundwork, we lay the foundation for
              your future project.
            </p>
          </div>
          <div>
            <h3 className="text-2xl text-center font-bold font-title mb-8 uppercase text-black">
              Concrete & Masonry
            </h3>
            <p className="text-justify text-sm text-black">
              Durable, detailed, and dependable—our concrete and masonry work
              stands the testof time.Strong structures start with strong
              craftsmanship in every block and pour.
            </p>
          </div>
          <div>
            <h3 className="text-2xl text-center font-bold font-title mb-8 uppercase text-black">
              Roofing & Siding
            </h3>
            <p className="text-justify text-sm text-black">
              Protect and elevate your property with high-quality roofing and
              siding solutions.We combine style and strength to keep your home
              or business safe and stunning.
            </p>
          </div>
        </div>
      </section>
      <section className="container mx-auto md:py-16 py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl text-center font-bold font-title mb-8 uppercase text-black">
              Project Management
            </h3>
            <p className="text-justify text-sm text-black">
              Organized, efficient, and transparent—our project management keeps
              everything ontrack.We coordinate every detail so you can focus on
              the big picture.
            </p>
          </div>
          <div>
            <h3 className="text-2xl text-center font-bold font-title mb-8 uppercase text-black">
              Custom Builds
            </h3>
            <p className="text-justify text-sm text-black">
              Dream it. Design it. We build it—just the way you imagined. Unique
              spaces built from scratch to match your personal vision and needs.
            </p>
          </div>
        </div>
      </section>
      <h2 className="text-5xl text-center font-bold font-title mt-12 uppercase text-black">
        Core Values
      </h2>
      <section className="container mx-auto md:py-16 py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <Image
            src="/img/investments-1.jpg"
            alt="Onyx General Contracting"
            width={600}
            height={600}
            className="md:w-full md:h-[600px] h-[400px] object-cover order-1 md:order-2"
          />
          <div className="md:p-16 pt-8 pb-16 px-2 order-2 md:order-1">
            <h3 className="text-4xl font-bold font-title mb-4 uppercase text-black">
              Integrity
            </h3>
            <p className="text-justify text-sm font-light text-black">
              We uphold honesty and strong moral principles inevery aspect of
              our work.
            </p>
            <h3 className="text-4xl font-bold font-title mb-4 uppercase text-black mt-10">
              Quality
            </h3>
            <p className="text-justify text-sm font-light text-black">
              We are committed to excellence in craftsmanship,materials, and
              execution.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="md:p-16 pt-8 pb-16 px-2 order-2 md:order-2">
            <h3 className="text-4xl font-bold font-title mb-4 uppercase text-black">
              Innovation
            </h3>
            <p className="text-justify text-sm font-light text-black">
              We embrace new ideas and technologies to buildsmarter and better.
            </p>
            <h3 className="text-4xl font-bold font-title mb-4 uppercase text-black mt-10">
              Customer Satisfaction
            </h3>
            <p className="text-justify text-sm font-light text-black">
              We put our clients first, always listeningand adapting to their
              needs.
            </p>
          </div>
          <Image
            src="/img/investments-2.jpg"
            alt="Onyx General Contracting"
            width={600}
            height={600}
            className="md:w-full md:h-[600px] h-[400px] object-cover order-1 md:order-1"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <Image
            src="/img/investments-3.jpg"
            alt="Onyx General Contracting"
            width={600}
            height={600}
            className="md:w-full md:h-[600px] h-[400px] object-cover order-1 md:order-2"
          />
          <div className="md:p-16 pt-8 pb-16 px-2 order-2 md:order-1">
            <h3 className="text-4xl font-bold font-title mb-4 uppercase text-black">
              Safety
            </h3>
            <p className="text-justify text-sm font-light text-black">
              We prioritize safe practices for our team, clients, andcommunity.
            </p>
            <h3 className="text-4xl font-bold font-title mb-4 uppercase text-black mt-10">
              Teamwork
            </h3>
            <p className="text-justify text-sm font-light text-black">
              We believe in the power of collaboration andrespect among all
              stakeholders.
            </p>
            <h3 className="text-4xl font-bold font-title mb-4 uppercase text-black mt-10">
              Sustainability
            </h3>
            <p className="text-justify text-sm font-light text-black">
              We strive to build responsibly, with minimalimpact on the
              environment.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

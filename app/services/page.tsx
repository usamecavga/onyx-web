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
      <section className="container mx-auto md:py-16 py-8 px-4 mt-16">
        <blockquote className="md:text-2xl text-xl text-center italic mb-16 font-title uppercase text-black">
          At Onyx General Contracting, we pride ourselves on being a premier
          contracting company in Dubai and the UAE, offering a wide range of
          construction services tailored to meet the diverse needs of our
          clients. Our expertise spans across various sectors, including
          residential, commercial, and industrial construction, ensuring that we
          have the capabilities to handle projects of any scale and complexity.
          As a reputed contracting company in the UAE, our commitment to
          quality, innovation, and customer satisfaction sets us apart in the
          competitive construction industry.
        </blockquote>
        <hr />
      </section>
      <section className="container mx-auto md:py-16 py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <h3 className="text-2xl text-center font-bold font-title mb-8 uppercase text-black">
              Premium Villas Contracting
            </h3>
            <p className="text-justify text-sm text-black">
              At Onyx General Contracting, we excel in transforming your vision
              of a luxurious living space into reality. We specialize in
              constructing premium villas that epitomize elegance, comfort, and
              innovation. Our team of experienced professionals is dedicated to
              delivering top-tier construction services that meet the highest
              standards of quality and craftsmanship.
            </p>
          </div>
          <div>
            <h3 className="text-2xl text-center font-bold font-title mb-8 uppercase text-black">
              Palaces Contracting
            </h3>
            <p className="text-justify text-sm text-black">
              Onyx General Contracting is synonymous with grandeur and
              sophistication in palace construction. As a premier contracting
              company in Dubai and the UAE, we are dedicated to building
              palatial residences that are a testament to opulence and
              magnificence. Our portfolio of completed projects showcases our
              ability to deliver exquisite palaces that surpass our clients
              expectations in every way.
            </p>
          </div>
          <div>
            <h3 className="text-2xl text-center font-bold font-title mb-8 uppercase text-black">
              Warehouses Contracting
            </h3>
            <p className="text-justify text-sm text-black">
              Onyx General Contracting is your trusted partner for building
              state-of-the-art warehouses in Dubai and the UAE. We specialize in
              constructing high-quality warehouses that meet the diverse needs
              of our clients. Whether you require a storage facility,
              distribution center, or manufacturing space, we have the expertise
              and resources to deliver a solution that exceeds your
              expectations.
            </p>
          </div>
        </div>
      </section>
      <section className="container mx-auto md:py-16 py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <h3 className="text-2xl text-center font-bold font-title mb-8 uppercase text-black">
              Factories Contracting
            </h3>
            <p className="text-justify text-sm text-black">
              Onyx General Contracting is a leader in the construction of
              high-performance factories in Dubai and the UAE. As a prominent
              contracting company in Dubai, we specialize in building advanced
              manufacturing facilities that are tailored to the specific
              requirements of our clients. Our expertise in industrial
              construction ensures that your factory is built to the highest
              standards of quality, efficiency, and safety.
            </p>
          </div>
          <div>
            <h3 className="text-2xl text-center font-bold font-title mb-8 uppercase text-black">
              Educational Institutions Contracting
            </h3>
            <p className="text-justify text-sm text-black">
              Onyx General Contracting is a trusted name in the construction of
              educational institutions in Dubai and the UAE. We specialize in
              building state-of-the-art schools, colleges, and universities that
              provide an optimal learning environment for students. Our
              commitment to quality and excellence ensures that each educational
              institution we build meets the highest standards of safety,
              functionality, and aesthetics.
            </p>
          </div>
          <div>
            <h3 className="text-2xl text-center font-bold font-title mb-8 uppercase text-black">
              Hospitality Contracting
            </h3>
            <p className="text-justify text-sm text-black">
              Onyx General Contracting is a premier contracting company in the
              UAE, renowned for our expertise in hospitality contracting. We
              specialize in constructing world-class hotels, resorts, and
              leisure facilities that set new benchmarks for luxury and comfort.
              Our extensive experience in the hospitality sector enables us to
              deliver projects that not only meet but exceed the expectations of
              our discerning clients.
            </p>
          </div>
        </div>
      </section>
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
              Dedicated Project Teams
            </h3>
            <p className="text-justify text-sm font-light text-black">
              To guarantee efficient operation and client satisfaction, we
              designate specialized project managers and teams. The
              collaborative working style of our senior management team with
              those responsible for governance places a strong focus on trust,
              dedication, and teamwork with the governing body. Collectively,
              with each member’s significant contribution, OGC upholds a
              practical drive for action and a passion for genuine excellence,
              making itself renowned as one of the top building contractors in
              Dubai. Our experts work in tandem with engineers, architects, and
              subcontractors to fulfill design specifications and respect
              deadlines and budgets. Regular project updates keep clients
              informed on progress.
            </p>
            <p className="text-justify text-sm font-light text-black">
              OGC reviews its processes for continuous improvement at every
              stage putting the knowledge, experience, and expertise of our
              workforce to good use along with a technically advanced support
              system. Our undertakings never fail to impress our clients as we
              give them what they are looking for and even more starting from
              the conception to the completion of any project.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="md:p-16 pt-8 pb-16 px-2 order-2 md:order-2">
            <h3 className="text-4xl font-bold font-title mb-4 uppercase text-black">
              Optimizing Project Management: Strategies for Efficiency
            </h3>
            <p className="text-justify text-sm font-light text-black">
              Efficient project management is crucial for any contracting
              company to complete projects successfully and on schedule. As one
              of the top contracting companies in Dubai, we have built a strong
              project management team to oversee its project workflow. The
              project managers work closely with clients right from the planning
              stage to ensure all specifications and requirements are clearly
              documented. Experienced managers use tools like GANTT charts to
              create realistic timelines and oversee project scheduling. This
              helps the building contractors in Dubai to allocate resources and
              track progress efficiently.
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
              Your Project, Our Expertise
            </h3>
            <p className="text-justify text-sm font-light text-black">
              Our project managers are responsible for ensuring smooth
              coordination between sub-contractors, engineers, suppliers, and
              other project stakeholders. They conduct regular site inspections
              using BIM models for quality checks and adherence to safety norms.
              Meeting agendas are drawn and minutes are documented to keep all
              parties on the same page.
            </p>
            <p className="text-justify text-sm font-light text-black">
              Through monthly project reviews, we estimate cost overruns early
              to take mitigation steps. Any issues over material supply or
              workforce are promptly addressed. Digital tools allow managers and
              clients to track project KPIs remotely. OGC’s experienced project
              managers and civil contractors in Dubai help mitigate risks to
              ensure the smooth execution of projects.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

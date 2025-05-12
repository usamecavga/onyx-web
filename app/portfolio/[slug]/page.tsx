"use client";
import FullScreenVideo from "@/components/fullScreenVideo";
import Loading from "@/components/loading";
import fetcher from "@/util/fethcer";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

export default function PortfolioDetails({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const { data, error, isLoading } = useSWR(
    `/portfolio?filter[slug][_eq]=${slug}&filter[status][_eq]=published`,
    fetcher,
  );
  const portfolio = data?.data[0];
  return (
    <>
      <Loading isLoading={isLoading} />
      <main className="flex min-h-screen flex-col items-center justify-between bg-white">
        {portfolio &&
          (portfolio.video ? (
            <FullScreenVideo
              video={{
                mobile: portfolio.video,
                desktop: portfolio.video,
              }}
              title={{
                main: "",
                sub: "",
              }}
            />
          ) : (
            <section className="bg-black w-full">
              <Image
                className="w-full h-screen object-cover"
                src={`${process.env.NEXT_PUBLIC_ASSETS_ENDPOINT}/${portfolio.cover}`}
                alt={portfolio.name}
                width={1920}
                height={1080}
              />
            </section>
          ))}
        <section className="container mx-auto md:py-16 py-8 px-4">
          <h1 className="font-title text-5xl text-center mt-8 mb-24 text-black">
            {portfolio?.name}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 ">
            <div className="row-span-2">
              <p
                className="text-black"
                dangerouslySetInnerHTML={{
                  __html: `
                                ${portfolio?.details}
                                `,
                }}
              ></p>
              {portfolio && portfolio?.url && (
                <p className="font-title text-2xl mt-8 text-black">
                  <Link
                    href={portfolio ? portfolio?.url : ""}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {portfolio ? portfolio?.url : ""}
                  </Link>
                </p>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
              {portfolio?.properties.map((property: any, index: number) => (
                <div className="" key={index}>
                  <hr className="mb-4 mt-4" />
                  <h1 className="font-title text-xl text-black">
                    {property.title}
                  </h1>
                  {property.values.map((value: any, index: number) => (
                    <p className="text-sm mt-1 text-black" key={index}>
                      {value["value"]}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

"use client";
import Loading from "@/components/loading";
import fetcher from "@/util/fethcer";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

export default function Portfolio() {
    const { data, error, isLoading } = useSWR("/portfolio?filter[status]=published", fetcher);

    // if (isLoading) return <div>Loading...</div>;
    // if (error) return <div>Error...</div>;

    return (
        <>
            <Loading isLoading={isLoading} />
            <main className="flex flex-col items-center bg-black min-h-screen">
                <section className="h-24 bg-black w-full">
                    <hr className="w-[1px] h-[1px]" />
                </section>
                <section className="container mx-auto md:py-16 py-8 md:mt-24">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-8">
                        {data &&
                            data.data.map((portfolio: any, index: number) => (
                                <Link
                                    href={`/portfolio/${portfolio.slug}`}
                                    key={index}
                                >
                                    <div className="relative w-full pt-[100%]">
                                        <div className="absolute inset-0">
                                            <Image
                                                className="w-full h-full object-cover"
                                                src={`${process.env.NEXT_PUBLIC_ASSETS_ENDPOINT}/${portfolio.cover}`}
                                                alt={portfolio.name}
                                                width={600}
                                                height={600}
                                            />
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                                                <h1 className="font-title text-3xl mt-3 text-white">
                                                    {portfolio.name}
                                                </h1>
                                                <h2 className="text-sm text-white">
                                                    {portfolio.location}
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </section>
            </main>
        </>
    );
}

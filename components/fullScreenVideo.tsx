"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const FullScreenVideo = ({ video, title, button }: any) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerHeight > window.innerWidth);
        };

        handleResize(); // initial check
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden">
            <video
                className="w-full object-cover h-screen"
                src={isMobile ? video.mobile : video.desktop}
                poster={video.cover}
                autoPlay
                loop
                muted
                playsInline
            />
            <div className="absolute inset-0 flex items-center justify-center w-full h-screen flex-col bg-black bg-opacity-50">
                <span
                    className={`text-white text-6xl md:text-9xl font-title ${
                        button ? "mt-8" : ""
                    } `}
                >
                    {title.main}
                </span>
                <span className="text-white text-5xl md:text-9xl md:tracking-wider tracking-wide font-title -ml-2 md:-ml-3 md:-mt-3 italic">
                    {title.sub}
                </span>
                {button && (
                    <div className="border-white border px-6 py-2 mt-8 rounded-md md:px-10 md:py-3">
                        <Link
                            className="text-white font-light uppercase font-title md:text-xl"
                            href={"/company"}
                        >
                            Explore
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default FullScreenVideo;

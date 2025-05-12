"use client";

import { Footer } from "flowbite-react";
import Link from "next/link";

const FooterComponent = () => {
    return (
        <Footer container className="rounded-none">
            <div className="w-full">
                <div className="w-full justify-between flex align-middle items-center">
                    <div>
                        <span className="text-sm"></span>
                    </div>
                    <div className="flex space-x-4">
                        <Link href={"/company"}>
                            <span className="text-sm font-light text-black">Company</span>
                        </Link>
                        <Link href={"/services"}>
                            <span className="text-sm font-light text-black">Services</span>
                        </Link>
                        <Link href={"/portfolio"}>
                            <span className="text-sm font-light text-black">Portfolio</span>
                        </Link>
                        <Link href={"/contact"}>
                            <span className="text-sm font-light text-black">Contact</span>
                        </Link>
                    </div>
                    <div></div>
                </div>
            </div>
        </Footer>
    );
};

export default FooterComponent;

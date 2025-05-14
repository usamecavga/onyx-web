"use client";
import { useState, useEffect } from "react";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Heroicons kullanıyoruz
import Image from "next/image";
import { Drawer } from "flowbite-react";
import Link from "next/link";

const HeaderComponent = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => setIsOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed w-full top-0 z-50 transition duration-300 ${
                isScrolled ? "bg-black" : "bg-transparent"
            }`}
        >
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="flex-grow text-center md:ml-12 ml-8">
                    <Link href="/">
                        <Image
                            src={"/img/123contracting-logo.png"}
                            alt="Logo"
                            className="mx-auto md:w-auto mt-1 cursor-pointer"
                            width={240}
                            height={120}
                        />
                    </Link>
                </div>
                <a onClick={() => setIsOpen(true)}>
                    <Bars2Icon className="h-16 w-16 text-white" />
                </a>
            </div>
            <Drawer
                open={isOpen}
                onClose={handleClose}
                className="w-full mx-auto bg-black"
            >
                <Drawer.Items>
                    <div className="container mx-auto flex justify-end items-center p-4">
                        <a
                            onClick={() => {
                                setIsOpen(false);
                            }}
                        >
                            <XMarkIcon className="h-8 w-8 text-white" />
                        </a>
                    </div>
                    <div className="flex h-full flex-col justify-between py-2 items-center">
                        <ul className="flex flex-col bg-black items-center menu text-base-content min-h-full w-full p-4 space-y-6">
                            <li>
                                <Link
                                    href="/"
                                    className="md:text-6xl text-4xl font-title text-white"
                                    onClick={() => handleClose()}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/company"
                                    className="md:text-6xl text-4xl font-title text-white"
                                    onClick={() => handleClose()}
                                >
                                    Company
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services"
                                    className="md:text-6xl text-4xl font-title text-white"
                                    onClick={() => handleClose()}
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/portfolio"
                                    className="md:text-6xl text-4xl font-title text-white"
                                    onClick={() => handleClose()}
                                >
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="md:text-6xl text-4xl font-title text-white"
                                    onClick={() => handleClose()}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Drawer.Items>
            </Drawer>
        </header>
    );
};

export default HeaderComponent;

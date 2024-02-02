import React from "react";
import Image from "next/image";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="p-4 bg-gray-700 sm:p-6 ">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between items-start">
          <div className="mb-4 lg:mb-0">
            <h2 className="mb-6 text-sm font-semibold text-quaternary uppercase ">
              Siguenos
            </h2>
            <ul className="text-quaternary ">
              <li className="mb-4 flex gap-2 items-center">
                <FaInstagram className="text-2xl" />
                Instagram
              </li>
              <li className="mb-4 flex gap-2 items-center">
                <FaXTwitter className="text-2xl" />X
              </li>
              <li className="flex gap-2 items-center">
                <FaGithub className="text-2xl" />
                Github
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 ">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-quaternary uppercase ">
                Contactanos
              </h2>
              <ul className="text-quaternary ">
                <li className="mb-4 flex flex-col">
                  <span>Escribenos:</span>
                  <span>Teléfono: +58 04249212171</span>
                </li>
                <li>
                  <a href="#" className="hover:opacity-80">
                    <span className="flex items-center gap-4">
                      Whatsapp{" "}
                      <IoLogoWhatsapp className="text-xl text-green-500" />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-quaternary uppercase ">
                Términos Legales
              </h2>
              <ul className="text-quaternary ">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Política de tratamiento de datos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terminos y condiciones
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-4" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-quaternary sm:text-center ">
            © 2024{" "}
            <a href="https://flowbite.com" className="hover:underline">
              Sabory™
            </a>
            . Todo los derechos reservados.
          </span>
          <div className="flex items-center -ml-5 lg:-ml-0">
            <Image
              width={72}
              height={72}
              src="/svg/sabory.svg"
              alt="sabory app main logotype"
            />
            <span className="text-xl font-semibold text-primary -ml-2 md:text-2xl">
              Sabory
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

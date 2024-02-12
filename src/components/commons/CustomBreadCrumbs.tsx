"use client";

import Link from "next/link";
import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";

const CustomBreadCrumbs = () => {
  const pathname = usePathname();
  const getPathElements = (pathname: string) => {
    const pathElements = pathname.split("/");
    // Eliminar el primer elemento vacío en caso de que el pathname comience con '/'
    if (pathElements[0] === "") {
      pathElements.shift();
    }
    return pathElements;
  };

  const pathElements = getPathElements(pathname);
  return (
    <nav className="hidden md:flex mb-5 ml-5">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <Link href="/" className="link-breadcrumb">
            <IoHomeOutline className="text-lg" />
            Inicio
          </Link>
        </li>
        {pathElements.map((element, index) => (
          <>
            <span>/</span>
            <li key={index + 1} className="inline-flex items-center">
              <Link href={`/${element}`} className="link-breadcrumb">
                {element}
              </Link>
            </li>
          </>
        ))}
      </ol>
    </nav>
  );
};

export default CustomBreadCrumbs;

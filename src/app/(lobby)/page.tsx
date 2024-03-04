import Image from "next/image";
import React from "react";
import Link from "next/link";
// components
import CustomButton from "@/components/commons/CustomButton";
import SubscribeForm from "@/components/forms/SubscribeForm";
import CustomHr from "@/components/commons/CustomHr";
import LandingTemplate from "@/template/LandingTemplate";
import Header from "@/components/general/Header";
import AdGeneral from "@/components/general/AdGeneral";

interface ListWhat {
  svg: string;
  name: string;
}

interface Props {
  searchParams: {
    login: string;
  };
}

const listWhat: ListWhat[] = [
  {
    svg: "/svg/landing-svg/landing-cook.svg",
    name: "Recetas verificadas y de calidad",
  },
  {
    svg: "/svg/landing-svg/landing-health.svg",
    name: "Ahorrar en la compra",
  },
  {
    svg: "/svg/landing-svg/landing-diet.svg",
    name: "Cero residuos alimentarios",
  },
];

function HomePagePage({ searchParams }: Props) {
  const withLogin = !!Object.keys(searchParams)[0];
  return (
    <>
      <Header isOpenLogin={withLogin} />
      <article className="w-full min-h-screen relative ">
        {/* main section */}
        <AdGeneral />
        <section className="w-full my-8 md:flex lg:px-16 lg:justify-between lg:my-12 px-5 relative">
          <Image
            width={110}
            height={110}
            alt="effect of many points"
            src="/effect/effect-many-point.svg"
            className="absolute top-3/4 md:top-1/2 -translate-y-1/2 -right-5 z-0 h-36 w-36"
          />
          {/* main title of landing */}
          <div className="animate-fade animate-ease-out flex flex-col md:max-w-xl mb-10 lg:mb-0">
            <h1 className="mb-4 text-5xl font-extrabold leading-foose tracking-tight text-gray-900 lg:text-7xl ">
              Compra directa de{" "}
              <b className="text-primary opacity-90">alimentos</b> con
              descuentos
            </h1>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl">
              Compra directamente del vendedor y ahorra dinero mientras reduces
              el desperdicio de alimentos.
            </p>
            <SubscribeForm />
          </div>
          {/* main image of landing */}
          <div className="animate-fade animate-ease-out w-80 mx-auto h-80 flex justify-center items-center bg-primary rounded-full z-10 relative lg:w-96 lg:h-96 md:mx-0">
            <Image
              width={150}
              height={50}
              alt="image of ad of food"
              src="/svg/landing-svg/landing-alert-two.svg"
              className="object-cover bg-cover z-10 absolute top-5 -left-6 lg:w-[200px] lg:-left-20"
            />
            <Image
              width={370}
              height={400}
              alt="image of human eat food"
              src="/svg/landing-svg/landing-main.svg"
              className="absolute object-cover bg-cover z-10 -bottom-1"
            />
            <Image
              width={150}
              height={50}
              alt="image of toast success"
              src="/svg/landing-svg/landing-alert.svg"
              className="object-cover bg-cover z-10 absolute bottom-5 -right-4"
            />
          </div>
        </section>
        <CustomHr classAditional="bg-secondary my-6 w-12" />
        {/* section of carousel */}
        <section className="w-full  lg:px-4">
          <LandingTemplate />
        </section>
        <CustomHr classAditional="bg-secondary my-6 w-12" />
        {/* section of what we do */}
        <section className="w-full flex flex-col mb-4 px-5">
          <h3 className=" animate-fade animate-ease-out text-xl text-center text-tertiary">
            ¿La razón?
          </h3>
          <h4 className="animate-fade animate-ease-out text-2xl font-semibold text-center text-gray-900">
            Ayudamos a miles de personas a reducir el desperdicio de alimentos.
          </h4>
          <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-0 px-5 mt-4 items-center justify-between lg:px-20">
            {listWhat.map((what, index) => (
              <div
                key={index}
                className={`p-4 w-64 flex flex-col animate-ease-linear justify-center items-center rounded-md bg-[#7eb6858a] ${
                  index === 1 ? "lg:pt-12 lg:px-8" : ""
                } ${
                  index === 0
                    ? "animate-fade-left"
                    : index === 1
                    ? "animate-fade-up"
                    : "animate-fade-right"
                }`}
              >
                <Image
                  width={180}
                  height={50}
                  alt="effect of many points"
                  src={what.svg}
                  className="object-cover bg-cover "
                />
                <h5 className="text-base font-medium whitespace-pre">
                  {what.name}
                </h5>
              </div>
            ))}
          </div>
        </section>
        <CustomHr classAditional="bg-secondary my-6 w-12" />
        {/* section of register */}
        <section className="w-full h-48 justify-center items-center flex flex-col bg-food-background bg-primary mt-8 p-5 lg:h-56">
          <h6 className="font-semibold text-xl text-center text-quaternary lg:text-4xl max-w-lg">
            ¿Está preparado para luchar contra el desperdicio de alimentos?
          </h6>
          <CustomButton
            withNext
            classAditional="bg-primary text-lg text-white hover:opacity-90 h-8  md:text-base lg:h-10 lg:w-48"
          >
            <Link href="/registrarse">Ingresa ya</Link>
          </CustomButton>
        </section>
      </article>
    </>
  );
}

export default HomePagePage;

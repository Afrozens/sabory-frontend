import Image from "next/image";
import React from "react";
import TextField from "@/components/commons/TextField";
import CustomButton from "@/components/commons/CustomButton";
import { MdOutlineMail } from "react-icons/md";

interface ListWhat {
  svg: string;
  name: string;
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

function Home() {
  return (
    <article className="w-full min-h-screen relative ">
      {/* main section */}
      <section className="w-full my-8 md:flex lg:px-16 lg:justify-between lg:my-12 px-5">
        <Image
          width={110}
          height={110}
          alt="effect of many points"
          src="/effect/effect-many-point.svg"
          className="absolute top-1/3 -right-5 z-0 lg:top-20"
        />
        {/* main title of landing */}
        <div className="flex flex-col md:max-w-xl mb-4 lg:mb-0">
          <h1 className="mb-4 text-5xl font-extrabold leading-foose tracking-tight text-gray-900 lg:text-7xl ">
            Compra directa de{" "}
            <b className="text-primary opacity-90">alimentos</b> con descuentos
          </h1>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl">
            Compra directamente del vendedor y ahorra dinero mientras reduces el
            desperdicio de alimentos.
          </p>
          <div className="w-full relative flex gap-4">
            <TextField
              label=""
              placeholder="Escribe tu correo elétronico"
              classAditional="pl-8 placeholder:opacity-80"
              type="text"
              id="email"
            />
            <CustomButton withNext classAditional="bg-secondary text-white ">
              Subscribirse
            </CustomButton>
            <MdOutlineMail className="absolute top-1/3 left-2 text-xl opacity-80 text-gray-500" />
          </div>
        </div>
        {/* main image of landing */}
        <div className="w-80 mx-auto h-80 flex justify-center items-center bg-primary rounded-full z-10 relative lg:w-96 lg:h-96 md:mx-0">
          <Image
            width={150}
            height={50}
            alt="effect of many points"
            src="/svg/landing-svg/landing-alert-two.svg"
            className="object-cover bg-cover z-10 absolute top-5 -left-10 lg:w-[200px] lg:-left-20"
          />
          <Image
            width={370}
            height={400}
            alt="effect of many points"
            src="/svg/landing-svg/landing-main.svg"
            className="absolute object-cover bg-cover z-10 -bottom-1"
          />
          <Image
            width={150}
            height={50}
            alt="effect of many points"
            src="/svg/landing-svg/landing-alert.svg"
            className="object-cover bg-cover z-10 absolute bottom-5 -right-4"
          />
        </div>
      </section>
      {/* section of what we do */}
      <section className="w-full flex flex-col mb-4 px-5">
        <h3 className="text-xl text-center text-tertiary">¿La razón?</h3>
        <h4 className="text-2xl font-semibold text-center text-gray-900">
          Ayudamos a miles de personas a reducir el desperdicio de alimentos.
        </h4>
        <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-0 px-5 mt-4 items-center justify-between lg:px-20">
          {listWhat.map((what, index) => (
            <div
              key={index}
              className={`p-4 w-64 flex flex-col justify-center items-center rounded-md bg-[#7eb6858a] ${
                index === 1 ? "lg:pt-12 lg:px-8" : ""
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
      {/* section of register */}
      <section className="w-full h-48 justify-center items-center flex flex-col bg-food-background bg-primary mt-8 p-5 lg:h-56">
        <h6 className="font-semibold text-xl text-center text-quaternary lg:text-4xl max-w-lg">
          ¿Está preparado para luchar contra el desperdicio de alimentos?
        </h6>
        <CustomButton
          withNext
          classAditional="bg-primary text-lg text-white hover:opacity-90 h-8  md:text-base lg:h-10 lg:w-48"
        >
          Ingresa ya
        </CustomButton>
      </section>
    </article>
  );
}

export default Home;

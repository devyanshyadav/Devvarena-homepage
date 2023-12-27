import Link from "next/link";
import React from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import heroImg from "./public/HeroSec.svg";
import img3 from "./public/img3.svg";
import 'animate.css';

const page = () => {
  const cssTools=[{
    name:'CSS Button Generator',
    desr:'Create custom CSS code for stylish and interactive buttons.',
    link:'https://buttons.devvarena.com/',
  },
  {
    name:'Palette Paradise ',
    desr:'Manage color palettes for web designs with ease.',
    link:'https://palette-paradise.devvarena.com/',

  },
  {
    name:'CSS Box Shadows Generator',
    desr:'Generate CSS code for custom box shadows.',
    link:'https://box-shadows.devvarena.com/',

  },
  {
    name:'Code Minifier',
    desr:'Compress CSS, JavaScript, and HTML code for improved performance.',
    link:'https://code-minifier.devvarena.com/',

  },
  {
    name:'Code Formatier',
    desr:'Format and beautify messy CSS, JavaScript, and HTML code.',
    link:'https://code-formatier.devvarena.com/',

  },
  {
    name:'CSS Glassmorphism Generator',
    desr:'Create CSS code for the glassmorphism effect in UI design.',
    link:'https://glassmorphism.devvarena.com/',

  },
  {
    name:'GDrive to Img Converter',
    desr:'Convert images from Google Drive to various formats for web integration.',
    link:'https://gdrive-img.devvarena.com/',

  },

]

const devLink=`https://editor.devvarena.com/`
  return (
    <>
      <section className="heroSection w-full h-[400px]  md:h-[550px] rounded-lg  md:rounded-3xl px-2 relative flex items-center  flex-col">
        <header className="flex w-full items-center justify-between md:p-4 p-3">
          <Link
            href={devLink}
            className="LOGO select-none text-2xl md:text-3xl  font-semibold"
          >
            Devvarena{" "}
          </Link>
        <span className="space-x-2">
        <Button color="primary" as={Link} href="#cssToolsDiv" size="sm">CSS Tools </Button>

        <Button color="primary" as={Link} href={devLink} size="sm">Try Now  </Button>
        </span>
        </header>
        <div className=" animate__animated animate__fadeIn md:w-5/6 flex items-center flex-col justify-center h-full space-y-2  transform translate-y-8 text-center">
          <h1 className="text-3xl md:text-4xl font-normal">
            The Perfect Editor for Beginners
          </h1>
          <p className="font-light">Simple, Powerful, and Feature-Packed</p>
          <span>
            <Button color="primary" as={Link} href={devLink}>Try Editor Now <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg></Button>
          </span>
          <Image
            src={heroImg}
            alt="heroImg"
            width={500}
            height={500}
            className="heroSecImg w-full transform translate-y-8 md:p-2 p-1 rounded-lg md:rounded-3xl select-none"
          />
        </div>
      </section>
      <div className="w-full h-[150px] md:h-[250px] flex items-end justify-center">
        <Link  href={devLink} className="border rounded-3xl px-5 text-sm border-primary flex items-center justify-center p-1">Kickstart your first project now<svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg></Link>
      </div>
      <section className="w-full md:h-[500px]  grid grid-cols-1 md:grid-cols-2">
        <div className="flex p-4 justify-center flex-col h-[300px]">
          <h1 className="text-3xl md:text-5xl">
            VS Code <br /> Environment and <br /> Shortcuts for
          </h1>
          <p className="text-primary text-xl">Efficient Development</p>
          <Button color="primary" className="w-fit mt-2" as={Link} href={devLink}>
            Try Now
            <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
          </Button>
        </div>
        <Image
          src={img3}
          alt="img1"
          width={300}
          height={300}
          className="w-full row-span-2"
        />
      </section>
      <section id="cssToolsDiv" className="flex items-center justify-center flex-col mt-4 text-center space-y-3">
        <span>
          <h1 className="text-3xl font-normal">Supercharge Your Web Dev</h1>
          <p className="font-light text-primary text-xl">
            with Essential CSS Tools
          </p>
        </span>
        <div  className="grid grid-cols-1 md:flex flex-wrap items-center justify-center gap-2 p-5 md:p-9 w-full text-white">
         {
          cssTools.map((elem, i)=>(
            <div class="p-6 hover:bg-tertiary border md:block grid grid-cols-2 gap-2  border-gray-600 rounded-lg shadow" key={i}>
            <Link href={elem.link}>
              <h5 class="mb-2 text-start text-sm md:text-2xl font-bold ">
                {elem.name}
              </h5>
            </Link>
            <Button
      href={elem.link}
      size="sm"
      as={Link}
      color="primary"
      showAnchorIcon
      className="border border-primary"
    >
      View Now
       <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
    </Button>
          </div>
          ))
         }
        </div>
      </section>
      <footer className="heroSecImg w-full h-24 opacity-75 rounded-2xl flex items-center justify-around text-sm md:flex-row flex-col-reverse">
      <p>&copy; 2023 Devvarena. All rights reserved.</p>
        <span>Developed by Devyansh Developer</span>

      </footer>
    </>
  );
};

export default page;

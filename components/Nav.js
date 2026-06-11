import Link from "next/link";
import DarkMode from "../components/DarkMode";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import Image from "next/image";

export default function Nav({ setHide, hideNav }) {
  const nav = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];
  const scaleUp = {
    initial: { scale: 0, opacity: 0.8 },
    animate: { scale: 1, opacity: 1 },
  };
  const router = useRouter();
  const [navOpen, setNavOpen] = useState(false);
  const [innerWidth, setInnerWidth] = useState();

  useEffect(() => {
    setInnerWidth(window.innerWidth);
    const hello = () => setInnerWidth(window.innerWidth);
    window.addEventListener("resize", hello);
    return () => window.removeEventListener("resize", hello);
  }, []);

  useEffect(() => {
    if (window.innerWidth > 767) setNavOpen(false);
  }, [innerWidth]);

  return (
    <nav className={`${hideNav ? "-translate-y-[80px]" : ""} navigation__bar`}>
      <Link href={"/"} scroll={false}>
        <p className="text-xl font-bold text-black dark:text-white transition duration-500 cursor-pointer sm:block">
          <Image
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            width={30}
            height={30}
            alt=""
            objectFit="cover"
            src={"/binary-code.png"}
          />
        </p>
      </Link>

      <div className="flex items-center">
        <div
          className={`mobile__nav peer ${navOpen ? "bottom-[0%]" : "bottom-[100%]"}`}
        >
          {nav.map((e, i) => (
            <Link key={i} href={e.path} scroll={false}>
              <motion.div
                onClick={() => setNavOpen(false)}
                className={`relative z-10 first:mt-24 transition duration-200 md:first:mt-0 mb-20 md:mb-0 flex justify-center px-3 py-2 cursor-pointer rounded-sm ${
                  router.route !== e.path ? "hover:opacity-80" : ""
                }`}
              >
                <p
                  className={`transition-colors duration-300 font-bold text-sm uppercase tracking-wider ${
                    router.route === e.path
                      ? "md:text-white dark:md:text-black"
                      : "text-black dark:text-white"
                  }`}
                >
                  {e.label}
                </p>
                {router.route === e.path && (
                  <motion.div
                    layoutId={"bg"}
                    className="hidden md:block w-full h-full absolute top-0 rounded-sm bg-black dark:bg-white z-[-1]"
                  />
                )}
              </motion.div>
            </Link>
          ))}
          <a
            onClick={() => setNavOpen(false)}
            className={`resume ${innerWidth > 767 ? "" : "text-white bg-neutral-800"}`}
            href="/sampeloreynald_resume.pdf"
            target={"_blank"}
          >
            Resume
          </a>
        </div>
        <div className="mx-3 md:mx-5 md:block">
          <DarkMode />
        </div>
        <motion.div
          initial="initial"
          animate="animate"
          onClick={() => setNavOpen(!navOpen)}
          className="text-2xl transition-opacity duration-300 cursor-pointer md:hidden hover:opacity-70 text-black dark:text-white"
        >
          {navOpen ? (
            <motion.div variants={scaleUp}>
              <MdClose />
            </motion.div>
          ) : (
            <motion.div variants={scaleUp}>
              <HiMenu />
            </motion.div>
          )}
        </motion.div>
      </div>
    </nav>
  );
}

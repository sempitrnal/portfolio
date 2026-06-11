import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Typewriter from "typewriter-effect";
import SkillCard from "../components/SkillCard";
import SocialLinks from "../components/SocialLinks";
import { skills } from "../utils/skills";
import bo from "/public/bo.jpg";
/* eslint-disable react/no-unescaped-entities */
export const slideDown = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
  exit: {
    y: -50,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};
export default function Home({ setHide, hide }) {
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();

  return (
    <motion.div className="min-h-screen ease-in-out dark:text-white page">
      <Head>
        <title>Reynald Sampelo - Software Engineer</title>
        <meta
          name="description"
          content="Full-stack software engineer building modern web applications with React, Next.js, .NET, and C#."
        />
        <meta name="robots" content="follow, index" />
        <meta
          content="Full-stack software engineer building modern web applications with React, Next.js, .NET, and C#."
          name="description"
        />
        <meta
          property="og:url"
          content={`https://reynaldsampelo.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://reynaldsampelo.com${router.asPath}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Reynald Sampelo" />
        <meta
          property="og:description"
          content="Full-stack software engineer building modern web applications with React, Next.js, .NET, and C#."
        />
        <meta
          property="og:title"
          content="Reynald Sampelo - Software Engineer"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sempitrnalsh8" />
        <meta
          name="twitter:title"
          content="Reynald Sampelo - Software Engineer"
        />
        <meta
          name="twitter:description"
          content="Full-stack software engineer building modern web applications with React, Next.js, .NET, and C#."
        />

        <link rel="apple-touch-icon" href="binary-code.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      {/* <div className="flex flex-col items-center justify-center h-screen">
				<div className="flex text-7xl md:text-9xl">
					<h1 className="mb-5 md:mb-10 ">Building</h1>
					<Typewriter
						options={{
							autoStart: true,
							strings: ["..."],
							deleteSpeed: 150,
							cursor: "",
							loop: true,
						}}
					/>
				</div>
				<h3 className="md:text-xl">
					Still working on my website <span className="mx-2">😄</span>
				</h3>
			</div> */}
      {/* <AnimatePresence>
				{isLoading && (
					<motion.div>
						<ClipLoader />
					</motion.div>
				)}
			</AnimatePresence> */}

      {/* {!isLoading && ( */}
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        transition="transition"
        variants={slideDown}
        className=""
      >
        <div className="hero">
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10 md:gap-16">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="relative flex mb-3 md:mb-0">
                <p className="hello">Hello! I am</p>
                <span className="rs colorful_text">Reynald Sampelo</span>
              </div>
              <motion.h2 className="fe">Full-Stack Developer</motion.h2>
              <div className="flex flex-col xs:flex-row items-center xs:items-end gap-1.5 my-7 -translate-y-2">
                <p className="text-xl text-black/60 dark:text-white/60 font-bold">
                  I build with
                </p>
                <div className="text-xl text-black/60 dark:text-white/60 font-bold">
                  <Typewriter
                    options={{
                      strings: [
                        "JavaScript",
                        "React",
                        "Next.js",
                        ".NET",
                        "C#",
                        "Azure",
                      ],
                      autoStart: true,
                      loop: true,
                      pauseFor: 1000,
                      deleteSpeed: 50,
                    }}
                  />
                </div>
              </div>
              <div className="">
                <SocialLinks />
              </div>
            </div>
            <div className="relative group shrink-0">
              <motion.div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <ClipLoader
                  cssOverride={{ borderWidth: "3px" }}
                  loading={isLoading}
                  color="#000000"
                  size={60}
                />
              </motion.div>
              <div
                className={`nb-card relative w-[clamp(14rem,22vw,20rem)] h-[clamp(16rem,24vw,22rem)] overflow-hidden group-hover:shadow-none group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all duration-150 ${
                  isLoading
                    ? "blur-md scale-105 opacity-70"
                    : "blur-0 opacity-100 scale-100"
                }`}
              >
                <Image
                  src={bo}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                  className="z-10"
                  onLoadingComplete={() => setLoading(false)}
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="hidden w-[15rem] h-[15rem]  lg:block relative lg:w-[22rem] lg:h-[22rem]">
						<motion.div className="absolute  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
							<ClipLoader
								cssOverride={{ borderWidth: "3px" }}
								loading={isLoading}
								color="#52594A"
								size={80}
							></ClipLoader>
						</motion.div>
						<div
							className={`hidden w-[15rem] h-[15rem] overflow-hidden rounded-full  lg:block relative lg:w-[22rem] lg:h-[22rem] ease-in-out duration-[.5s] ${
								isLoading
									? "blur-md scale-110 opacity-70 "
									: "blur-0 opacity-100 scale-100"
							}`}
						>
							<Image
								src={"/bo.webp"}
								layout="fill"
								objectFit="contain"
								alt=""
								className={``}
								onLoadingComplete={() => setLoading(false)}
							/>
						</div>
					</div> */}
        {/* <div className="flex gap-1 text-xl font-semibold">
					<Typewriter
						options={{
							strings: ["PHP", "JavaScript", "React", "NextJS"],
							autoStart: true,
							loop: true,
							pauseFor: 1500,
							deleteSpeed: 100,
						}}
					/>
				</div> */}
        <h2 className="header2">About</h2>
        <div className="flex flex-col items-start gap-10">
          <div className="flex flex-col w-full">
            <motion.p className="paragraph text-xl md:text-2xl font-bold leading-snug">
              I'm a software engineer based in Cebu who enjoys building web
              applications from the ground up. I work primarily with{" "}
              <span className="highlight">React</span>,{" "}
              <span className="highlight">Next.js</span>,{" "}
              <span className="highlight">.NET</span>, and{" "}
              <span className="highlight">C#</span>, and I like figuring out
              practical solutions to real problems — whether that's creating a
              smooth user experience, building scalable APIs, or improving how
              systems work behind the scenes.
            </motion.p>
            <p className="paragraph">
              Over the years, I've worked on projects involving{" "}
              <span className="highlight">cloud services</span>,{" "}
              <span className="highlight">databases</span>,{" "}
              <span className="highlight">authentication systems</span>,{" "}
              <span className="highlight">localization</span>, and{" "}
              <span className="highlight">business applications</span>. I care
              about writing clean, maintainable code and building products that
              people actually enjoy using.
            </p>
            <p className="paragraph">
              When I'm away from my keyboard, I'm usually playing guitar,
              producing music, working out, or hanging around local hardcore
              shows. Music has always been a big part of my life, and it gives
              me the same creative outlet that programming does.
            </p>
          </div>
        </div>
        <h2 className="header2">Experience</h2>
        <div className="flex flex-col gap-6">
          {[
            {
              role: "Software Developer",
              company: "Full-time",
              date: "Jul 2023 — Jun 2025",
              desc: "Built and maintained full-stack web apps using Next.js, Material UI, .NET, and C#. Managed SQL databases, deployed on Azure, and integrated Firebase services. Used Docker for containerization and WordPress as a headless CMS.",
              stack: [
                "Next.js",
                "Material UI",
                ".NET",
                "C#",
                "SQL",
                "Azure",
                "Firebase",
                "Docker",
                "WordPress",
              ],
            },
            {
              role: "Software Developer Intern",
              company: "Internship",
              date: "Jan 2023 — May 2023",
              desc: "Developed frontend features with React and built backend APIs using .NET and C#. Collaborated through GitLab and containerized services with Docker.",
              stack: ["React", ".NET", "C#", "Docker", "GitLab"],
            },
          ].map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="nb-card p-6 md:p-8 flex flex-col gap-3"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white">
                  {job.role}
                </h3>
                <span className="nb-tag w-max">{job.date}</span>
              </div>
              <p className="paragraph !mb-0 !text-base">{job.desc}</p>
              <div className="flex flex-wrap gap-2">
                {job.stack.map((t) => (
                  <span key={t} className="nb-tag">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <h2 className="header2">Skills</h2>
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
        <div className="flex flex-col items-center justify-center mt-40 mb-20">
          <p className="text-[2.5rem] md:text-[3.5rem] font-bold text-black dark:text-white uppercase tracking-tight">
            next up
          </p>

          <motion.p
            onClick={() => {
              router.push("/projects", undefined, { scroll: false });
              setHide(false);
            }}
            whileHover={{ x: 10 }}
            transition={{ duration: 0.2 }}
            className="flex gap-2 items-center text-black dark:text-white text-[1.5rem] md:text-[2rem] font-bold font-mono uppercase tracking-wider cursor-pointer"
          >
            Projects -{">"}
          </motion.p>
        </div>
      </motion.div>
      {/* )} */}
    </motion.div>
  );
}

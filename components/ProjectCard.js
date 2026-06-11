import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";

const ProjectCard = ({ e }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="nb-card group relative p-8 md:p-12 hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150"
    >
      {e.number && (
        <span className="absolute top-6 right-8 nb-tag">{e.number}</span>
      )}
      <div className="flex flex-col gap-5 text-black dark:text-white">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight w-max">
            {e.name}
          </h2>
          {e.tagline && (
            <p className="mt-2 font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-black/60 dark:text-white/60 font-bold">
              {e.tagline}
            </p>
          )}
        </div>
        {e.description && (
          <p className="paragraph !mb-0 max-w-2xl !text-left !text-base">
            {e.description}
          </p>
        )}
        <div className="flex flex-wrap gap-2 mt-1">
          {e.stack.map((tech) => (
            <span className="nb-tag" key={tech}>
              {tech}
            </span>
          ))}
        </div>
        {e.link && (
          <a
            href={e.link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 mt-2 text-sm font-mono font-bold w-max hover:underline underline-offset-4"
          >
            Visit project <BsArrowUpRight />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;

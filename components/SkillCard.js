import { motion } from "framer-motion";

const SkillCard = ({ skill, index }) => {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4, x: -2 }}
      className="nb-card group relative flex flex-col items-center justify-center gap-3 px-4 py-6 cursor-default hover:shadow-none transition-all duration-150"
    >
      <Icon
        size={32}
        style={{ color: skill.color }}
        className="transition-transform duration-150 group-hover:scale-110"
      />
      <p className="text-xs md:text-sm font-mono font-bold text-black dark:text-white uppercase tracking-wider">
        {skill.name}
      </p>
    </motion.div>
  );
};

export default SkillCard;

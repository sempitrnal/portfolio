import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const socials = [
  {
    name: "Twitter",
    link: "https://twitter.com/sempitrnalsh8",
    icon: <FaTwitter />,
  },
  {
    name: "Instagram",
    link: "https://instagram.com/__brownrecluse",
    icon: <FaInstagram />,
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/sampeloreynald",
    icon: <FaLinkedinIn />,
  },
  {
    name: "Github",
    link: "https://github.com/whitewaterjunkie",
    icon: <FiGithub />,
  },
];

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      {socials.map((e) => (
        <a
          aria-label={e.name}
          target="_blank"
          key={e.name}
          href={e.link}
          className="flex items-center justify-center w-10 h-10 border-2 border-black dark:border-white text-black dark:text-white hover:bg-[#ffe600] dark:hover:bg-[#00ff88] hover:text-black transition-colors duration-150 rounded-sm"
          rel="noreferrer"
        >
          {e.icon}
        </a>
      ))}
    </div>
  );
}

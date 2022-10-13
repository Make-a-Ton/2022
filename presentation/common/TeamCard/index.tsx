import { motion } from "framer-motion";

const TeamCard = ({
  name,
  photo,
  github,
  linkedin,
  twitter,
}: {
  name: string;
  twitter?: string;
  linkedin?: string;
  github?: string;
  photo: string;
}) => {
  return (
    <div className="group">
      <div className="aspect-square overflow-hidden w-full relative mb-[15px] rounded-[6px]">
        <div className="aspect-square w-full rounded-[6px] group-hover:brightness-100 brightness-75 duration-200 transition-all group-hover:scale-110">
          <motion.img
            src={photo}
            className="aspect-square object-cover h-full w-full"
          />
        </div>
      </div>
      <h3 className="font-semibold text-white text-[18px]">{name}</h3>
      <div className="flex items-center mt-[10px]">
        {twitter && (
          <a
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-[10px]"
          >
            <motion.img
              src="/assets/icons/twitter.svg"
              height={24}
              width={24}
            />
          </a>
        )}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-[10px]"
          >
            <motion.img
              src="/assets/icons/linkedin.svg"
              height={26}
              width={26}
            />
          </a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            <motion.img src="/assets/icons/github.svg" height={24} width={24} />
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamCard;

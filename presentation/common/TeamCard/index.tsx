import { motion } from "framer-motion";

const TeamCard = () => {
  return (
    <div className="group">
      <div className="aspect-square overflow-hidden w-full relative mb-[15px] rounded-[6px]">
        <div className="aspect-square w-full rounded-[6px] group-hover:brightness-100 brightness-75 duration-200 transition-all group-hover:scale-110">
          <motion.img
            src="https://github.com/AbhinavRajesh.png"
            className="aspect-square object-cover h-full w-full"
          />
        </div>
      </div>
      <h3 className="font-semibold text-white text-[18px]">Abhinav Rajesh</h3>
      <div className="flex items-center mt-[10px]">
        <a
          href="https://twitter.com/_AbhinavRajesh_"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-[10px]"
        >
          <motion.img src="/assets/icons/twitter.svg" height={24} width={24} />
        </a>
        <a
          href="https://linkedin.com/in/abhinavrajesh"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-[10px]"
        >
          <motion.img src="/assets/icons/linkedin.svg" height={26} width={26} />
        </a>
        <a
          href="https://github.com/AbhinavRajesh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.img src="/assets/icons/github.svg" height={24} width={24} />
        </a>
      </div>
    </div>
  );
};

export default TeamCard;

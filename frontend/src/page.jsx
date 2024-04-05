import { motion } from "framer-motion";
import { useState } from "react";

const Page = () => {
  const [inOut, setInOut] = useState(false);
  return (
    <>
      <section className="flex justify-center items-center flex-col gap-[40px]">
        <motion.div
          initial={inOut ? { rotate: 0, scale: 0 } : { rotate: 360, scale: 1 }}
          animate={inOut ? { rotate: 360, scale: 1 } : { rotate: 0, scale: 0 }}
          transition={{ duration: 2 }}
          className="w-[100px] h-[100px] bg-Dark"
        ></motion.div>
        <button
          className="bg-primary p-2 px-4 text-white rounded-full"
          onClick={() => {
            setInOut(!inOut);
          }}
        >
          Click to animate
        </button>
      </section>
    </>
  );
};

export default Page;

import React from "react";
import { motion } from "framer-motion";
const TransitionPageEffect = () => {
    return (
        <>
            <motion.div
                className=" h-screen w-screen fixed top-0 right-full bg-secondary z-50"
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0", width: "0" }}
                exit={{ x: "100%", width: "100%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            ></motion.div>
            <motion.div
                className=" h-screen w-screen fixed top-0 right-full bg-dark  z-40"
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0", width: "0" }}
                transition={{ delay: "0.2", duration: 0.8, ease: "easeInOut" }}
            ></motion.div>
            <motion.div
                className=" h-screen w-screen fixed top-0 right-full bg-[#0079ff] z-30"
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0", width: "0" }}
                transition={{ delay: "0.4", duration: 0.8, ease: "easeInOut" }}
            ></motion.div>
        </>
    );
};

export default TransitionPageEffect;

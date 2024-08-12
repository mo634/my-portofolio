import React from "react";
import { motion } from "framer-motion";
const TransitionEffectNavigation = () => {
    return (
        <>

            <motion.div
                className=" min-h-screen min-w-screen fixed top-0  right-full bg-primary z-50"
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0", width: "0" }}
                exit={{ x: "100%", width: "100%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >

            </motion.div>

            <motion.div
                className=" min-h-screen min-w-screen fixed top-0  right-full bg-secondary  z-40"
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0", width: "0" }}
                transition={{ delay: "0.2", duration: 0.8, ease: "easeInOut" }}
            ></motion.div>

            <motion.div
                className=" min-h-screen min-w-screen fixed top-0  right-full bg-blue-700 z-30"
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0", width: "0" }}
                transition={{ delay: "0.4", duration: 0.8, ease: "easeInOut" }}
            ></motion.div>
        </>
    );
};

export default TransitionEffectNavigation;

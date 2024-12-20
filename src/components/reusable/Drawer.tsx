"use client";

import { FC, ReactNode, useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { AnimatePresence, motion } from "framer-motion";

const Drawer: FC<{
  visible: boolean;
  onClose: () => void;
  position: "left" | "right";
  width?: string;
  height?: string;
  closeOnClickOutside?: boolean;
  children?: ReactNode;
}> = ({
  visible,
  onClose,
  width,
  height,
  position,
  closeOnClickOutside,
  children,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return ReactDOM.createPortal(
    <AnimatePresence initial={true}>
      {visible && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.15,
            ease: "easeOut",
          }}
          exit={{
            opacity: 0,
          }}
          onClick={() => {
            if (closeOnClickOutside !== undefined && !closeOnClickOutside)
              return;
            onClose();
          }}
          className={`w-[100vw] h-[100vh] bg-overlay z-50 fixed top-0 left-0 flex ${
            position === "left" ? "justify-start" : "justify-end"
          }`}
          style={{
            backdropFilter: "blur(2px)",
          }}
        >
          <motion.div
            initial={{
              x: position === "left" ? "-25%" : "125%",
            }}
            animate={{
              x: "0%",
            }}
            exit={{
              x: position === "left" ? "-25%" : "125%",
            }}
            transition={{
              duration: 0.15,
              ease: "easeOut",
            }}
            className="rounded-lg bg-monokai"
            style={{
              width: width || "30vw",
              height: height || "100vh",
            }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Drawer;

"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ContentItem = ({ item }: { item: { title: string; description: string; content?: React.ReactNode } }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="flex flex-col lg:flex-row justify-between items-center gap-8 my-20 w-full">
      <div className="flex flex-col w-full lg:w-1/2 justify-center items-center ">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl font-bold text-slate-100"
        >
          {item.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-kg mt-10 max-w-sm text-slate-300"
        >
          {item.description}
        </motion.p>
      </div>
      <div className="flex ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-kg mt-10 max-w-xl text-slate-300"
        >
          {item.content ?? null}
        </motion.div>
      </div>
    </div>
  );
};

const Content = ({
  content,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
}) => {
  return (
    <div>
      {content.map((item, index) => (
        <ContentItem key={item.title + index} item={item} />
      ))}
      <div className="h-20" />
    </div>
  );
};

export default Content;

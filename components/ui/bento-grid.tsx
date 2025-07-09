'use client'
import { cn } from "@/utils/cn";
import MagicButton from '../ui/MagicButton';
import { IoCopyOutline } from "react-icons/io5";
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {

  const [copy, setCopy] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('arnvassou@gmail.com');
    setCopy(true);
  }

  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col relative overflow-hidden justify-between space-y-4 rounded-3xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className,
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >

      <div className={`${id === 4 && 'flex justify-center items-center'} h-full'`}>
        <div className="">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover, object-center w-full h-full')}
            />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={'object-cover, object-center w-full h-full'}
            />
          )}
        </div>
        <div className={cn(
          titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
        )}>
          <div className={`${id === 4 && 'text-center'} mt-2 mb-2 font-sans font-bold text-lg lg:text-3xl max-w-96 z-10`}>
            {title}
          </div>
          <div className="font-sans text-sm font-extralight text-[#c1c2d3] md:text-xs lg:text-base z-10">
            {description}
          </div>

          {id === 3 && (
            <div className="flex flex-row gap-18 justify-center items-center">
              <div className="pt-3 flex flex-wrap justify-center items-center gap-4 min-w-30">
                {['ReactJs', 'NextJs', 'NodeJs', 'TypeScript', 'Express', 'PHP', 'Symfony', 'Laravel', 'MySQL', 'MongoDB',].map((item, i) => (
                  <span
                    key={i}
                    className="py-2 px-3 text-xs hover:text-sm
                    rounded-lg text-center border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white
                    transition-all duration-150 ease-in-out"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 4 && (
            <div className="flex flex-col justify-center items-center">
              <MagicButton
                title={copy ? 'Email copié !' : 'Copier mon email'}
                icon={<IoCopyOutline />}
                position='left'
                handleClick={handleCopy}
              />
              <div className="flex flex-row justify-around items-center pt-5 w-full space-x-6">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/vassou-a-5535711ba/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-600 hover:underline"
                >
                  <FaLinkedin className="text-xl" />
                  <span>LinkedIn</span>
                </a>

                {/* CV */}
                <a
                  href="/CV_VassouAroun_Developpeur.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-400 hover:underline"
                >
                  <HiOutlineDocumentText className="text-xl" />
                  <span>Voir mon CV</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

import { motion } from 'framer-motion';

const TypewriterAnimation = () => {
const text = 'From One Step To Thousand Of Mile';
const characters = Array .from(text);

return (
    <div>
    {characters.map((char, index) => (
        <motion.span
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
            duration: 0.05,
            delay: index * 0.05,
        }}
        >
        <section className='flex items-center justify-center min-h-screen font-Inter'>
            <div className="flex items-center justify-center border border-solid border-black w-1/2 max-md:min-w-fit max-sm:min-w-fit backdrop-blur-md rounded-lg"> 
            <h2 className='text-9xl text-center w-min max-lg:text-8xl max-sm:text-5xl break-normal tracking-wide'>
                <span className='flex flex-col text-yellow-800'>
                    {text}
                </span>
            </h2>
            </div>
        </section>
        </motion.span>
    ))}
    </div>
);
};

export default TypewriterAnimation;
'use client';

import Image from 'next/image';
import { FaPlus } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn, slideIn, staggerContainer } from '@/utils/motion'

const Hero = () => {
    return (
        <div className='pb-10'>
            <div className='2xl:ml-[123px] pt-[80px]'>
                <FaPlus size={25} className='hidden 2xl:block absolute left-[800px] hover:rotate-90 duration-500 rotate-12' color='white' />
                <FaPlus size={25} className='hidden 2xl:block absolute right-[150px] top-[400px] hover:rotate-45 duration-500 rotate-6' color='white' />
                <FaPlus size={25} className='hidden 2xl:block absolute left-[150px] top-[580px] hover:rotate-180 duration-700 rotate-[35deg]' color='white' />

                <div className='flex flex-wrap gap-10 lg:gap-0 justify-around'>

                    <div>

                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.02 }}
                        >
                            <motion.h1 
                            variants={slideIn('left', 'spring', 0, 3.1)}
                            className='text-[210px] lg:text-[260px] hidden lg:block  font-principal  bg-gradient-to-b from-purple-900 to-indigo-800 bg-clip-text text-transparent'>EVOLVE</motion.h1>

                            <motion.h1 
                            variants={slideIn('left', 'spring', 0, 3.4)}
                            className='text-[60px] sm:text-[120px] lg:text-[150px] lg:absolute flex justify-center top-[23rem] text-center  font-principal text-[#f8ce9b]'>FITNESS CLUB</motion.h1>

                            <motion.h2 
                            variants={slideIn('left', 'spring',0, 3.9)}
                            className='text-[35px] md:text-[45px] text-center font-principal tracking-wider text-white'>evolutionary fitness</motion.h2>
                            
                        </motion.div>


                        <div className='w-full p-2 md:w-[500px] mt-8 text-right'>

                            <p className='text-center md:text-left text-white font-principal text-xl'>Get your dream body at our women's fitness gym! Our expert trainers will help you reach your fitness goals with personalized workouts designed just for you. Join us today!</p>

                            <div className='flex md:justify-start mx-auto justify-center mt-10 gap-8'>

                                <Link href='/Exercises' className='p-2 bg-[#f8ce9b] duration-500 hover:bg-purple-600 hover:text-[#f8ce9b] rounded-2xl font-principal tracking-widest text-lg md:text-xl uppercase shadow-2xl'>
                                    Exercises
                                </Link>

                                <Link href='#contact' className='uppercase duration-500  p-2 rounded-2xl text-lg md:text-xl bg-purple-600  font-principal text-[#f8ce9b] hover:text-black'>
                                    Contact us
                                </Link>
                            </div>

                        </div>
                    </div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.05 }}
                    >
                        <motion.img 
                        initial={{ x: 0 }}
                        animate={{
                          x: [null, 5, -15, 5, -20, 0],
                          transition: { duration: 8, repeat: Infinity, repeatDelay: 0, ease: "easeInOut" }
                        }}
                        
                        src='/heroImg.png' className='p-1 w-[360px] md:w-[600px]' width={600} height={680} />
                    </motion.div>
                </div>
            </div>

            <div>

                <div className='px-10 lg:px-[255px] mt-10'>
                    <hr className='h-[0.12rem] bg-white rounded-full'/>
                    <div className='flex gap-4 justify-around mt-5'>
                        <Image src='/nike.png' width={70} height={70} />
                        <Image src='/adidas.png' width={70} height={70} />
                        <Image src='/puma.png' width={70} height={70} />
                        <Image src='/under.png' width={70} height={70} />
                    </div>
                </div>
    
                
            </div>

        </div>
    );
}

export default Hero;
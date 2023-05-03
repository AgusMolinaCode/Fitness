'use client'; 

import Image from 'next/image';
import React from 'react';
import { FaPlus } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn, slideIn, staggerContainer } from '@/utils/motion'

const Members = () => {
    return (
        <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.04 }}
            className=' md:pb-20'>

            <div className='relative'>
                <FaPlus size={25} className='hidden lg:block absolute left-[750px] hover:rotate-90 duration-500 rotate-12' color='black' />
                <FaPlus size={25} className='hidden lg:block absolute right-[100px] top-[340px] hover:rotate-45 duration-500 rotate-6' color='black' />
                <FaPlus size={25} className='hidden lg:block absolute left-[100px] top-[250px] hover:rotate-180 duration-700 rotate-[35deg]' color='black' />
            </div>
            

            <div 
                
                className='flex flex-wrap justify-evenly gap-1'>
               
                <motion.div 
                    variants={fadeIn('right', 'spring', 1.0, 1.9)}
                    className='relative'>
                    <Image src='/members3.png' width={400} height={400} className='rounded-3xl' />
                    <Image src='/relampago.png' width={50} height={50} className='absolute top-[25rem] rotate-[20deg] left-[15rem]' />

                </motion.div>

                <motion.div 
                    variants={fadeIn('right', 'spring', 1.0, 2.5)}
                    className='py-20 w-[650px]'>
                    <h1 className='text-[2rem] md:text-[2.65rem] text-black font-principal'>MILLIONS OF HAPPY MEMBERS GETTING <span className='text-purple-600'>FIT</span> </h1>
                    <p className='text-lg md:text-xl font-principal text-black mt-2'>Many of our female clients came to our gym looking to transform their bodies, and thanks to the power of fitness, they have achieved incredible results. They have not only built strong, lean muscles and improved their physical health, but they have also gained confidence and a newfound sense of self-esteem.</p>
                    <p className='text-lg md:text-xl font-principal text-black mt-5'>Our gym is proud to provide a supportive and empowering environment where women can achieve their fitness goals and unlock their full potential.</p>

                    <div className='mt-5'>
                        <Link href='/Exercises' className='mt-5 bg-purple-600 p-2 rounded-3xl font-principal text-xl hover:text-black duration-500 text-[#f8ce9b]'>
                            VIEW EXERCISES
                        </Link>
                    </div>

                </motion.div>
            </div>
        </motion.div>
    );
}

export default Members;

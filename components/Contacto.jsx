import React from 'react';
import { TextField, Button } from "@mui/material";
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaTwitterSquare } from 'react-icons/fa';



const Contacto = () => {
    return (
        <div id='contact' className='px-[8px] lg:px-[120px] pt-16 pb-10'>
            <div>
                <div className='w-full flex flex-col justify-center p-2 mx-auto md:justify-start md:w-[800px]'>
                    <h1 className='text-4xl text-white text-center font-principal'><span className='color'>JOIN NOW </span>TO GET IN SHAPE</h1>
                    <p className='text-lg text-white text-center md:text-left font-principal pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa omnis incidunt eius recusandae quaerat error accusamus fuga veniam itaque, excepturi cumque possimus similique perspiciatis dolorem perferendis, consectetur minus animi odit?</p>
                </div>

                <div className='flex flex-wrap gap-4 justify-evenly'>

                    <div className='mt-24'>
                        <div>
                            <form style={{ backgroundColor: "white", padding: "18px", borderRadius: '22px' }}>
                                <TextField
                                    label="Name"
                                    variant="standard"
                                    margin="normal" fullWidth
                                />
                                <TextField label="Email" variant="standard" margin="normal" fullWidth />
                                <TextField
                                    label="Message"
                                    variant="standard"
                                    margin="normal"
                                    fullWidth
                                    multiline
                                    rows={4}
                                />
                                <Button variant="contained" className='bg-[#f8ce9b] font-principal text-xl text-black hover:bg-[#d3d498]' fullWidth>
                                    Send
                                </Button>
                            </form>
                        </div>

                        <div className='flex justify-evenly pt-5'>
                            <FaFacebook size={50} color='white' />
                            <FaInstagram size={50} color='white' />
                            <FaTwitterSquare size={50} color='white' />
                        </div>
                        
                    </div>

                    <div className=''>
                        <Image src='/retrato5.png' className='' width={600} height={600} />
                    </div>



                </div>
            </div>
        </div>
    );
}

export default Contacto;

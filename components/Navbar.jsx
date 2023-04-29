import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {

    const router = useRouter();

    return (
        <div>
            <div className='flex px-5 md:px-[45px] justify-between gap-1 pt-[44px]'>

                <div className="navbar-start md:hidden">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className={router.pathname === '/' ? "h-8 w-8 text-[#f8ce9b]" : "h-8 w-8" } fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-500 rounded-box w-52">
                            <Link href='/Exercises'>
                                <h1 className={router.pathname === '/' ? 'text-2xl lg:text-3xl font-principal text-[#f8ce9b]' : 'text-2xl lg:text-3xl font-principal text-black '}><span className={router.pathname === '/Exercises' ? 'underline underline-offset-4' : ''}>TRAINING</span></h1>
                            </Link>
                            <Link href='/Calculator'>
                                <h1 className={router.pathname === '/' ? 'text-2xl lg:text-3xl font-principal text-[#f8ce9b]' : 'text-2xl lg:text-3xl font-principal text-black  '}><span className={router.pathname === '/Calculator' ? 'underline underline-offset-4' : ''}>CALCULATOR</span></h1>
                            </Link>
                        </ul>
                    </div>
                </div>

                <div className='flex gap-2 items-center'>
                    <Link href='/'>
                        <h1 className={router.pathname === '/' ? 'text-2xl lg:text-3xl font-principal underline-offset-4 underline text-[#f8ce9b] decoration-[#f8ce9b]' : 'text-2xl lg:text-3xl font-principal  text-black '}>FITNESS CLUB</h1>
                    </Link>
                </div>

                <div className='hidden md:flex gap-5'>
                    <Link href='/Exercises'>
                        <h1 className={router.pathname === '/' ? 'text-2xl lg:text-3xl font-principal text-[#f8ce9b]' : 'text-2xl lg:text-3xl font-principal text-black '}><span className={router.pathname === '/Exercises' ? 'underline underline-offset-4' : ''}>TRAINING</span></h1>
                    </Link>
                    <p className={router.pathname === '/' ? 'text-3xl font-principal  text-[#f8ce9b]' : 'text-3xl font-principal  text-black'}>|</p>
                    <Link href='/Calculator'>
                        <h1 className={router.pathname === '/' ? 'text-2xl lg:text-3xl font-principal text-[#f8ce9b]' : 'text-2xl lg:text-3xl font-principal text-black  '}><span className={router.pathname === '/Calculator' ? 'underline underline-offset-4' : ''}>CALCULATOR</span></h1>
                    </Link>
                </div>



            </div>
        </div>
    );
}

export default Navbar;

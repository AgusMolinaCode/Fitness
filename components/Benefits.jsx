import React from 'react';

const Benefits = () => {
    return (
        <div>
            <div className=' pt-[80px] pb-20'>
                <div>
                    <h1 className='font-principal text-4xl'>MORE THAN JUST GYM.</h1>
                    <p className='mt-5 max-w-[900px] font-principal text-xl'>Our gym offers professional classes with expert instructors. Join us to reach your fitness goals with the best in the business!</p>
                </div>

                <div className='items-center flex flex-wrap  gap-4 justify-center mt-10 '>

                    <div className='bg-[url("/retrato3.jpg")] bg-cover rounded-3xl bg-center w-[400px] h-[400px]'>
                        <div className='w-full h-full rounded-3xl bg-black/50'>
                            <div className='pt-[68%]  p-2'>
                                <h1 className='text-center font-principal text-2xl text-[#f8ce9b]'>CrossFit Coach</h1>
                                <p className='text-white text-center font-principal text-xl'>As an expert in HIIT and cross-training, Maria develops programs to help clients build muscle, burn fat, and improve overall fitness.</p>
                            </div>
                        </div>  
                    </div>
                    
                    <div className='bg-[url("/retrato2.jpg")] bg-cover rounded-3xl bg-center w-[400px] h-[400px]'>
                        <div className='w-full h-full rounded-3xl bg-black/50'>
                            <div className='pt-[68%] p-2'>
                                <h1 className='text-center font-principal text-2xl text-[#f8ce9b]'>Powerlifting Coach</h1>
                                <p className='text-white text-center font-principal text-xl'>With a passion for helping women build strength and confidence, Laura specializes in customized strength training programs.</p>
                            </div>
                        </div>  
                    </div>

                    <div className='bg-[url("/retrato1.jpg")] bg-cover rounded-3xl bg-center w-[400px] h-[400px]'>
                        <div className='w-full h-full rounded-3xl bg-black/50'>
                            <div className='pt-[68%] p-2'>
                                <h1 className='text-center font-principal text-2xl text-[#f8ce9b]'>Circuit Training Coach</h1>
                                <p className='text-white text-center font-principal text-xl'>Intense workouts and specializes in developing high-intensity circuit training programs for maximal results in minimal time.</p>
                            </div>
                        </div>  
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Benefits;

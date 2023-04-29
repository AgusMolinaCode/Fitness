    import Navbar from '@/components/Navbar';
    import React, { useState, useEffect } from 'react';
    import Head from 'next/head';


    const Exercises = () => {
        const [bodyPart, setBodyPart] = useState('waist');
        const [exercises, setExercises] = useState([]);
        const limitedExercises = exercises.slice(0, 8);

        useEffect(() => {
            async function fetchData() {
                const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${encodeURIComponent(bodyPart)}`;
                const options = {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/octet-stream',
                        'X-RapidAPI-Key': process.env.API_KEY,
                        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
                    }
                };
                    
                try {
                    const response = await fetch(url, options);
                    const result = await response.json();
                    setExercises(result);
                } catch (error) {
                    console.error(error);
                }
            }

            fetchData();
        }, [bodyPart]);

        function handleSelectChange(event) {
            setBodyPart(event.target.value);
        }

        return (
            <main>
                <Head>
                    <title>Exercises</title>
                    <meta name="description" content="Fitness Club Exercises" />
                </Head>
                <div className='gradient'>
                    <Navbar />

                    <div className='flex flex-col justify-center mx-auto items-center pt-20 '>
                        <div>
                            <h1 className='text-5xl font-principal text-black'>Exercises</h1>
                        </div>

                        <div>
                            <select name="bodyPart" className='m-2 font-principal text-xl text-center bg-[#f8ce9b] p-2 rounded-xl' value={bodyPart} onChange={handleSelectChange}>
                                <option className='' value="waist">Waist</option>
                                <option className='' value="chest">Chest</option>
                                <option className='' value="back">Back</option>
                                <option className='' value="cardio">Cardio</option>
                                <option className='' value="lower arms">Lower Arms</option>
                                <option className='' value="lower legs">Lower Legs</option>
                                <option className='' value="neck">Neck</option>
                                <option className='' value="shoulders">Shoulders</option>
                                <option className='' value="upper arms">Upper Arms</option>
                                <option className='' value="upper legs">Upper Legs</option>
                            </select>
                        </div>

                    </div>

                    <div className='gap-5 flex flex-wrap justify-center pb-20'>
                        {limitedExercises.map((exercise) => (
                            <div key={exercise.id} className="m-2 ">
                                <h2 className='text-center m-2 font-principal text-black text-2xl uppercase'>{exercise.name}</h2>
                                <p className='text-center m-2 font-principal text-black text-lg '>
                                    Equipment: <span className='text-xl text-red-600 uppercase'>{exercise.equipment}</span>
                                </p>
                                <img className='w-[400px] h-[380px]' src={exercise.gifUrl} alt={exercise.name} />
                            </div>
                        ))}
                    </div>

                </div>
            </main>
        );
    }

    export default Exercises;
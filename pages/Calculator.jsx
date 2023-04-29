import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Head from 'next/head';
import Form from '@/components/IdealWeight';

function fetchData(age, weight, height) {
    const url = `https://fitness-calculator.p.rapidapi.com/bmi?age=${age}&weight=${weight}&height=${height}`;
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
            'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
        }
    };

    return fetch(url, options)
        .then(response => response.json())
        .catch(error => console.log(error));
}

export default function BmiCalculator() {
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [result, setResult] = useState(null);
    const [submitClicked, setSubmitClicked] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (submitClicked) {
            fetchData(age, weight, height)
                .then(data => setResult(data))
                .catch(error => console.log(error));
        }
    }, [submitClicked]);

    function handleSubmit(event) {
        event.preventDefault();

        if (age < 12 || age > 80) {
            setError('Age must be between 12 and 80');
            return;
        }

        if (weight < 40 || weight > 160) {
            setError('Weight must be between 40kg and 160kg');
            return;
        }

        if (height < 130 || height > 230) {
            setError('Height must be between 130cm and 230cm');
            return;
        }

        if (isNaN(age) || isNaN(weight) || isNaN(height)) {
            setError('Please enter valid numbers for age, weight, and height');
            return;
        }

        setSubmitClicked(true);
        setError(null);
    }

    function handleReset() {
        setAge('');
        setWeight('');
        setHeight('');
        setResult(null);
        setSubmitClicked(false);
        setError(null);
    }

    return (
        <div className='gradient '>
            <Head>
                <title>BMI Calculator</title>
                <meta name="description" content="BMI Calculator" />
            </Head>
            <Navbar />
            <div className="">
                <div className=''>
                    <h1 className='text-4xl p-2 md:text-5xl text-center mt-20 font-principal text-black'>BMI Calculator</h1>
                </div>

                <div className='flex w-full p-2 md:w-[450px] lg:w-[650px] justify-center mx-auto mt-10'>
                    <p className='font-principal text-lg md:text-xl text-black text-center'>
                        The BMI calculator calculates a person's Body Mass Index (BMI) based on their height and weight. BMI is a measure of body fat based on height and weight that applies to adult men and women. It's a quick way to determine if someone is underweight, at a healthy weight, overweight, or obese. The calculation is done by dividing a person's weight in kilograms by their height in meters squared (kg/m²). The result is interpreted using standard BMI categories that indicate the level of risk for certain health conditions.
                    </p>
                </div>


                <form onSubmit={handleSubmit}>

                    <div className='flex flex-wrap p-2 mx-auto justify-center gap-5 mt-10'>
                        <div className='flex gap-2 items-center'>
                            <label className='text-2xl font-principal' htmlFor="age">Current Age:</label>
                            <input className='p-2 bg-[#f8ce9b] rounded-xl font-principal text-xl' type="text" id="age" value={age} onChange={e => setAge(e.target.value)} />
                        </div>
                        <div className='flex gap-2 items-center'>
                            <label className='text-2xl font-principal' htmlFor="weight">Weight (kg):</label>
                            <input className='p-2 bg-[#f8ce9b] rounded-xl font-principal text-xl' type="text" id="weight" value={weight} onChange={e => setWeight(e.target.value)} />
                        </div>
                        <div className='flex gap-2 items-center'>
                            <label className='text-2xl font-principal' htmlFor="height">Height (cm):</label>
                            <input className='p-2 bg-[#f8ce9b] rounded-xl font-principal text-xl' type="text" id="height" value={height} onChange={e => setHeight(e.target.value)} />
                        </div>
                    </div>

                    <div className='text-center text-3xl font-principal mt-10'>
                        {error && <p>{error}</p>}
                    </div>

                    <div className='flex justify-center mt-10 gap-5'>
                        <button className='p-2 rounded-xl text-2xl tracking-wide font-principal bg-green-400' type="submit">Calculate</button>
                        <button className='p-2 rounded-xl text-2xl tracking-wide font-principal bg-red-400' type="button" onClick={handleReset}>Reset</button>
                    </div>
                </form>



                {result && (
                    <div className='flex flex-col mt-12 gap-4 justify-center mx-auto'>
                        <h2 className='text-center font-principal text-3xl'>Your BMI is: {result.data.bmi}</h2>
                        <h2 className='text-center font-principal text-3xl'>Your Health is: {result.data.health}</h2>
                        <h2 className='text-center font-principal text-3xl'>Your healthy BMI Range is: {result.data.healthy_bmi_range}</h2>

                    </div>
                )}

                <div className='mt-20'>
                    <Form />
                </div>

            </div>


        </div>
    );
}
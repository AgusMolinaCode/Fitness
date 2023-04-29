import axios from 'axios';
import { useState } from 'react';

function Form(props) {
    const [height, setHeight] = useState('');
    const [gender, setGender] = useState('')
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const options = {
            method: 'GET',
            url: 'https://fitness-calculator.p.rapidapi.com/idealweight',
            params: {
                gender: gender,
                height: height,
            },
            headers: {
                'content-type': 'application/octet-stream',
                'X-RapidAPI-Key': '11f8510da1mshc672d3c46c85ae9p1ed7d6jsnbcb10534d44d',
                'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com',
            },
        };
    
        try {
            const response = await axios.request(options);
            setResult(response.data);
            setError(null); // Limpiar cualquier error anterior en caso de que la solicitud sea exitosa
        } catch (error) {
            console.error(error);
            setResult(null); // Limpiar el resultado en caso de que ocurra un error
            setError('Error fetching data. Please try again later.'); // Establecer el mensaje de error
        }
    };

    function handleReset() {
        setHeight('');
        setResult(null);
        setError(null);
    }

    return (
        <>
            <div>
                <h1 className='text-4xl p-2 md:text-5xl text-center mt-20 font-principal text-black'>Ideal Weight Calculator</h1>
            </div>

            <div className='flex w-full p-2 md:w-[450px] lg:w-[650px] justify-center mx-auto mt-10'>
                <p className='font-principal text-lg md:text-xl text-black text-center'>
                    To calculate the ideal weight of a person based on their gender and height, formulas such as the Body Mass Index (BMI) or the Broca Index can be used. The BMI is calculated by dividing the weight in kilograms by the square of the height in meters. The Broca Index uses height in centimeters to calculate the ideal weight by subtracting 100 from the height and multiplying by 0.9 for men or 0.85 for women. These calculations give a rough estimate of a person's ideal weight.
                </p>
            </div>

            <div>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-4 items-center justify-center mt-10'>
                        <select className='bg-[#f8ce9b] font-principal text-xl rounded-xl p-3' name="gender" id="gender" value={gender} onChange={(event) => setGender(event.target.value)}>
                            <option value='-'>Choose Here</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>

                        <div className='flex flex-col items-center'>
                            <label className='font-principal text-2xl' htmlFor="height">height (cm):</label>
                            <input className='p-3 font-principal text-xl text-center bg-[#f8ce9b] rounded-xl' type="text" name="height" id="height" value={height} onChange={(event) => setHeight(event.target.value)} />
                        </div>

                    </div>

                    <div className='flex justify-center mt-10 gap-5'>
                        <button className='p-2 rounded-xl text-2xl tracking-wide font-principal bg-green-400' type="submit">Calculate</button>
                        <button className='p-2 rounded-xl text-2xl tracking-wide font-principal bg-red-400' type="button" onClick={handleReset}>Reset</button>
                    </div>

                </form>
            </div>


            <div className='mt-14 pb-8'>
                {error && (
                    <p className='text-center font-principal text-3xl text-red-500'>{error}</p>
                )}
                {result && ( // Si result existe, entonces renderiza el siguiente código
                    <div>
                        <p className='text-center font-principal text-3xl'>Your ideal Weight is: </p>
                        <p className='text-center font-principal text-3xl'>{result.data.Devine} Kg</p>
                        <p>{error}</p>
                    </div>
                )}
            </div>
        </>

    );
}

export default Form;

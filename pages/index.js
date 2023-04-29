import Benefits from '@/components/Benefits';
import Clases from '@/components/clases';
import Contacto from '@/components/Contacto';
import Hero from '@/components/Hero';
import Members from '@/components/Members';
import Navbar from '@/components/Navbar';
import Head from 'next/head';

export default function Home() {
  return (
    <main>
      <Head>
        <title>Home</title>
        <meta name="description" content="Fitness Club Home" />
      </Head>

      <div>
        <div className='bg-gradient-to-tl from-slate-700 via-purple-900 to-slate-800'>
          <Navbar />
          <Hero />
        </div>

        <div className='gradient px-[8px] lg:px-[120px]'>
          <Benefits />
          <Members />
          <Clases />
        </div>

        <div className='bg-gradient-to-tl from-slate-600 via-purple-800 to-slate-700 '>
            <Contacto />

        </div>



      </div>
    </main>
  );
}

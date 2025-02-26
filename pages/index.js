import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle,AiFillFacebook,AiFillLinkedin} from 'react-icons/ai'
import arturo from '../public/arturo.png'
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import { useState } from 'react';
import { ThemeContext } from './themeContext';

export default function Home() {
  const [dark,setDark]=useState(ThemeContext);

  
  function clickDark(){
    setDark(!dark);
  }
  return (
    <div className={dark?"dark":""}>
      <Head>
        <title>Arturo tapia </title>
        <meta name="Home" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10  md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen' >
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons dark:text-white'>Xfibben </h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill onClick={clickDark} className='cursor-pointer text-2xl dark:text-white'/></li>
              <li>
                <a href='#' className='bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8'
                >Contactar</a>

              </li>
            </ul>
          </nav>
          <div className='text-center p-10 '>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>Arturo Tapia</h2>
            <h3 className='text-2xl py-2 dark:text-white'>Desarrollador full stack</h3>
            <p className='text-md py-5 leading-8 text-gray-800 dark:text-white'>Desarrollador freelancer de punito</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
          <AiFillTwitterCircle />
          <AiFillFacebook />
          <AiFillLinkedin/>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 md:h-96 md:w-96 '>
            <Image src={arturo} layout="fill"/>
          </div>

        </section>
        <section>
          <div >
            <h3 className='text-3xl py-1 dark:text-white'>Servicios que ofresco.</h3>
            <p className='text-md-py-2 leading-8 text-gray-800 dark:text-gray-500'>
              Desde mi inicio en el ambito laboral, he trabajado <span className='text-teal-500'>remoto</span> para...</p>
          </div> 
          <div className='lg:flex gap-10'>
          <div className=' grid justify-items-center text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
            <Image src={design} width={100} height={100}/>
            <h3 className='text-lg font-medium pt=8 pb-2'>Diseños hermosos y responsivos.</h3>
            <p className='py-2'>Creacion de diseños elegantes y minimalistas para tus negocios.</p>
            <h4 className='py-4 text-teal-600'> Herramientas que uso:</h4>
            <p className='text-gray-800 py-1'>Photoshop</p>
            <p className='text-gray-800 py-1'>Adobe Xd</p>
            <p className='text-gray-800 py-1'>Figma</p>
          </div>
          <div className='grid justify-items-center text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
            <Image src={code} width={100} height={100}></Image>
            <h3 className='text-lg font-medium pt=8 pb-2'>Programación enfocada a tus necesidades.</h3>
            <p className='py-2'>Creación de sistemas a pedido del cliente.</p>
            <h4 className='py-4 text-teal-600'> Herramientas que uso:</h4>
            <p className='text-gray-800 py-1'>NodeJs</p>
            <p className='text-gray-800 py-1'>Mongo DB</p>
            <p className='text-gray-800 py-1'>Next JS</p>
          </div>
          
          <div className='grid justify-items-center text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white'>
            <Image src={consulting} width={100} height={100} />
            <h3 className='text-lg font-medium pt=8 pb-2'>Enseñanza de tecnologias frontend y backend.</h3>
            <p className='py-2'>Creacion de diseños elegantes y minimalistas para tus negocios.</p>
            <h4 className='py-4 text-teal-600'> Herramientas que enseño:</h4>
            <p className='text-gray-800 py-1'>React</p>
            <p className='text-gray-800 py-1'>Nest Js</p>
            <p className='text-gray-800 py-1'>Odoo</p>
          </div>

          </div>
          
          
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>
              Portafolio
            </h3>
            <p className='text-md-py-2 leading-8 text-gray-800 dark:text-gray-500'>
              A lo largo de mi carrera eh desarrollado diversos proyectos para una gran variedad de entidades, tanto <span className='text-teal-600'>privadas </span> como <span className='text-teal-600'>públicas</span>.
            </p>

          </div>
          <div className='text-teal'>
            <div className=''>
              
            </div>
          </div>
        </section>
      </main>

      
    </div>
  )
}

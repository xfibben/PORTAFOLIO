import { ThemeContext } from "./themeContext";
import { useState } from "react";
import Head from 'next/head';

export default function Contact() {

    const [dark,setDark]=useState(ThemeContext);

    return (
        <div class name={dark?"dark":""}>
            <Head>
                <title>Arturo tapia </title>
                <meta name="Contact" content="Contact Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main class='bg-white px-10  md:px-20 lg:px-40 dark:bg-gray-900'>
                <section class='min-h-screen' >
                    

                </section>
            </main>
        </div>
    )
}
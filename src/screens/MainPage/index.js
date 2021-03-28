import React, { useState, useEffect } from 'react';

// importing screens
import SplashScreen from '../SplashScreen';
import Navbar from '../../components/Navbar';
import Feature from '../Feature';
import Projects from '../Projects';
import Contact from '../Contact';
import Services from '../Expertise';

export default function MainPage() {

    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false)
    //     }, 4000)
    // })

    // if(loading) return <SplashScreen />
    // else return(
    return(
        <div>
            <Navbar />
            <Feature />
            <Projects />
            <Services />
            <Contact />

            {/* <div style={{ height: '100vh'  }}>
                Hi
            </div> */}
        </div>
    )

}
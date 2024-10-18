"use client";
import { Button } from "./Button"
import Spline from '@splinetool/react-spline';

export const Hero = () => {

    return(
        <section className='col-span-full bg-red'>
            <div>
                <h1>
                l'authenticité au service du luxe.
                </h1>
                <h2>
                Blume <br />Sécurisez et authentifiez vos produits de luxe de seconde main grâce à notre solution blockchain innovante et fiable, assurant transparence et confiance pour acheteurs et vendeurs.
                </h2>
                <Button 
                    text='Get Started'
                />
            </div>
            <Spline
                scene="https://prod.spline.design/2ddi3OCFYYt6pQvy/scene.splinecode"
                style={{ width: '100%', height: '500px' }}
            />
        </section>
    )
}






"use client";
import { Button } from "./Button";
import Spline from '@splinetool/react-spline';

export const Hero = () => {
    return (
        <>
            <div className="col-span-4 mt-[150px] 
                md:col-span-7 col-start-1 
                md:col-end-8 
                md:mt-[75px]
                md:mt-[0] h-fit"
            >
                <h1 className='text-4xl md:text-[80px] mb-[50px]
                font-medium 
                md:mb-8
                md:leading-[88px]'
            >
                    l'authenticité <br/>au service du luxe.
                </h1>
                <h2 className="font-medium w-full md:w-3/5 mb-[50px] md:mb-8">
                    Blume <br />Sécurisez et authentifiez vos produits de luxe de seconde main grâce à notre solution blockchain innovante et fiable, assurant transparence et confiance pour acheteurs et vendeurs.
                </h2>
                <Button
                    text='Get Started'
                />
            </div>
            <div className="col-span-4 md:col-span-5">
                <Spline
                    scene="/img/scene.splinecode"
                    style={{ width: '100%', height: '500px' }}
                />
            </div>
        </>
    );
};

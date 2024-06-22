import React from 'react';
import { useTranslation } from "react-i18next";
import i from '../../assets/iam.jpg';

export const Hero = () => {
    const { t } = useTranslation();

    return (
        <section id='Hero' className="p-4 sm:p-8 lg:p-32 lg:h-screen bg-[#F5F5F5] dark:bg-[#191919]" aria-labelledby="hero-heading">
            <div className="flex flex-col lg:flex-row items-center lg:justify-around w-full h-full">
                <div className="text-center lg:text-left mb-8 lg:mb-0" data-aos="zoom-in-right">
                    <h1 id="hero-heading" className="text-3xl sm:text-4xl lg:text-6xl text-[#42446E] dark:text-[#D9D9D9] font-bold mb-4">
                        {t('hero.greeting')}
                    </h1>
                    <h2 className="text-xl sm:text-2xl lg:text-4xl text-[#42446E] dark:text-[#D9D9D9] font-semibold mb-2">
                        {t('hero.name')}
                    </h2>
                    <h2 className="Behruz2 py-2 text-3xl sm:text-4xl lg:text-6xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#13B0F5] to-[#E70FAA]">
                        {t('hero.fullName')}
                    </h2>
                    <h2 className="text-xl sm:text-2xl lg:text-4xl text-[#42446E] dark:text-[#D9D9D9] font-semibold">
                        {t('hero.profession')}
                    </h2>
                </div>
                <div className="flex justify-center" data-aos="zoom-in-left">
                    <div className='w-36 h-36 sm:w-48 sm:h-48 lg:w-[330px] lg:h-[330px] rounded-full flex items-center justify-center' 
                        style={{ background: 'linear-gradient(to right, #13B0F5, #E70FAA)' }}>
                        <img className="rounded-full w-32 h-32 sm:w-44 sm:h-44 lg:w-80 lg:h-80 shadow-lg" 
                            src={i} alt="Avatar of Behruz" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;

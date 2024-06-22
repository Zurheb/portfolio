import React from 'react';
import html from '../../assets/Html.png';
import css from '../../assets/css.png';
import js from '../../assets/js.png';
import reactImg from '../../assets/react.png';
import bootstrap from '../../assets/bootstrap.png';
import tailwind from '../../assets/tailwind.png';
import vscode from '../../assets/vscode.png';
import github from '../../assets/github.png';
import AnimatedTitle from '../../Smth/Animation';
import { useTranslation } from 'react-i18next';

export const Section1 = () => {
  const { t } = useTranslation();
  
  return (
    <section id='MyTechStack' className="py-16 bg-[#F5F5F5] dark:bg-[#191919]" data-aos="zoom-in-down">
      <div className="container mx-auto text-center p-10">
        <h1 className="text-3xl lg:text-5xl font-bold text-[#42446E] mb-4">
          <AnimatedTitle>
            <span className='text-[#42446E] dark:text-[#CCCCCC]'>{t("section1.paragraph")}</span>
          </AnimatedTitle>
        </h1>
        <h2 className="text-lg lg:text-xl text-[#666666] dark:text-[#A7A7A7] mb-8">{t("section1.p")}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 p-10 place-items-center">
          <img className="w-12 sm:w-20 h-12 sm:h-20 lg:w-28 lg:h-28" src={html} alt="HTML5 logo" />
          <img className="w-12 sm:w-20 h-12 sm:h-20 lg:w-28 lg:h-28" src={css} alt="CSS3 logo" />
          <img className="w-12 sm:w-20 h-12 sm:h-20 lg:w-28 lg:h-28" src={js} alt="JavaScript logo" />
          <img className="w-12 sm:w-20 h-12 sm:h-20 lg:w-28 lg:h-28" src={reactImg} alt="React logo" />
          <img className="w-12 sm:w-20 h-12 sm:h-20 lg:w-28 lg:h-28" src={bootstrap} alt="Bootstrap logo" />
          <img className="w-12 sm:w-20 h-12 sm:h-20 lg:w-28 lg:h-28" src={tailwind} alt="Tailwind CSS logo" />
          <img className="w-12 sm:w-20 h-12 sm:h-20 lg:w-28 lg:h-28" src={vscode} alt="Visual Studio Code logo" />
          <img className="w-12 sm:w-20 h-12 sm:h-20 lg:w-28 lg:h-28" src={github} alt="GitHub logo" />
          <img className="w-12 sm:w-20 h-12 sm:h-20 lg:w-28 lg:h-28" src="https://cdn.iconscout.com/icon/free/png-256/free-typescript-3521774-2945272.png?f=webp" alt="TypeScript logo" />
          <img className="w-12 sm:w-20 h-12 sm:h-20 lg:w-28 lg:h-28" src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png" alt="Figma logo" />
        </div>
      </div>
    </section>
  );
};

export default Section1;

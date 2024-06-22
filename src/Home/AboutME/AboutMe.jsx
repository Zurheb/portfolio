// import React, { useState } from "react";
// import { Typography, Button } from "@material-tailwind/react";
// import AnimatedTitle from "../../Smth/Animation";
// import { useTranslation } from "react-i18next";

// const AdditionalInfoModal = ({ onClose }) => {
//   const { t } = useTranslation();

//   return (
//     <div className="fixed bg-white dark:bg-[#2C2C2C] inset-0 z-50 w-full h-screen flex justify-center items-center bg-opacity-50">
//       <div className="p-8 rounded-lg max-w-screen-lg w-full relative">
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-500 z-50"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={2}
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>
//         <div className="flex">
//           <div className="flex justify-around w-full text-center">
//             <img
//               className="rounded-full w-36 h-36 lg:w-80 lg:h-80 shadow-lg"
//               src="https://img.freepik.com/premium-photo/anime-male-avatar_950633-956.jpg"
//               alt="avatar"
//             />
//             <div>
//               <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{t('about.title')}</h1>
//               <div className="text-gray-600 dark:text-gray-400">
//                 <p><span className="font-bold">{t('about.info.name')}:</span> Behruz</p>
//                 <p><span className="font-bold">{t('about.info.surname')}:</span> Berdiev</p>
//                 <p><span className="font-bold">{t('about.info.patronymic')}:</span> Anvarovich</p>
//                 <p><span className="font-bold">{t('about.info.birthday')}:</span> 8 September 2008</p>
//                 <p><span className="font-bold">{t('about.info.email')}:</span> <a href="mailto:behber84@icloud.com">behber84@icloud.com</a></p>
//                 <p><span className="font-bold">{t('about.info.phone')}:</span> <a href="tel:+998881373360">+998-88-137-33-60</a></p>
//                 <p><span className="font-bold">{t('about.info.nationality')}:</span> Uzbek</p>
//                 <p><span className="font-bold">{t('about.info.motherland')}:</span> Kurguzstan</p>
//                 <p><span className="font-bold">{t('about.info.hobbies')}:</span> Volleyball</p>
//                 <p><span className="font-bold">{t('about.info.favoriteGenre')}:</span> Fantasy, Magic, sometimes Romance</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export const AboutMe = () => {
//   const [showMoreInfo, setShowMoreInfo] = useState(false);
//   const { t } = useTranslation();

//   const toggleMoreInfo = () => {
//     setShowMoreInfo(!showMoreInfo);
//     document.body.style.overflow = showMoreInfo ? 'auto' : 'hidden';
//   };

//   return (
//     <section id="about" className="py-16 bg-[#F5F5F5] dark:bg-[#191919]">
//       <div className="container mx-auto flex flex-col items-center">
//         <div className="flex justify-center mb-8">
//           <div
//             className="w-[154px] h-[154px] lg:w-[330px] lg:h-[330px] rounded-full flex items-center justify-center"
//             style={{
//               background: "linear-gradient(to right, #13B0F5, #E70FAA)",
//             }}
//           >
//             <img
//               className="rounded-full w-36 h-36 lg:w-80 lg:h-80 shadow-lg"
//               src="https://img.freepik.com/premium-photo/anime-male-avatar_950633-956.jpg"
//               alt="avatar"
//             />
//           </div>
//         </div>
//         <div className="text-center">
//           <AnimatedTitle>
//             <span className="text-[#42446E] dark:text-[#CCCCCC]">
//               {t('about.title')}
//             </span>
//           </AnimatedTitle>
//           <Typography
//             variant="paragraph"
//             className="text-lg lg:text-xl text-[#666666] dark:text-[#A7A7A7] mb-8 px-4 lg:px-64"
//           >
//             {t('about.description')}
//           </Typography>
//           <Button
//             size="lg"
//             onClick={toggleMoreInfo}
//             className="rounded-full px-8 py-3 text-white bg-[#4CAF50] dark:text-[#4CAF50] dark:bg-[#2C2C2C] transition-transform transform hover:scale-105 hover:bg-[#388E3C]"
//           >
//             {t('about.moreInfoButton')}
//           </Button>
//         </div>
//         {showMoreInfo && <AdditionalInfoModal onClose={toggleMoreInfo} />}
//       </div>
//     </section>
//   );
// };

// export default AboutMe;

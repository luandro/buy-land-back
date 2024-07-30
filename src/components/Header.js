import React from 'react';
import { useTranslation } from 'react-i18next';
import "./Header.css";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="relative -bottom-14 py-32 -mt-14 bg-[#adc178]">
      <video
        autoPlay
        muted
        loop
        id="headerVideo"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="./assets/vid/video.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className="absolute inset-0 bg-[#6c584c] opacity-50"></div>
      <div className="relative container mx-auto text-center py-20">
        <h1 className="text-4xl font-bold text-white max-w-prose mx-auto">
          {t('header.title')}
        </h1>
        <p className="mx-auto text-[#f0ead2] mt-4 font-bold">
          {t('header.subtitle')}
        </p>
        <a
          href="#participation"
          className="mt-8 px-6 py-3 bg-[#a98467] text-[#f0ead2] rounded-full inline-block hover:bg-[#6c584c]"
        >
          {t('header.participate')}
        </a>
      </div>
    </header>
  );
};

export default Header;
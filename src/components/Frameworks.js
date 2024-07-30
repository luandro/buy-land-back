import React from 'react';
import i18next from '../i18n';

const Frameworks = () => (
  <section className="frameworks py-24 bg-[#dde5b4]">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold pb-24 text-center text-[#6c584c]">
        {i18next.t('frameworks.title')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-32">
        <div className="framework-category">
          <img
            src="/assets/img/f_1.jpg"
            alt={i18next.t('frameworks.image1.alt')}
            className="framework-image object-cover rounded-full w-48 h-48 mx-auto"
          />
          <div className="framework-text mt-4 text-center">
            <h3 className="text-xl font-bold text-[#6c584c]">
              {i18next.t('frameworks.image1.title')}
            </h3>
            <p className="mt-2 text-[#6c584c]">
              {i18next.t('frameworks.image1.description')}
            </p>
          </div>
          <div className="mt-4 text-center">
            <a
              href="./pages/frameworks/full-page.html"
              className="inline-block px-6 py-2 text-[#f0ead2] bg-[#a98467] rounded-full hover:bg-[#6c584c]"
            >
              {i18next.t('frameworks.learnMore')}
            </a>
          </div>
        </div>
        <div className="framework-category">
          <img
            src="/assets/img/f_2.jpg"
            alt={i18next.t('frameworks.image2.alt')}
            className="framework-image object-cover rounded-full w-48 h-48 mx-auto"
          />
          <div className="framework-text mt-4 text-center">
            <h3 className="text-xl font-bold text-[#6c584c]">
              {i18next.t('frameworks.image2.title')}
            </h3>
            <p className="mt-2 text-[#6c584c]">
              {i18next.t('frameworks.image2.description')}
            </p>
          </div>
          <div className="mt-4 text-center">
            <a
              href="./pages/frameworks/full-page.html"
              className="inline-block px-6 py-2 text-[#f0ead2] bg-[#a98467] rounded-full hover:bg-[#6c584c]"
            >
              {i18next.t('frameworks.learnMore')}
            </a>
          </div>
        </div>
        <div className="framework-category">
          <img
            src="/assets/img/f_3.png"
            alt={i18next.t('frameworks.image3.alt')}
            className="framework-image object-cover rounded-full w-48 h-48 mx-auto"
          />
          <div className="framework-text mt-4 text-center">
            <h3 className="text-xl font-bold text-[#6c584c]">
              {i18next.t('frameworks.image3.title')}
            </h3>
            <p className="mt-2 text-[#6c584c]">
              {i18next.t('frameworks.image3.description')}
            </p>
          </div>
          <div className="mt-4 text-center">
            <a
              href="./pages/frameworks/full-page.html"
              className="inline-block px-6 py-2 text-[#f0ead2] bg-[#a98467] rounded-full hover:bg-[#6c584c]"
            >
              {i18next.t('frameworks.learnMore')}
            </a>
          </div>
        </div>
        <div className="framework-category">
          <img
            src="/assets/img/f_4.jpg"
            alt={i18next.t('frameworks.image4.alt')}
            className="framework-image object-cover rounded-full w-48 h-48 mx-auto"
          />
          <div className="framework-text mt-4 text-center">
            <h3 className="text-xl font-bold text-[#6c584c]">
              {i18next.t('frameworks.image4.title')}
            </h3>
            <p className="mt-2 text-[#6c584c]">
              {i18next.t('frameworks.image4.description')}
            </p>
          </div>
          <div className="mt-4 text-center">
            <a
              href="./pages/frameworks/full-page.html"
              className="inline-block px-6 py-2 text-[#f0ead2] bg-[#a98467] rounded-full hover:bg-[#6c584c]"
            >
              {i18next.t('frameworks.learnMore')}
            </a>
          </div>
        </div>
        <div className="framework-category">
          <img
            src="/assets/img/f_5.jpg"
            alt={i18next.t('frameworks.image5.alt')}
            className="framework-image object-cover rounded-full w-48 h-48 mx-auto"
          />
          <div className="framework-text mt-4 text-center">
            <h3 className="text-xl font-bold text-[#6c584c]">
              {i18next.t('frameworks.image5.title')}
            </h3>
            <p className="mt-2 text-[#6c584c]">
              {i18next.t('frameworks.image5.description')}
            </p>
          </div>
          <div className="mt-4 text-center">
            <a
              href="./pages/frameworks/full-page.html"
              className="inline-block px-6 py-2 text-[#f0ead2] bg-[#a98467] rounded-full hover:bg-[#6c584c]"
            >
              {i18next.t('frameworks.learnMore')}
            </a>
          </div>
        </div>
        <div className="framework-category">
          <img
            src="/assets/img/f_6.jpg"
            alt={i18next.t('frameworks.image6.alt')}
            className="framework-image object-cover rounded-full w-48 h-48 mx-auto"
          />
          <div className="framework-text mt-4 text-center">
            <h3 className="text-xl font-bold text-[#6c584c]">
              {i18next.t('frameworks.image6.title')}
            </h3>
            <p className="mt-2 text-[#6c584c]">
              {i18next.t('frameworks.image6.description')}
            </p>
          </div>
          <div className="mt-4 text-center">
            <a
              href="./pages/frameworks/full-page.html"
              className="inline-block px-6 py-2 text-[#f0ead2] bg-[#a98467] rounded-full hover:bg-[#6c584c]"
            >
              {i18next.t('frameworks.learnMore')}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Frameworks;

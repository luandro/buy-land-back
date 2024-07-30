import React from 'react';
import i18next from '../i18n';

const VideoSection = () => (
  <section className="video py-12 bg-[#f0ead2]">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#6c584c]">
        {i18next.t('video.title')}
      </h2>
      <div className="flex justify-center">
        <video
          controls
          className="w-full max-w-4xl h-auto object-cover rounded-lg shadow-lg"
        >
          <source src="./assets/vid/video-2.mp4" type="video/mp4" />
          {i18next.t('video.noSupport')}
        </video>
      </div>
    </div>
  </section>
);

export default VideoSection;

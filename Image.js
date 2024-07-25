import React from 'react';

const MyImageComponent = () => {
  return (
    <img
      alt="Offer panel"
      loading="lazy"
      decoding="async"
      src="https://storage.googleapis.com/cdn.healthtrak.com/app/sha-a04d7f0/public/img/sharecare/signup/banner_1.png"
      sizes="100vw"
      srcSet="
        https://storage.googleapis.com/cdn.healthtrak.com/app/sha-a04d7f0/public/img/sharecare/signup/banner_1.png 640w,
        https://storage.googleapis.com/cdn.healthtrak.com/app/sha-a04d7f0/public/img/sharecare/signup/banner_1.png 750w,
        https://storage.googleapis.com/cdn.healthtrak.com/app/sha-a04d7f0/public/img/sharecare/signup/banner_1.png 828w,
        https://storage.googleapis.com/cdn.healthtrak.com/app/sha-a04d7f0/public/img/sharecare/signup/banner_1.png 1080w,
        https://storage.googleapis.com/cdn.healthtrak.com/app/sha-a04d7f0/public/img/sharecare/signup/banner_1.png 1200w,
        https://storage.googleapis.com/cdn.healthtrak.com/app/sha-a04d7f0/public/img/sharecare/signup/banner_1.png 1920w,
        https://storage.googleapis.com/cdn.healthtrak.com/app/sha-a04d7f0/public/img/sharecare/signup/banner_1.png 2048w,
        https://storage.googleapis.com/cdn.healthtrak.com/app/sha-a04d7f0/public/img/sharecare/signup/banner_1.png 3840w
      "
      style={{
        position: 'absolute',
        height: '100%',
        width: '50%',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        color: 'transparent',
        padding:"20px"
      }}
    />
  );
};

export default MyImageComponent;

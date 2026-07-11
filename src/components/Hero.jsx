import { useEffect, useRef } from 'react';

const Hero = () => {
  const videoRef = useRef(null);
  const heroVideoSrc = `${import.meta.env.BASE_URL}assets/hero-video.mp4`;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const playWithSound = () => {
      video.muted = false;
      video.volume = 1;
      video.play().catch(() => {
        video.muted = true;
        video.play().catch(() => {});
      });
    };

    video.currentTime = 0;
    playWithSound();

    const enableSound = () => {
      video.muted = false;
      video.volume = 1;
      video.play().catch(() => {});
      window.removeEventListener('pointerdown', enableSound);
      window.removeEventListener('keydown', enableSound);
      window.removeEventListener('touchstart', enableSound);
    };

    const keepPlaying = window.setInterval(() => {
      video.play().catch(() => {});
    }, 3000);

    window.addEventListener('pointerdown', enableSound, { once: true });
    window.addEventListener('keydown', enableSound, { once: true });
    window.addEventListener('touchstart', enableSound, { once: true });

    return () => {
      window.clearInterval(keepPlaying);
      window.removeEventListener('pointerdown', enableSound);
      window.removeEventListener('keydown', enableSound);
      window.removeEventListener('touchstart', enableSound);
    };
  }, []);

  return (
    <section className='spotlightBanner' aria-label='Aakash India Puri hero video'>
      <video
        ref={videoRef}
        className='heroVideoFrame'
        src={heroVideoSrc}
        autoPlay
        loop
        playsInline
        preload='auto'
        controls={false}
        controlsList='nodownload noplaybackrate nofullscreen'
        disablePictureInPicture
      />
    </section>
  );
};

export default Hero;
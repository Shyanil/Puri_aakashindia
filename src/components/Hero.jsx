const Hero = () => {
  const youtubeVideoId = 'vX9HMkxZzh8';
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&loop=1&playlist=${youtubeVideoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1`;

  return (
    <section className="spotlightBanner" aria-label="Aakash India Puri hero video">
      <iframe
        className="heroVideoFrame"
        src={youtubeEmbedUrl}
        title="Aakash India Puri hero video"
        allow="autoplay; encrypted-media; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </section>
  );
};

export default Hero;

const Hero = ({ heading, para, bgImg = "/images/bgImg.jpg" }) => {
  return (
    <section className="relative text-white h-[70vh] w-full overflow-hidden">
      {/* Background Image using style (simple & safe) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${bgImg?.src || bgImg}')`,
        }}
      ></div>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center p-8">
        <h1 className="text-4xl font-bold mb-4 text-center">{heading}</h1>
        <p className="text-lg text-center">{para}</p>
      </div>
    </section>
  );
};

export default Hero;

const Location = () => {
  return (
    <section className="flex justify-center items-center x">
      <div className="w-full  h-80 shadow-lg rounded-lg overflow-hidden">
        {/* Google Maps with Correct Location */}
        <iframe
          title="Yunusobod davlat xizmatlari markazi"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.5801541858593!2d69.3085324!3d41.3444467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef52d69008a13%3A0x206d066b4f5b48c6!2sYunusobod%20tumani%20davlat%20xizmatlari%20markazi!5e0!3m2!1sen!2s!4v1711512345678"
          className="w-full h-full"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Location;

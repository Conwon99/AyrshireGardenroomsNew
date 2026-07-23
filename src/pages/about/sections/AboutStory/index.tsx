export const AboutStory = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1204px] mx-auto px-4 sm:px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                Ayrshire Garden Rooms was founded on a passion for creating beautiful, functional garden rooms and outdoor living spaces. We're a trusted local business built on quality craftsmanship and exceptional customer service.
              </p>
              <p>
                We specialize in <a href="/garden-rooms" className="text-green-800 font-semibold hover:underline">designing and installing custom garden rooms</a>. Every project we undertake is built with attention to detail, using quality materials and expert workmanship that stands the test of time.
              </p>
              <p>
                Our commitment to excellence has earned us a reputation as one of Ayrshire's leading garden room installation specialists. We take pride in every project, whether it's a compact garden office or a spacious outdoor living area that enhances your home.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="/imgs/WhatsApp Image 2025-12-27 at 4.01.37 PM (1).jpeg"
              alt="Ayrshire Garden Rooms project - Professional garden room installation"
              loading="lazy"
              className="w-full h-auto rounded-lg shadow-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

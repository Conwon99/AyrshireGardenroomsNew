export const Logo = () => {
  return (
    <div className="box-border caret-transparent ml-0 md:ml-4 lg:ml-6">
      <a
        href="/"
        aria-label="home"
        className="relative text-gray-900 box-border caret-transparent flex items-center h-14 max-h-14 overflow-visible md:h-16 md:max-h-16 lg:h-[72px] lg:max-h-[72px]"
      >
        <div className="bg-white rounded-xl h-full flex items-center px-2 shadow-sm">
          <img
            src="/logo-garden-rooms.png"
            alt="Ayrshire Garden Rooms Logo"
            className="box-border caret-transparent h-full w-auto object-contain"
          />
        </div>
      </a>
    </div>
  );
};

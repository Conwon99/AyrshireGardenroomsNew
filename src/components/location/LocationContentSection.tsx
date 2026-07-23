import type { Location } from "@/data/locations";
import { getNearbyLocations } from "@/data/locations";

interface LocationContentSectionProps {
  location: Location;
}

export const LocationContentSection = ({ location }: LocationContentSectionProps) => {
  const nearby = getNearbyLocations(location.slug, 5);

  return (
    <section className="bg-slate-50 py-12 md:py-20">
      <div className="max-w-[1204px] mx-auto px-4 sm:px-5 md:px-8">
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-lg leading-relaxed mb-8">{location.contentOpening}</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Garden Rooms in {location.name}
          </h2>
          <p className="leading-relaxed mb-6">
            Whether you need a home office, gym, or extra living space, our garden room installations
            in {location.name} are built for {location.regionLabel} weather. We work with you from
            design to completion and use quality materials that last. Serving {location.neighborhoods.slice(0, 3).join(", ")}
            {location.neighborhoods.length > 3 ? " and surrounding areas" : ""}.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Why Choose Us in {location.name}
          </h2>
          <p className="leading-relaxed">{location.localKnowledge}</p>

          {nearby.length > 0 && (
            <>
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                Nearby Areas We Also Serve
              </h2>
              <p className="leading-relaxed mb-4">
                As well as {location.name}, we install garden rooms across the surrounding area, including:
              </p>
              <ul className="flex flex-wrap gap-x-2 gap-y-2 list-none pl-0">
                {nearby.map((loc, i) => (
                  <li key={loc.slug} className="inline">
                    <a href={`/${loc.slug}`} className="text-[#787e59] hover:text-[#5a6045] font-medium hover:underline">
                      {loc.name}
                    </a>
                    {i < nearby.length - 1 ? <span className="text-gray-400">,</span> : null}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

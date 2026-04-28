"use client";

export default function VideoHighlights() {
  const videos = [
    {
      id: "7C9wMJwsnqs",
      title: "Utamaduni Fun Day",
    },
    {
      id: "XgMOSQ9Ue5c",
      title: "Utamaduni travel and adventure team",
    },
    {
      id: "J0td4PE1m1o",
      title: "Children’s Day Celebration",
    },
    // add more objects if needed
  ];

  return (
    <section className="py-16 bg-amber-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl fontserif font-bold text-[#050b1a] mb-4">
          Video Highlights
        </h2>
        <div className="h-1 bg-pink-700 rounded-full mx-auto mb-6 w-20"></div>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          A collection of our memorable moments, community events, and activities captured on video.
        </p>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map(({ id, title }) => (
            <div
              key={id}
              className="rounded overflow-hidden border-b border-pink-200 hover:shadow-md transition"
            >
              <div className="aspect-w-20 aspect-h-16">
                <iframe
                  src={`https://www.youtube.com/embed/${id}`}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  className="w-full h-full"
                ></iframe>
              </div>
              <p className="text-left text-gray-900 fontserif font-medium md:text-lg my-2 px-3">
                {title}
              </p>
            </div>
          ))}
        </div>

        {/* Watch More Button */}
        <div className="mt-12">
          <a
            href="https://www.youtube.com/@utamadunifoundation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-1 md:py-2 bg-gradient-to-br from-pink-800 via-pink-700 to-pink-900 hover:bg-blue-800 text-white rounded-md transition-all duration-300 shadowmd"
          >
            Watch More on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}

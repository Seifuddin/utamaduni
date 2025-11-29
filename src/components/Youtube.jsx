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
        <h2 className="text-2xl md:text-4xl fontserif font-bold text-gray-900 mb-4">
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
              className="rounded overflow-hidden shadow-lg bg-white border border-gray-200 hover:shadow-md transition"
            >
              <div className="aspect-w-16 aspect-h-9">
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
            className="inline-block px-8 py-2 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 hover:bg-blue-800 text-white font-semibold rounded-md transition-all duration-300 shadow-md"
          >
            Watch More on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";  // <-- required

const programs = {
  children: {
    title: "Children's Welfare",
    description:
      "Our Children's Welfare program supports orphans and vulnerable children through donations, essential needs, education sponsorship, and emotional well-being initiatives.",
    image: "/images/utamaduni at mathare/_DSC8782.jpg",
  },
  community: {
    title: "Community Outreach",
    description:
      "Delivering food, healthcare awareness, disability support, HIV education, and empowerment to underserved communities.",
    image: "/images/how_it_went_down/_DSC7719.jpg",
  },
  culture: {
    title: "Cultural Preservation",
    description:
      "Promoting traditional arts, values, and practices through education, events, and community-driven cultural projects.",
    image: "/images/how_it_went_down/_DSC7708.jpg",
  },
  housekeeping: {
    title: "Housekeeping Programmes",
    description:
      "Helping households in need with essential items, training, and long-term support to restore dignity and stability.",
    image: "/images/how_it_went_down/_DSC7803.jpg",
  },
  partners: {
    title: "Partnerships",
    description:
      "Collaborating with like-minded individuals and organizations to extend our impact.",
    image: "/images/WhatsApp Image 2025-10-04 at 23.04.29.jpeg",
  },
};

// ------------------------------
// METADATA (must be async)
// ------------------------------

export async function generateMetadata({ params }) {
  const { slug } = await params; // ⬅ REQUIRED BY NEW NEXT.JS
  const data = programs[slug];

  return {
    title: data ? `${data.title} | Utamaduni Foundation` : "Program",
    description: data?.description || "Learn more about our programs.",
  };
}

// ------------------------------
// PAGE COMPONENT (must be async)
// ------------------------------

export default async function ProgramPage({ params }) {
  const { slug } = await params; // ⬅ REQUIRED BY NEW NEXT.JS
  const data = programs[slug];

  if (!data)
    return (
      <div className="p-10 text-center text-2xl font-semibold">
        Program not found.
      </div>
    );

  return (
    <section className="min-h-screen py-20 px-6 bg-amber-50 max-w-5xl mx-auto">
      {/* Banner image */}
      <div className="relative w-full h-[40vh] rounded-xl overflow-hidden shadow-lg">
        <Image
          src={data.image}
          alt={data.title}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Title */}
      <h1 className="mt-10 text-2xl text-blue-800 md:text-4xl font-bold font-serif">
        {data.title}
      </h1>

      {/* Description */}
      <p className="mt-6 md:text-lg leading-relaxed text-gray-700">
        {data.description}
      </p>

      {/* Button */}
<Link
  href={`/donate?program=${slug}`}
  className="mt-10 inline-block px-8 py-3 bg-blue-800 hover:bg-pink-800 text-white rounded-md font-semibold md:text-lg transition-all"
>
  Support This Program
</Link>
    </section>
  );
}

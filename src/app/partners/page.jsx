import Image from "next/image";

export const metadata = {
  title: "Partners | Utamaduni Foundation",
  description:
    "Join hands with us to expand our impact and support vulnerable communities.",
};

export default function PartnersPage() {
  return (
    <section className="min-h-screen bg-amber-50 py-20 px-6 max-w-5xl mx-auto">
      

      <div className="mt-10 relative w-full h-[40vh] rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/images/WhatsApp Image 2025-10-04 at 23.04.29.jpeg"
          alt="Partners"
          fill
          className="object-cover"
        />
      </div>
      <h1 className="mt-10 text-2xl text-blue-800 md:text-4xl font-bold">
        Partnerships
      </h1>

      <p className="mt-6 md:text-lg leading-relaxed text-gray-700">
        We work with organizations, individuals, and community groups to
        amplify our mission and reach more people in need. Whether through
        funding, volunteering, or collaboration, every partnership strengthens
        our impact.
      </p>

      <button className="mt-10 inline-block px-8 py-3 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 hover:bg-pink-800 text-white rounded-md font-semibold md:text-lg transition-all">
        Become a Partner
      </button>
    </section>
  );
}

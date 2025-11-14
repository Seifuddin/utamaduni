import Image from "next/image";

export const metadata = {
  title: "Partners | Utamaduni Foundation",
  description:
    "Join hands with us to expand our impact and support vulnerable communities.",
};

export default function PartnersPage() {
  return (
    <section className="min-h-screen py-20 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold font-serif">
        Partnerships
      </h1>

      <p className="mt-6 text-lg leading-relaxed text-gray-700">
        We work with organizations, individuals, and community groups to
        amplify our mission and reach more people in need. Whether through
        funding, volunteering, or collaboration, every partnership strengthens
        our impact.
      </p>

      <div className="mt-10 relative w-full h-[40vh] rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/images/WhatsApp Image 2025-10-04 at 23.04.29.jpeg"
          alt="Partners"
          fill
          className="object-cover"
        />
      </div>

      <button className="mt-10 px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-full font-semibold text-lg">
        Become a Partner
      </button>
    </section>
  );
}

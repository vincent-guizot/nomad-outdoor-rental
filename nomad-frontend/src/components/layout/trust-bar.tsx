import Image from "next/image";

const TRUST_ITEMS = [
  {
    icon: "free_shipping",
    label: "Free Shipping",
    desc: "On orders over $100",
  },
  {
    icon: "easy_returns",
    label: "Easy Returns",
    desc: "30-day return policy",
  },
  {
    icon: "support_24_7",
    label: "Support 24/7",
    desc: "We're here to help",
  },
  {
    icon: "secure_payment",
    label: "Secure Payment",
    desc: "100% secure checkout",
  },
];

/**
 * Muncul konsisten di footer/bawah tiap halaman utama sesuai mockup
 * (Home, Shop, Cart, Rent, dst). Icon dari public/icons/trust/*.png
 */
export function TrustBar() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-xl bg-nomad-50 border border-nomad-100 p-6">
      {TRUST_ITEMS.map((item) => (
        <div key={item.icon} className="flex items-center gap-3">
          <div className="relative h-8 w-8 shrink-0">
            <Image
              src={`/icons/${item.icon}.png`}
              alt={item.label}
              fill
              className="object-contain"
              sizes="32px"
            />
          </div>
          <div>
            <p className="text-sm font-medium text-nomad-900">{item.label}</p>
            <p className="text-xs text-nomad-500">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

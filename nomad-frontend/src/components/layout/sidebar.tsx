import Link from "next/link";
import {
  Home,
  ShoppingBag,
  LayoutGrid,
  Tent,
  BookOpen,
  Info,
} from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", desc: "Discover & explore", href: "/", icon: Home },
  { label: "Shop", desc: "Browse all gear", href: "/shop", icon: ShoppingBag },
  {
    label: "Categories",
    desc: "Tents, Bags, Tools & more",
    href: "/categories",
    icon: LayoutGrid,
  },
  { label: "Rent", desc: "Rent gear for your trip", href: "/rent", icon: Tent },
  { label: "Journal", desc: "Stories & guides", href: "/journal", icon: BookOpen },
  { label: "About Nomad", desc: "Our mission & values", href: "/about", icon: Info },
];

export function Sidebar() {
  return (
    <aside className="hidden md:flex w-64 flex-col bg-nomad-950 text-nomad-50 p-6">
      <div className="mb-8">
        <p className="text-xl font-display font-bold tracking-wide">NOMAD</p>
        <p className="text-xs text-nomad-400">Gear for the Journey</p>
      </div>

      <nav className="flex-1 space-y-1">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-start gap-3 rounded-lg px-3 py-2 hover:bg-nomad-900 transition-colors"
          >
            <item.icon size={18} className="mt-0.5 text-nomad-300" />
            <span>
              <span className="block text-sm font-medium">{item.label}</span>
              <span className="block text-xs text-nomad-400">{item.desc}</span>
            </span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}

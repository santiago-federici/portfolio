import { navLinks } from "../../lib/constants";

export default function DesktopNavbar() {
  return (
    <nav className="hidden md:flex">
      <ul className="flex gap-6">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              rel={link.icon && "noreferrer"}
              target={link.icon && "_blank"}
              className="hover:text-primary duration-200"
            >
              {link.text && link.text}
              {link.icon && <link.icon className="size-6" />}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

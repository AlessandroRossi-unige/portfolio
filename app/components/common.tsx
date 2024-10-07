import { Link } from "@remix-run/react";

export function NavbarComponent() {
  return (
    <nav className="sticky top-0 bg-gray-550 px-2 sm:px-4 py-6 rounded z-10">
      <div className="container flex flex-wrap justify-center  items-center gap-9 mx-auto">
        <Link className="text-xl   font-bold" to="/">
          Home
        </Link>
        <Link className="text-xl font-bold" to="/portfolio">
          Portfolio
        </Link>
        <Link className="text-xl font-bold" to="/studies">
          Studies
        </Link>
        <Link className="text-xl font-bold" to="/work-experience">
          Work
        </Link>
        <Link className="text-xl font-bold" to="/cv">
          CV
        </Link>
      </div>
    </nav>
  );
}

export function FooterComponent() {
  return <footer className="bg-gray-550 "></footer>;
}

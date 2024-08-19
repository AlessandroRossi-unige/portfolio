import { Link } from "@remix-run/react";

export function NavbarComponent() {
  return (
    <nav className="sticky top-0 bg-gray-550 px-2 sm:px-4 py-6 rounded z-10">
      <div className="container flex flex-wrap justify-center items-center gap-9 mx-auto">
        <Link
          className="text-xl font-bold"
          to="/"
        >
          Home
        </Link>
        <Link
          className="text-xl font-bold"
          to="/portfolio"
        >
          Portfolio
        </Link>
        <Link
          className="text-xl font-bold"
          to="/studies"
        >
          Studies
        </Link>
        <Link
          className="text-xl font-bold"
          to="/work-experience"
        >
          Work
        </Link>
        <Link
          className="text-xl font-bold"
          to="/cv"
        >
          CV
        </Link>
      </div>
    </nav>
  );
}

export function FooterComponent() {
  return (
    <footer className="bg-gray-550 ">
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <a
              href="#"
              className="hover:text-brightRed"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-brightRed"
            >
              Pricing
            </a>
            <a
              href="#"
              className="hover:text-brightRed"
            >
              Products
            </a>
            <a
              href="#"
              className="hover:text-brightRed"
            >
              About
            </a>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <a
              href="#"
              className="hover:text-brightRed"
            >
              Careers
            </a>
            <a
              href="#"
              className="hover:text-brightRed"
            >
              Community
            </a>
            <a
              href="#"
              className="hover:text-brightRed"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Updated in your inbox"
              />
              <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                Go
              </button>
            </div>
          </form>
          <div className="hidden text-white md:block">
            Copyright &copy; 2022, All Rights
            Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

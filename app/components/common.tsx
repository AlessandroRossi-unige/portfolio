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
  return (
    <footer className="bg-gray-550 ">
      <div className="container flex flex-col-reverse justify-between  px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div className="flex justify-around align-center w-full space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">
              alessandro0024@gmail.com
            </a>
            <a
              href="https://github.com/alesrossi"
              className="hover:text-brightRed"
            >
              Github
            </a>
            <a
              href="https://linkedin.com/in/alessandro-rossi-448294205"
              className="hover:text-brightRed"
            >
              Linkedin
            </a>
            <a
              href="https://hub.docker.com/u/alesrossi"
              className="hover:text-brightRed"
            >
              Docker Hub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

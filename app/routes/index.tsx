import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div>
      <section className="border-b border-white p-4 h-100v snap-start text-center bg-brown-350 relative">
        <div
          className="flex flex-col h-screen content-center justify-between"
          id="first"
        >
          <div></div>
          <div className="section1 flex items-center gap-24 px-60">
            <div className="flex flex-col justify-center items-center space-y-7">
              <img
                src="/avatar-placeholder.png"
                className="w-60 h-60 rounded-full mx-28"
              ></img>
              <h1 className="font-bold">
                Alessandro Rossi
              </h1>
              <h1>
                <span id="scroller"></span>{" "}
                developer
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center space-y-7 px-40">
              <h1 className="text-4xl mb-2">
                About me...
              </h1>
              <p>
                I am a <strong>fullstack</strong>{" "}
                developer with expertise in{" "}
                <strong>Angular</strong> and{" "}
                <strong>React</strong> as frontend
                frameworks and{" "}
                <strong>Rust</strong> and{" "}
                <strong>C#</strong> as backend
                languages.
              </p>
              <p>
                With the ideal of always
                delivering{" "}
                <strong>quality</strong> code, I
                have a passion for always learning{" "}
                <strong>new</strong> technologies
                and staying up-to-date with the
                latest industry trends. I have a
                strong foundation in web
                development and enjoy utilizing my
                knowledge to{" "}
                <strong>
                  solve complex problems
                </strong>{" "}
                and create{" "}
                <strong>user-friendly</strong>{" "}
                experiences. Whether working on a
                new project or contributing to an
                existing one, I strive for{" "}
                <strong>excellence</strong> and
                take pride in my work.
              </p>
            </div>
          </div>
          <ArrowComponent />
        </div>
      </section>
      <section className="border-b border-white bg-green-350 p-4 text-black h-100v snap-start relative">
        <div
          className="flex flex-col h-screen content-center justify-between"
          id="second"
        >
          <div></div>
          <div className="section1 flex flex-col justify-center items-center space-y-7 px-40">
            <h1 className="text-4xl mb-6 font-bold">
              SKINET
            </h1>
            <div className="flex gap-3 px-48">
              <div className="flex flex-col gap-2 p-4">
                <p>
                  The Skinet project is a mega
                  project involving a fake{" "}
                  <strong>ecommerce</strong>{" "}
                  website for winter sports
                  supplies, the website is
                  replicated in three sister
                  projects, each one is the{" "}
                  <strong>
                    fullstack website
                  </strong>{" "}
                  made with a{" "}
                  <strong>
                    different tech stack
                  </strong>
                  . All the projects are made with
                  the same core principals in
                  mind: <strong>speed</strong>,{" "}
                  <strong>scalability</strong> and
                  good programming practices.
                </p>
                <p>Each project consistes of:</p>
                <ul className="list-disc">
                  <li>
                    A <strong>REST API</strong>{" "}
                    that handles the business
                    logic
                  </li>
                  <li>
                    Two databases, one to handle{" "}
                    <strong>
                      persistent data{" "}
                    </strong>
                    and one to handle{" "}
                    <strong>caching</strong> in
                    memory.
                  </li>
                  <li>
                    A frontend for the application
                    that is managed by{" "}
                    <strong>SSR</strong> or a{" "}
                    <strong>SPA</strong> to ensure
                    a fast and{" "}
                    <strong>responsive</strong>{" "}
                    experience, both on pc and on
                    mobile.
                  </li>
                  <li>
                    All of the projects are{" "}
                    <strong>
                      production ready
                    </strong>{" "}
                    and they support user accounts
                    with secure{" "}
                    <strong>
                      authentication
                    </strong>{" "}
                    and <strong>payments</strong>{" "}
                    using stripe.
                  </li>
                </ul>
                <p>
                  But enough talking, let's look
                  at the <strong>examples</strong>
                  ...
                </p>
              </div>
              <img
                src="/Skinet.png"
                className="w-[40rem] h-[30rem]"
              ></img>
            </div>
          </div>
          <ArrowComponent />
        </div>
      </section>
      <section className="border-b border-white bg-brown-550 p-4 h-100v snap-start text-center relative align-middle justify-center">
        <div
          className="flex justify-center items-center h-screen px-40 gap-6"
          id="third"
        >
          <CardComponent
            title="Skinet Sharp"
            body="The oldest version of Skinet, this website was made with Angular 12 as a fronted and ASP.NET C# as a backend. To manage storage a postgresql db is managed using EF Core for storing persisting data. On top of this a Redis db is used for caching and for short term storage."
            link="portfolio/skinet-sharp"
            demo="https://skinet-sharp.alessandrorossi.tech/"
          />
          <CardComponent
            title="Skinet Rusty"
            body="Id eiusmod enim ut eiusmod enim consectetur magna non nulla est magna. Eiusmod cillum deserunt ea incididunt pariatur nulla. Et ullamco eiusmod fugiat pariatur ea velit voluptate sit et ea incididunt. Ut irure consequat aliquip nisi commodo. Non minim pariatur commodo amet aliqua eiusmod Lorem sunt. Cupidatat ipsum tempor adipisicing sit elit."
            link="#"
            demo="#"
          />
          <CardComponent
            title="Skinet Node"
            body="Deserunt tempor deserunt aute ad deserunt labore duis magna irure magna proident do minim. Pariatur laborum duis dolore in laboris consectetur est irure eu commodo Lorem aute ullamco. Ullamco elit ad pariatur aute veniam. Anim anim amet occaecat mollit deserunt esse tempor cillum anim elit ea aliqua proident culpa. Laborum incididunt duis in ipsum incididunt aute incididunt consectetur deserunt eiusmod."
            link="#"
            demo="#"
          />
        </div>
      </section>
    </div>
  );
}

export function CardComponent(values: {
  title: string;
  body: string;
  link: string;
  demo: string;
}) {
  return (
    <div className="flex flex-col justify-between p-6 h-[32rem] max-w-sm bg-gray-550  rounded-lg border border-gray-200 shadow-md hover:shadow-2xl hover:scale-105 hover:font-bold ">
      <div>
        <h5 className="mb-2 text-2xl font-bold text-center tracking-tight">
          {values.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {values.body}
        </p>
      </div>
      <div className="flex gap-4 justify-start">
        <Link
          to={values.link}
          className="inline-flex items-center py-2 px-3 text-sm font-bold text-center text-blue-150 bg-transparent rounded-lg border border-blue-150 hover:bg-blue-150 hover:text-white"
        >
          Learn more
          <svg
            aria-hidden="true"
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
        <a
          href={values.demo}
          className="inline-flex items-center py-2 px-3 text-sm font-bold text-center text-green-250 bg-transparent rounded-lg border border-green-250 hover:bg-green-250 hover:text-white"
        >
          Demo
          <svg
            aria-hidden="true"
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
}

export function ArrowComponent() {
  return (
    <div className="content-center text-center  mb-10">
      <div className="floating  bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
        <svg
          fill="#000000"
          height="70px"
          width="70px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
        >
          <g>
            <g>
              <path
                d="M390.467,305.313h-89.279V45.189C301.189,20.271,280.918,0,256,0s-45.189,20.271-45.189,45.189v260.126h-89.279
			c-19.911,0-36.109,16.198-36.109,36.109c0,9.644,3.755,18.712,10.576,25.534l134.468,134.466C237.288,508.244,246.356,512,256,512
			s18.712-3.756,25.534-10.577l134.468-134.468c6.818-6.82,10.575-15.888,10.575-25.533
			C426.577,321.512,410.378,305.313,390.467,305.313z M401.578,352.533L267.112,487c-2.969,2.967-6.914,4.602-11.111,4.602
			s-8.143-1.634-11.11-4.602L110.424,352.534c-2.967-2.969-4.602-6.915-4.602-11.111c0-8.663,7.048-15.711,15.711-15.711v-0.001
			h99.478c5.632,0,10.199-4.566,10.199-10.199V45.189c0-13.669,11.121-24.79,24.79-24.79c13.669,0,24.79,11.121,24.792,24.79
			v270.325c0,5.633,4.567,10.199,10.199,10.199h99.478c8.663,0,15.711,7.048,15.711,15.711
			C406.18,345.62,404.545,349.567,401.578,352.533z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M349.906,380.13c-3.985-3.983-10.441-3.983-14.425,0l-2.266,2.266c-3.983,3.984-3.983,10.442,0,14.425
			c1.992,1.992,4.601,2.987,7.212,2.987c2.611,0,5.22-0.995,7.213-2.987l2.266-2.266
			C353.889,390.571,353.889,384.113,349.906,380.13z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M324.526,405.345c-3.985-3.984-10.441-3.983-14.425,0l-59.666,59.666c-3.983,3.983-3.983,10.441,0,14.424
			c1.992,1.992,4.601,2.987,7.212,2.987c2.611,0,5.22-0.996,7.213-2.986l59.666-59.666
			C328.509,415.786,328.509,409.328,324.526,405.345z"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

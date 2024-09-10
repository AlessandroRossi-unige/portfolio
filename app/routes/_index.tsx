import {
  ArrowComponent,
  CardComponent,
} from "../components/home-components";

export default function Index() {
  return (
    <div>
      <section className="border-b border-white p-4 h-100v snap-start text-center bg-gray-50 relative">
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
                languages. As of the past year I
                have also delved deep into{" "}
                <strong>devops</strong> for both
                my work at Interlogica and for
                personal projects. Including this
                very website which is self hosted!
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
      <section className="border-b border-white bg-yellow-350 p-4 text-black h-100v snap-start relative">
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
                    with secure authentication and
                    payments using{" "}
                    <strong>stripe</strong>.
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
      <section className="border-b border-white bg-yellow-350 p-4 h-100v snap-start text-center relative align-middle justify-center">
        <div
          className="flex flex-col h-screen content-center justify-between"
          id="second"
        >
          <div></div>
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
              body="A new version of Skiner where I experiment with more niche techonologies. This website was made using rust and actix-web as the backend. Remix as the frontend and as usual the databases are an instance of postgresql and Redis db for caching and short term storage."
              link="#"
              demo="#"
            />
            <CardComponent
              title="Skinet Node"
              body="Still WIP, I plan to remake Skinet using Node"
              link="#"
              demo="#"
            />
          </div>

          <ArrowComponent />
        </div>
      </section>
      <section className="border-b border-white bg-yellow-350 p-4 h-100v snap-start text-center  text-black relative align-middle justify-center">
        <div
          className="flex flex-col justify-center items-center h-screen px-40 gap-6"
          id="third"
        >
          <h1 className="text-4xl mb-6 font-bold">
            Not just coding, also devops!
          </h1>
          <div className="flex gap-3 px-48">
            <div className="flex flex-col gap-2 p-4">
              <p>
                As an excercise and for a good bit
                of fun I decided to host all of
                this website and my various
                projects inside of a digitalocean
                droplet. All of my projects are
                containerised in docker
                containers, they are then deployed
                inside of the remote linux vm
                where I host them. There is a lot
                more nuance so if you want to know
                more here are the details{" "}
                <a
                  className="text-red-150 font-bold hover:text-blue-500 hover:underline"
                  href="/portfolio/infrastructure"
                >
                  here
                </a>{" "}
              </p>
            </div>
            <img
              src="/infrastructure.png"
              className="w-[40rem] h-[30rem]"
            ></img>
          </div>
        </div>
      </section>
      <section className="border-b border-white bg-yellow-350 p-4 h-100v snap-start text-center text-black relative align-middle justify-center">
        <div
          className="flex flex-col justify-center items-center h-screen px-40 gap-6"
          id="third"
        >
          <h1 className="text-4xl mb-6 font-bold">
            Do you like this site?
          </h1>
          <div className="flex gap-3 px-48">
            <div className="flex flex-col gap-2 p-4">
              <p>
                This website like all of my
                projects is completely open source
                and uploaded on my github page,
                you can find the complete source
                code{" "}
                <a
                  className="text-red-150 font-bold hover:text-blue-500 hover:underline"
                  href="/portfolio/infrastructure"
                >
                  here
                </a>{" "}
              </p>
            </div>
            <img
              src="/Skinet.png"
              className="w-[40rem] h-[30rem]"
            ></img>
          </div>
        </div>
      </section>
      <section className="border-b border-white bg-yellow-350 p-4 h-100v snap-start text-center text-black relative align-middle justify-center">
        <div
          className="flex flex-col justify-center items-center h-screen px-40 gap-6"
          id="third"
        >
          <h1 className="text-4xl mb-6 font-bold">
            Do you want to know more? Check out my github page!
          </h1>
          <div className="flex flex-col gap-3 px-48">
            <div className="flex flex-col gap-2 p-4">
              <p>
                From websites to games and even an app, you can find all my projects throught the years
                
              </p>
              <a
                  className="text-red-150 font-bold hover:text-blue-500 hover:underline"
                  href="https://github.com/alesrossi"
                >
                  HERE
                </a>{" "}
            </div>
            <a
              href="https://github.com/alesrossi"
            ><img src="/Skinet.png" className="w-[40rem] h-[30rem]"></img></a>
          </div>
        </div>
      </section>
    </div>
  );
}

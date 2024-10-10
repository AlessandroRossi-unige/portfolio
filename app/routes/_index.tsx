import { ArrowComponent, CardComponent } from "../components/home-components";

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
              <h1 className="font-bold">Alessandro Rossi</h1>
              <h1>
                <span id="scroller"></span> developer
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center space-y-7 px-40">
              <h1 className="text-4xl mb-2">About me...</h1>
              <p>
                I am a <strong>fullstack</strong> developer with a strong
                background in <strong>Rust</strong> and <strong>C# </strong> for
                backend solutions, as well as a strong background in{" "}
                <strong>Angular</strong> and <strong>React</strong> as frontend
                frameworks. In addition to building robust web applications, I
                specialize in creating efficient APIs that enable communication
                between the DBs and the application layers. Over the past year,
                I have also ventured into DevOps, applying my knowledge both at
                Interlogica and in personal projects—including this very
                website, which I host myself!
              </p>
              <p>
                My approach to development is grounded in the pursuit of
                delivering high-quality code. I tackle tasks ranging from
                solving tickets and addressing issues to continuously improving
                existing codebases and the surrounding infrastructure. I am
                passionate about learning new technologies and staying on top of
                the latest industry trends, which helps me refine my work and
                adapt to new challenges. With a strong foundation in web
                development, I enjoy leveraging my skills to solve complex
                problems and create user-friendly experiences. Whether I am
                building something new, maintaining an existing project, or
                optimizing processes, I strive for excellence and take pride in
                every aspect of my work.
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
            <h1 className="text-4xl mb-6 font-bold">SKINET</h1>
            <div className="flex gap-3 px-48">
              <div className="flex flex-col gap-2 p-4">
                <p>
                  The Skinet project is a large-scale endeavor featuring a mock
                  ecommerce website for winter sports gear. This website is
                  replicated across three sister projects, each developed with a
                  distinct tech stack to showcase versatility. Despite the
                  different stacks, all versions of the project adhere to the
                  same core principles: speed, scalability, and solid
                  programming practices.
                </p>
                <p>Each project consists of the following components:</p>
                <ul className="list-disc">
                  <li>
                    A <strong>REST API</strong> that efficiently handles
                    business logic and core operations.
                  </li>
                  <li>
                    Two databases—one for persistent data storage and another
                    for in-memory caching to boost performance.
                  </li>
                  <li>
                    A frontend application designed for a seamless user
                    experience, either through Server-Side Rendering{" "}
                    <strong>SSR</strong> or as a Single Page Application{" "}
                    <strong>SPA</strong>, ensuring a fast and responsive
                    interface on both desktop and mobile devices.
                  </li>
                  <li>
                    All projects are production-ready, equipped with secure user
                    authentication and payment processing through{" "}
                    <strong>Stripe</strong>, making them fully functional for a
                    real-world environment.
                  </li>
                </ul>
                <p>
                  But enough talk—let’s dive into the examples and see it in
                  action! ...
                </p>
              </div>
              <img src="/skinet.png" className="w-[40rem] h-[30rem]"></img>
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
              body="The original version of Skinet was built using Angular 12 for the frontend and ASP.NET with C# on the backend. For data storage, this version utilizes a PostgreSQL database, managed through Entity Framework Core to handle persistent data efficiently. Complementing this, a Redis database is employed to manage caching and short-term storage, enhancing the website's speed and performance."
              link="portfolio/skinet-sharp"
              demo="https://skinet-sharp.alessandrorossi.tech/"
            />
            <CardComponent
              title="Skinet Rusty"
              body="In this new version of Skinet, I explore some niche technologies to challenge myself. The backend is powered by Rust and Actix-web, offering high performance and reliability. On the frontend, Remix is used to deliver a modern user experience and a much better development environment. As with other versions, this setup features PostgreSQL and Redis. This combination of technologies creates a responsive and efficient application, perfect for handling complex workflows and high demand."
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
          <div className="flex  gap-3 px-48">
            <div className="flex flex-col  justify-center  gap-2 p-4">
              <p>
                As a fun exercise, I decided to host the entire website and all
                my projects on a DigitalOcean droplet. Each project is
                containerized in Docker and deployed to a remote Linux VM where
                everything is smoothly deployed. This setup not only keeps
                things organized but also allows for efficient resource
                management and easy scaling. There’s plenty of nuance involved,
                from configuring Docker containers to managing the server
                environment, so if you’re interested in the technical details,
                you can find them here.{" "}
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
          <h1 className="text-4xl mb-6 font-bold">Do you like this site?</h1>
          <div className="flex gap-3 px-48">
            <div className="flex flex-col justify-center  gap-2 p-4">
              <p>
                This website like all of my projects is completely open source
                and uploaded on my github page, you can find the complete source
                code{" "}
                <a
                  className="text-red-150 font-bold hover:text-blue-500 hover:underline"
                  href="https://github.com/alesrossi/portfolio"
                >
                  here
                </a>{" "}
              </p>
            </div>
            <img src="/portfolio.png" className="w-[50rem] h-[30rem]"></img>
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
                From websites to games and even an app, you can find all my
                projects throught the years
              </p>
              <a
                className="text-red-150 font-bold hover:text-blue-500 hover:underline"
                href="https://github.com/alesrossi"
              >
                HERE
              </a>{" "}
            </div>
            <a href="https://github.com/alesrossi">
              <img src="/github.png" className="w-[60rem] h-[30rem]"></img>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

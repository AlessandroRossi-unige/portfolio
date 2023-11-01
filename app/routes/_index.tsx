import {
  ArrowComponent,
  CardComponent,
} from "../components/home-components";

export default function Index() {
  return (
    <div>
      <section className="border-b border-white p-4 h-100v snap-start text-center bg-red-250 relative">
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
      <section className="border-b border-white bg-orange-550 p-4 h-100v snap-start text-center relative align-middle justify-center">
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

          <ArrowComponent />
        </div>
      </section>
      <section className="border-b border-white bg-orange-550 p-4 h-100v snap-start text-center relative align-middle justify-center">
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
                  className="text-blue-150 hover:text-blue-500 hover:underline"
                  href="https://skinet-sharp.alessandrorossi.tech/"
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
    </div>
  );
}

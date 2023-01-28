export default function PortfolioComponent() {
  return (
    <div>
      <section className="border-b border-white p-4 h-100v snap-start text-center relativ">
        <div className=" flex justify-center items-center h-screen gap-24 px-60 ">
          <div className="flex flex-col justify-center items-center space-y-7">
            <img
              src="/avatar-placeholder.png"
              className="w-60 h-60 rounded-full mx-28"
            ></img>
            <h1>Alessandro Rossi</h1>
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
              Amet cupidatat ipsum ipsum eiusmod
              mollit. Ut nostrud ut sint nisi et
              amet exercitation consequat qui
              proident laboris reprehend erit.
              Duis ipsum in labore amet incididunt
              laboris ipsum nulla. Veniam eu eu
              velit esse adipisicing consectetur.
            </p>
            <p>
              Amet cupidatat ipsum ipsum eiusmod
              mollit. Ut nostrud ut sint nisi et
              amet exercitation consequat qui
              proident laboris reprehenderit. Duis
              ipsum in labore amet incididunt
              laboris ipsum nulla. Veniam eu eu
              velit esse adipisicing consectetur.
            </p>
          </div>
        </div>
      </section>
      <section className="border-b border-white p-4 h-100v snap-start text-center relative">
        <div className="flex flex-col justify-center items-center space-y-7 px-40 h-screen">
          <h1 className="text-4xl mb-6 font-bold">
            SKINET
          </h1>
          <div className="flex gap-3 px-48">
            <div className="flex flex-col gap-2 p-4">
              <p>
                The Skinet project is a mega
                project involving a fake ecommerce
                website for winter sports
                supplies, the website is
                replicated in three sister
                projects, each one is the
                fullstack website made with
                different tech stack. All the
                projects are made with the same
                core principals in mind: speed,
                scalability and good programming
                practices.
              </p>
              <p>
                Each project consistes of an API
                that handles the business logic.
                To manage data each project
                consists of two databases, one to
                handle persistent data and a
                caching database in memory. The
                frontend of the application is
                managed by SSR or a SPA to ensure
                a fast and responsive experience,
                both on pc and on mobile. All of
                the projects are production ready
                and they support user accounts
                with secure authentication and
                paymets using stripe.
              </p>
              <p>
                But enough talking, let's look at
                the examples...
              </p>
            </div>
            <img
              src="/Skinet.png"
              className="w-[40rem] h-[30rem]"
            ></img>
          </div>
        </div>
      </section>
      <section className="border-b border-white p-4 h-100v snap-start text-center relative">
        <h1 className="top-2/4 text-center translate-y-2/4 text-4xl  w-full absolute">
          Section Three
        </h1>
      </section>
      <section className="border-b border-white p-4 h-100v snap-start text-center relative">
        <h1 className="top-2/4 text-center translate-y-2/4 text-4xl  w-full absolute">
          Section Four
        </h1>
      </section>
      <section className="border-b border-white p-4 h-100v snap-start text-center relative">
        <h1 className="top-2/4 text-center translate-y-2/4 text-4xl  w-full absolute">
          Section Five
        </h1>
      </section>
    </div>
  );
}

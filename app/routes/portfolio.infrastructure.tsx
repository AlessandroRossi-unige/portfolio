export default function InfrastructureComponent() {
  return (
    <div className="flex flex-col justify-center gap-2 px-80 py-6">
      <h1 className="text-center font-medium leading-tight text-5xl mt-0 mb-4">
        More than just coding
      </h1>
      <img
        src="/infrastructure.png"
        className="w-[40rem] h-[30rem] self-center"
      ></img>
      <h2 className="font-medium leading-tight text-3xl my-4">
        My work environment
      </h2>

      <p>
        When I work on my personal projects I like
        to use a Linux environment, this is not
        only better (in my opinion) but also
        convenient as I am able to replicate the
        same environment as my remote host. While
        eventually I plan to setup my own physical
        server, for the moment I deploy all my
        stuff inside a Digital ocean container. I
        use this container as a remote server
        where each project is assigned its own
        port and subdomain. Each project is run
        inside a docker container
      </p>
      <p>
        To respect the separation of concernes the
        C# solution is divided into three
        different projects: Core, Infrastructure,
        API. This way we can implement a few
        patterns, most important the Unit of work
        pattern and the repository pattern.
      </p>
      <h2 className="font-medium leading-tight text-3xl my-4">
        Docker
      </h2>
      <p>
        The frontend of the application is made
        using Angular 12 which is a solid
        framework for really large projects,
        altough it is not my preferred choice over
        React. For a much better developer
        experience I use Typescript instead of
        Javascript in all of my projects. For a
        modern look I chose to use Bootstrap 5, a
        classic choice.
      </p>
      <img
        src="/tech-stack.png"
        className="w-[40rem] h-[30rem] self-center"
      ></img>
      <p>
        The shop page is the core of the website,
        it is the main way products are displayed
        to the end users. The page and the API
        support pagination, which mean only a few
        products at a time need to be loaded,
        therefore making queries to hundred of
        products a lot faster, users can switch
        between different pages at the bottom.
        Users can filter products based on the
        name and the categories, they can also
        sort them. All of these buttons modify the
        REST API query that is sent to the
        Backend. One of the main pillars of this
        entire project is the ability to swap
        frontends and backends around, for example
        this Angular frontend is 100% compatible
        with any other Skinet backend made in Rust
        or with Node.
      </p>
      <p>
        Users can browse items and click on each
        card to either read the details or to add
        the item to their basket. This basket is
        saved for every user, even if they are not
        logged in, the basket id is saved in local
        storage. For fast fetching this basket is
        retrieved from a Redis instance. To
        process with the purchased users will be
        redirected to a reserved page and will
        have to authenticate. Authentication is
        done using JsonWebTokens which are a fast
        jet secure alternative to sessions.
      </p>
      <p>
        Payments are managed using Stripe's API.
        To test a payment in the demo app you can
        use the 4242 4242 4242 4242 card number
        alongside any expiration and CVC.
      </p>
      <h2 className="font-medium leading-tight text-3xl my-4">
        Deployment
      </h2>
      <p>
        To learn more about my production
        infrastructure check out my{" "}
        <a
          className="text-blue-150 hover:text-blue-500 hover:underline"
          href="/portfolio/infrastructure"
        >
          Infrastructure
        </a>{" "}
        page
      </p>
    </div>
  );
}

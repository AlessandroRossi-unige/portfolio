export default function Skinet() {
  return (
    <div className="flex flex-col justify-center gap-2 px-80 py-6">
      <h1 className="text-center font-medium leading-tight text-5xl mt-0 mb-4">
        SKINET SHARP
      </h1>
      <p>
        Skinet is a simple ecommerce website. You
        can try out a live demo{" "}
        <a
          className="text-blue-150 hover:text-blue-500 hover:underline"
          href="https://skinet-sharp.alessandrorossi.tech/"
        >
          here
        </a>{" "}
      </p>
      <p>
        If you just wanna skip to the source code:{" "}
        <a
          className="text-blue-150 hover:text-blue-500 hover:underline"
          href="https://github.com/alesrossi/skinet"
        >
          here
        </a>
      </p>
      <img
        src="/tech-stack.png"
        className="w-[40rem] h-[30rem] self-center"
      ></img>
      <h2 className="font-medium leading-tight text-3xl my-4">
        Backend
      </h2>

      <p>
        The backend is the core of the logic and
        data of this application, the database I
        chose for Skinet is an instance of postgres, which is my
        preferred SQL DB. To manage the DB I used an ORM, Entity Framework
        which I consider one of the best
        available.
      </p>
      <p>
        To respect the separation of concernes the
        C# solution is divided into three
        different projects: Core, Infrastructure,
        API. This way we can implement a few
        patterns, most important the Unit of work
        pattern and the repository pattern.
      </p>
      <p>
        Thanks to EF Core I am able to swap
        databases while only changing a few lines
        of code, with the Unit of work pattern I
        am able to swap away EF Core altogether
        and replace my data layer with any other
        options from files to raw SQL queries and
        even swap to a NOSQL alternative by only
        changing the Infrastructure project. The
        repository pattern means that each Entity
        can be treated like a generic, which means
        that every CRUD operation works the same.
        This way I am able to add and modify new
        entities without worrying about the
        underlyign CRUD logic. The biggest
        advantage of this pattern is the ability
        to test each component by its own without
        unexpected side effects, this is crucial
        for unit testing (WIP) as test involving
        database calls can be mocked and not rely
        on actually making database calls, which
        makes them faster and completely isolated.
      </p>
      <p>
        Persistent entities are stored in a
        postgresql DB, this is good but for some
        entities it is not ideal solution.
        Non-authenticated users should be able to
        browse a few items and save them in the
        basket for later user, this is great for
        the user experience but can be quite a
        waste of memory as this could lead to
        thousands of unauthenticated users clogging our long term storage. For this an instance of a Redis
        DB is required, Redis unlike postgres
        stores information in the RAM making it
        very responsive and able to handle thousands of daily users with ease.
      </p>
      <h2 className="font-medium leading-tight text-3xl my-4">
        Frontend
      </h2>
      <p>
        The frontend of the application is made
        using Angular 12 which is a solid
        framework for really large projects,
        altough it is not my preferred choice over
        React, it is a stable and efficent framework for production. For a much better developer
        experience I use Typescript instead of
        Javascript in all of my projects. For a
        modern look I chose to use Bootstrap 5, a
        classic choice for Angular.
      </p>
      <p>A cool thing about separating the backend from the frontend is that technically my 
        backends and frontends of my two skinet versions are interchangable, 
        for example I could run the .NET backend with the Remix version of the frontend. Using docker this is trivial</p>
      <img
        src="/tech-stack.png"
        className="w-[40rem] h-[30rem] self-center"
      ></img>
      <p>
        The shop page is the core of the website,
        it is the main way products are displayed
        to the end users. The page and the API
        support pagination, which means only a few
        products at a time need to be loaded,
        therefore making queries to hundred of
        products a lot faster, users can switch
        between different pages at the bottom.
        Users can filter products based on the
        name and the categories, they can also
        sort them. All of these buttons modify the
        REST API query that is sent to the
        Backend.
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
        and secure alternative to sessions.
      </p>
      <p>
        Payments are managed using Stripe's API.
        With Stripe we are sure that we comply with 
        EU online payments laws.
        To test a payment in the demo app you can
        use the 4242 4242 4242 4242 card number
        alongside any expiration and CVC. 
        Afterwards the order is saved and can be checked in the user "orders" tab
      </p>
      <h2 className="font-medium leading-tight text-3xl my-4">
        Deployment
      </h2>
      <p>Once the project is ready I containerise the backend and the frontend 
        into two separate Docker containers. Afterwards they are deployed to my 
        digitalocean droplet using a Docker Compose alongside the supporting DBs.</p>
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

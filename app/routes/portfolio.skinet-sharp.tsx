export default function Skinet() {
  return (
    <div className="flex flex-col justify-center gap-2 px-80 py-6">
      <h1 className="text-center font-medium leading-tight text-5xl mt-0 mb-4">
        SKINET SHARP
      </h1>
      <p>
        Skinet is a simple ecommerce website. You can try out a live demo{" "}
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
      <h2 className="font-medium leading-tight text-3xl my-4">Backend</h2>

      <p>
        The backend is at the heart of this application, driving both logic and
        data management. For Skinet, I chose PostgreSQL as the database, my
        go-to SQL option, I manage it using Entity Framework (EF) Core, one of
        the best ORMs available in my opinion.
      </p>
      <p>
        To maintain clear separation of concerns, the C# solution is divided
        into three distinct projects: Core, Infrastructure, and API. This
        structure enables the use of key design patterns, most notably the Unit
        of Work pattern and the Repository pattern.
      </p>
      <p>
        With EF Core, database swapping is straightforward, as it only requires
        a few line changes. The Unit of Work pattern even allows me to replace
        EF Core entirely and modify the data layer to accommodate various
        options—from files to raw SQL queries, or even a NoSQL
        alternative—simply by updating the Infrastructure project. The
        Repository pattern ensures that each entity is treated as a generic
        type, allowing all CRUD operations to function uniformly. This makes it
        easy to add or modify entities without having to rework the underlying
        CRUD logic. One of the biggest benefits of this pattern is the ability
        to unit test components independently, without unintended side effects.
        This is essential for unit testing (which I am actively working on), as
        database interactions can be mocked, making tests faster and fully
        isolated.
      </p>
      <p>
        For persistent entities, PostgreSQL works well, but it is not ideal for
        every use case. For example, non-authenticated users need to browse and
        save items in their basket for later, enhancing user experience but
        potentially leading to thousands of unauthenticated users occupying
        long-term storage. To address this, I use Redis, which stores data in
        RAM, making it highly responsive and capable of handling thousands of
        daily users effortlessly. Redis thus ensures that transient data is
        efficiently managed without burdening long-term storage.
      </p>
      <h2 className="font-medium leading-tight text-3xl my-4">Frontend</h2>
      <p>
        The frontend of the application is made using Angular 17 which is a
        solid framework for really large projects, altough it is not my
        preferred choice over React, it is a stable and efficent framework for
        production. For a much better developer experience I use Typescript
        instead of Javascript in all of my projects. For a modern look I chose
        to use Bootstrap 5, a classic choice for Angular.
      </p>
      <p>
        A cool thing about separating the backend from the frontend is that
        technically my backends and frontends of my two skinet versions are
        interchangable, for example I could run the .NET backend with the Remix
        version of the frontend. Using docker this is trivial.
      </p>
      <img
        src="/tech-stack.png"
        className="w-[40rem] h-[30rem] self-center"
      ></img>
      <p>
        The shop page is the core feature of the website, serving as the primary
        interface for users to browse products. With built-in pagination, only a
        subset of products loads at a time, making queries on hundreds of
        products much faster and enhancing the user experience. Users can
        navigate between pages, filter products by name or category, and sort
        them—all via options that adjust the REST API queries sent to the
        backend.
      </p>
      <p>
        Users can click on product cards to view details or add items to their
        basket. The basket saves automatically, even for users who are not
        logged in, as the basket ID is stored in local storage. For quick
        access, the basket data is fetched from a Redis instance, allowing
        non-authenticated users to seamlessly continue browsing and adding
        items. To proceed with a purchase, users will be redirected to a
        dedicated page and will need to authenticate. Authentication is handled
        through JSON Web Tokens (JWT), which provide a fast and secure
        alternative to traditional sessions.
      </p>
      <p>
        Payments are processed through Stripe’s API, ensuring compliance with EU
        online payment regulations. To test payments in the demo app, users can
        utilize the test card number 4242 4242 4242 4242, along with any
        expiration date and CVC code. Once a payment is made, the order is saved
        and accessible in the users “Orders” tab, allowing for easy order
        tracking and management.
      </p>
      <h2 className="font-medium leading-tight text-3xl my-4">Deployment</h2>
      <p>
        Once the project is ready I containerise the backend and the frontend
        into two separate Docker containers. Afterwards they are deployed to my
        digitalocean droplet using a Docker Compose file alongside the
        supporting DBs.
      </p>
      <p>
        To learn more about my production infrastructure check out my{" "}
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

import { Link } from "@remix-run/react";

export default function Skinet() {
  return (
    <div className="flex flex-col justify-center gap-2 px-52 py-6">
      <h1 className="text-center font-medium leading-tight text-5xl mt-0 mb-4">
        SKINET SHARP
      </h1>
      <p>
        Skinet is a simple ecommerce website. You
        can try out a live demo{" "}
        <Link className="text-red" to={"#"}>
          here
        </Link>
      </p>
      <h2 className="font-medium leading-tight text-3xl my-4">
        Technology stack
      </h2>
      <img
        src="/tech-stack.png"
        className="w-[40rem] h-[30rem]"
      ></img>
      <p>
        The backend is the core of the logic and
        data of this application, the database I
        chose for Skinet is postgres, which is my
        preferred SQL DB. To manage the DB the
        .NET framework provides Entity Framework
        which I consider one of the best ORM
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
        eentities without worrying about the
        underlyign CRUD logic. The biggest
        advantege of this pattern is the ability
        to test each component by its own without
        unexpected side effects, this is crucial
        for unit testing (WIP) as test involving
        database calls can be mocked and not rely
        on actually making database calls, which
        makes them faster and self sustaining.
      </p>
    </div>
  );
}

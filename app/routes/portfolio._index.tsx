export default function PortfolioComponent() {
  return (
    <section className="flex gap-6 px-80 py-6">
      <CardComponent
        title="Skinet Sharp"
        link="/portfolio/skinet-sharp"
        introduction="The oldest version of Skinet, this website was made with Angular 12 as a fronted and ASP.NET C# as a backend. To manage storage a postgresql db is managed using EF Core for storing persisting data. On top of this a Redis db is used for caching and for short term storage."
        tags="C#, .NET, Angular, Postgres"
      />
      <CardComponent
        title="Skinet Rusty"
        link="#"
        introduction="A new version of Skinet where I experiment with more niche techonologies. This website was made using rust and actix-web as the backend. Remix as the frontend and as usual the databases are an instance of postgresql and Redis db for caching and short term storage."
        tags="Rust, React, Remix, Postgres"
      />
      <CardComponent
        title="Infrastructure"
        link="/portfolio/infrastructure"
        introduction="All of my projects including this very wbsite are hosted in a remote linux machine. To easily mantain and upgrade them, all of my projects are conteinarised into docker containers and composed when necessary. I aim to eventually automize this process "
        tags="Docker, Docker Compose, Linux"
      />
    </section>
  );
}

export function CardComponent(values: {
  title: string;
  link: string;
  introduction: string;
  tags: string;
}) {
  return (
    <a
      href={values.link}
      className="relative block overflow-hidden  rounded-lg border border-gray-100 p-8  w-2/6  hover:shadow-2xl hover:scale-105 hover:font-bold"
    >
      <div className="flex-1 flex-col justify-between">
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-red-600 via-orange-400 to-yellow-300"></span>

        <div className="sm:flex">
          <div>
            <h3 className="text-xl font-bold text-white">
              {values.title}
            </h3>
          </div>
        </div>

        <div className="mt-4 sm:pr-8">
          <p className="flex-1 text-sm text-gray-500">
            {values.introduction}
          </p>
        </div>

        <dl className="mt-6 flex">
          <div className="flex flex-col-reverse">
            <dt className="text-sm font-medium text-white">
              {values.tags}
            </dt>
            <dd className="text-xs text-gray-500">
              TAGS:
            </dd>
          </div>
        </dl>
      </div>
    </a>
  );
}

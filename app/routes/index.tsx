import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="flex flex-col gap-40">
      <div className="flex justify-center items-center h-screen gap-24 px-60">
        <div className="flex flex-col justify-center items-center space-y-7">
          <img
            src="avatar-placeholder.png"
            className="w-60 h-60 rounded-full mx-28"
          ></img>
          <h1>Alessandro Rossi</h1>
          <h1>
            <span id="scroller"></span> developer
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
            proident laboris reprehend erit. Duis
            ipsum in labore amet incididunt
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
      <div className="flex flex-col justify-center items-center space-y-7 px-40">
        <h1 className="text-4xl mb-2">
          My main project
        </h1>
        <p className="p-4">
          The Skinet project is a project
          involving a fake ecommerce website for
          winter sports supplies, the website
          consist of three sister projects, each
          one is the fullstack website made with
          different tech stacks. All the projects
          are made with speed, scalability and
          good programming practices in mind
        </p>
        <div className="flex gap-6">
          <CardComponent
            title="Skinet Sharp"
            body="Enim eiusmod pariatur et id consectetur consequat laborum quis voluptate est duis sit. Aliquip sit est mollit commodo id quis laboris eiusmod incididunt eiusmod laborum commodo fugiat exercitation. Proident enim sit irure elit irure do."
          />
          <CardComponent
            title="Skinet Rusty"
            body="Id eiusmod enim ut eiusmod enim consectetur magna non nulla est magna. Eiusmod cillum deserunt ea incididunt pariatur nulla. Et ullamco eiusmod fugiat pariatur ea velit voluptate sit et ea incididunt. Ut irure consequat aliquip nisi commodo. Non minim pariatur commodo amet aliqua eiusmod Lorem sunt. Cupidatat ipsum tempor adipisicing sit elit."
          />
          <CardComponent
            title="Skinet Node"
            body="Deserunt tempor deserunt aute ad deserunt labore duis magna irure magna proident do minim. Pariatur laborum duis dolore in laboris consectetur est irure eu commodo Lorem aute ullamco. Ullamco elit ad pariatur aute veniam. Anim anim amet occaecat mollit deserunt esse tempor cillum anim elit ea aliqua proident culpa. Laborum incididunt duis in ipsum incididunt aute incididunt consectetur deserunt eiusmod."
          />
        </div>
      </div>
    </div>
  );
}

export function CardComponent(values: {
  title: string;
  body: string;
}) {
  return (
    <div className="p-6 max-w-sm bg-gray rounded-lg border border-gray-200 shadow-md">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        {values.title}
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {values.body}
      </p>
      <div className="flex gap-4 justify-start">
        <Link
          to="#"
          className="inline-flex items-center py-2 px-3 text-sm font-bold text-center text-light_blue bg-transparent rounded-lg border border-light_blue hover:bg-light_blue hover:text-white"
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
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Link>
        <Link
          to="#"
          className="inline-flex items-center py-2 px-3 text-sm font-bold text-center text-lime bg-transparent rounded-lg border border-lime hover:bg-lime hover:text-white"
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
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}

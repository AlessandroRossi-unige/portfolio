export default function WorkComponent() {
  return (
    <div className="mx-80 my-5 border-2 border-white">
      <div className="flex flex-col p-10 px-18 gap-3">
        <h1 className="text-center font-bold text-4xl pb-6">Interlogica</h1>
        <h2 className="text-center text-xl pb-6 text-gray-500 -mt-5">
          (03/2022 - Present)
        </h2>
        <p>
          After working for a few months at Deloitte and after finishing my
          university studies I decided to swap my focus away from Salesforce. In
          my last year of University I got interested in the{" "}
          <strong> C# </strong> and the <strong>.NET</strong> world.
        </p>
        <p>
          In this project we are working directly with ALD, a car rental
          company. Me and the rest of our team are in charge of{" "}
          <strong>mantaining</strong> the <strong>ALD API</strong>'s and
          services. We mantai old API's made in BizTalk and work on making the
          new generation of API's using <strong>ASP.NET</strong> for{" "}
          <strong>.Net Core 3.1</strong>. Alongside the business logic we also
          worked on mantaining the multiple Databases of our client, these were{" "}
          <strong>Oracle</strong> and <strong>Sql</strong> instances.
        </p>
        <p>
          We follow the classic Agile work pipeline, where <strong>Jira</strong>{" "}
          tickets are sent by our client and estimated, they are then organised
          thought the sprint so we can work on resolving bugs, implementing
          features and improving our existing codebase.
        </p>
        <p>
          In 2024 our client ALD updated their internal secutiry policy and told
          us to create a new Azure Api Manager to manager to connect to the
          outside world securely.
        </p>
        <img src="/work.png" className="w-[40rem] h-[20rem] self-center"></img>
        <h1 className="text-center  text-4xl pb-6">Deloitte</h1>
        <h2 className="text-center text-xl pb-6 text-gray-500 -mt-5">
          (07/2021 - 03/2022)
        </h2>
        <p>
          I started my programmer journey as a{" "}
          <strong>fullstack Salesforce </strong> Developer working for Deloitte
          Italia.
        </p>
        <p>
          At Deloitte I started working on the TIM Sparkle Project while also
          learning and preparing for my Salesforce certifications. I mostly
          worked on the <strong>backend</strong> features of the project, using{" "}
          <strong>Apex</strong> (a javalike language), I implement new features,
          worked with the database, talked with the customers and{" "}
          <strong>tested</strong> the <strong>new features</strong> to be
          implemented. I also did <strong>frontend</strong> work on the
          salesforce frontend framework.
        </p>
        <p>
          In this project I worked with a medium size team (around 25 people)
          where I experienced both <strong>Waterfall</strong> development and{" "}
          <strong>Agile</strong> development. Me and a collegue created the
          administrative section of our customer portal, where the admins
          create, edit and manage new users and their permission, to set these
          permission we connected to an <strong>external API</strong> service
          called C-IAM. While in Deloitte I worked on my University{" "}
          <strong>Thesis</strong>, my thesis was based around studying every
          form of <strong>Software Testing</strong> and seeing what we could
          apply to our Salesforce project. We ended up improving our{" "}
          <strong>unit tests</strong> and I implemented the first{" "}
          <strong>performance tests</strong> of our project.
        </p>
        <p>For more information on my work at Deloitte please contact me.</p>
      </div>
    </div>
  );
}

export default function WorkComponent() {
  return (
    <div className="mx-80 my-5 border-2 border-white">
      <div className="flex flex-col p-10 px-18 gap-3">
        <h1 className="text-center font-bold text-4xl pb-6">Interlogica</h1>
        <h2 className="text-center text-xl pb-6 text-gray-500 -mt-5">
          (03/2022 - Present)
        </h2>
        <p>
          After spending a few months at Deloitte and completing my university
          studies, I decided to shift my focus away from Salesforce development.
          During my final year of university, I became increasingly interested
          in the C# and .NET ecosystems.
        </p>
        <p>
          In my current role, I am working directly with ALD, now Ayvens, a
          prominent car rental company. My team and I are responsible for
          maintaining the Ayvens API and its associated services. We manage
          legacy APIs built using BizTalk while also developing the next
          generation of APIs with ASP.NET for .NET Core 3.1. Alongside
          implementing business logic, we also oversee the maintenance of
          multiple databases for our client, specifically Oracle and SQL
          instances.
        </p>
        <p>
          We adhere to a classic Agile workflow, where Jira tickets are
          submitted by our client, estimated, and organized throughout the
          sprint. This approach allows us to efficiently resolve bugs, implement
          new features, and enhance our existing codebase. In 2024, Ayvens
          updated their internal security policy and tasked us with creating a
          new Azure API Manager. This will facilitate secure connections to the
          outside world, ensuring that our services comply with the latest
          security standards.
        </p>
        <img src="/work.png" className="w-[40rem] h-[20rem] self-center"></img>
        <h1 className="text-center  text-4xl pb-6">Deloitte</h1>
        <h2 className="text-center text-xl pb-6 text-gray-500 -mt-5">
          (07/2021 - 03/2022)
        </h2>
        <p>
          I began my programming journey as a fullstack Salesforce Developer at
          Deloitte Italia. My initial role involved working on the TIM Sparkle
          Project, while simultaneously studying for my Salesforce
          certifications. I primarily focused on backend development, utilizing
          Apex (a Java-like language) to implement new features, manage database
          interactions, communicate with clients, and test new functionalities.
          I also gained hands-on experience with the Salesforce frontend
          framework (a React-like framework), contributing to the UI aspects of
          the project.
        </p>
        <p>
          In this project, I collaborated with a medium-sized team of around 25
          members, working in both Waterfall and Agile development environments.
          Together with a colleague, I developed the administrative section of
          the customer portal, which allowed admins to create, edit, and manage
          users and their permissions. To facilitate permission management, we
          integrated with an external API service called C-IAM.
        </p>
        <p>
          While at Deloitte, I also worked on my university thesis, which
          involved a comprehensive study of various software testing
          methodologies to determine their applicability to our Salesforce
          project. This led to improvements in our unit testing approach, and I
          implemented the first performance tests for the project, enhancing its
          overall reliability and performance.
        </p>
        <p>For more information on my work at Deloitte please contact me.</p>
      </div>
    </div>
  );
}

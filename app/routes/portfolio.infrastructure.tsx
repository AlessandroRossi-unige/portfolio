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
        to use Linux, this is not
        only better (in my opinion) but also
        convenient as I am able to replicate the
        same environment as my remote host. While
        eventually I plan to setup my own physical
        server, for the moment I deploy all my
        stuff inside of a Digital ocean container. I
        use this container as a remote server
        where each project is assigned its own
        port and subdomain. Each project is run
        inside a docker container or a docker compose subnet.
      </p>
      
    </div>
  );
}

import {
  ArrowComponent,
  CardComponent,
} from "../components/home-components";

export default function Index() {
  return (
    <div>
      <section className="border-b border-white p-4 h-100v snap-start text-center bg-red-250 relative">
        <div
          className="flex flex-col h-screen content-center justify-between"
          id="first"
        >
          <div></div>
          <div className="section1 flex items-center gap-24 px-60">
            <div className="flex flex-col justify-center items-center space-y-7">
              <img
                src="/avatar-placeholder.png"
                className="w-60 h-60 rounded-full mx-28"
              ></img>
              <h1 className="font-bold">
                Alessandro Rossi
              </h1>
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
                I am a <strong>fullstack</strong>{" "}
                developer with expertise in{" "}
                <strong>Angular</strong> and{" "}
                <strong>React</strong> as frontend
                frameworks and{" "}
                <strong>Rust</strong> and{" "}
                <strong>C#</strong> as backend
                languages.
              </p>
              <p>
                With the ideal of always
                delivering{" "}
                <strong>quality</strong> code, I
                have a passion for always learning{" "}
                <strong>new</strong> technologies
                and staying up-to-date with the
                latest industry trends. I have a
                strong foundation in web
                development and enjoy utilizing my
                knowledge to{" "}
                <strong>
                  solve complex problems
                </strong>{" "}
                and create{" "}
                <strong>user-friendly</strong>{" "}
                experiences. Whether working on a
                new project or contributing to an
                existing one, I strive for{" "}
                <strong>excellence</strong> and
                take pride in my work.
              </p>
            </div>
          </div>
          <ArrowComponent />
        </div>
      </section>
    </div>
  );
}

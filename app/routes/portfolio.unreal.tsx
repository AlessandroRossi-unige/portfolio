export default function Unreal() {
  return (
    <div className="flex flex-col justify-center gap-2 px-80 py-6">
      <h1 className="text-center font-medium leading-tight text-5xl mt-0 mb-4">
        Stealth Project
      </h1>
      <p>
        Stealth project is a simple stealth and survival game made in Unreal
        Engine in c++, the main objective of the game is for the player to hide
        from enemies and find the end crystal, randomly generated in the map.
        The sentinels will spawn in a random location in the map and will
        continue roaming around randomly looking for the player, if the player
        is spotted they will start chasing him down until they catch him.
      </p>
      <a
        className="text-center text-blue-150 hover:text-blue-500 hover:underline"
        href="https://www.youtube.com/watch?v=-r65SdJ5CGc"
      >
        Video of gameplay
      </a>{" "}
      <img
        src="/decision-tree.jpg"
        className="w-[40rem] h-[30rem] self-center"
      ></img>
      <p>
        The sentinels use an automatically generated grid and a simple
        randomized algorithm to determine their next location, this way a unique
        path is guaranteed each time the game is played.
      </p>
      <a
        className="text-center text-blue-150 hover:text-blue-500 hover:underline"
        href="https://youtu.be/mta_IsQJqTU"
      >
        Video of AI enemies roaming
      </a>{" "}
      <img src="/roaming.jpg" className="w-[40rem] h-[30rem] self-center"></img>
      <p>
        The grid is created by a special actor that generates waypoints and
        stores them in a custom struct so that they can be easily accessed later
        on. For debug or testing purposes the grid can be tested in the editor,
        all the initial variables of the grid can be easily modified.
      </p>
      <a
        className="text-center text-blue-150 hover:text-blue-500 hover:underline"
        href="https://www.youtube.com/watch?v=1dvUwZs9xVE"
      >
        Video of this grid tool
      </a>{" "}
      <img src="/grid.jpg" className="w-[40rem] h-[30rem] self-center"></img>
      <a
        className="text-center text-blue-150 hover:text-blue-500 hover:underline"
        href="https://github.com/alesrossi/StealthProject"
      >
        Checkout the source code
      </a>{" "}
    </div>
  );
}

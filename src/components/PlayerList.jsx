import Player from "./Player";

export default function PlayerList(props) {
  // player card styling here...

  return (
    <>
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="max-w-md rounded overflow-hidden shadow-lg">
          <ul className="m-auto">
            {props.players.map((player) => (
              <Player
                key={player.id}
                name={player.name}
                surname={player.surname}
                age={player.age}
                weight={player.weight}
                rank={player.rank}
              ></Player>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

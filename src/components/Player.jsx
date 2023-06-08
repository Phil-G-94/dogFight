export default function Player(props) {
  return (
    <li
      key={props.id}
      className="border-solid border-x-2 border-y-2 border-amber-600"
    >
      <h2 className="text-black">
        {" Name: "}
        {/* player name and surname */}
        {props.name} {props.surname}
      </h2>
      <p className="text-black">
        {" Age: "}
        {props.age} years old
      </p>
      <p className="text-black">
        {"Weight: "}
        {props.weight}
      </p>
      <p className="text-black">
        {"Rank: "}
        {props.rank}
      </p>
    </li>
  );
}

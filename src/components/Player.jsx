export default function Player(props) {
    console.log(props);

    return (
        <li
            key={props.key}
            className="text-black"
        >
            <h2 className="text-black">
                {" "}
                {/* player name and surname */}
                {props.name} {props.surname}
            </h2>
            <p className="text-black">
                {/* age */}
                {props.age}
            </p>
            <p className="text-black">
                {/* weight */}
                {props.weight}
            </p>
            <p className="text-black">
                {/* rank */}
                {props.rank}
            </p>
        </li>
    );
}

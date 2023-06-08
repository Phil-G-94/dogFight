import { useCallback, useEffect, useState } from "react";
import PlayerList from "./PlayerList";

export default function Players() {
    const [players, setPlayers] = useState([]);

    const [error, setError] = useState(null);

    const [isLoading, setIsLoading] = useState(false);

    const fetchPlayersHandler = useCallback(async () => {
        setIsLoading(true);

        try {
            const response = await fetch(
                "https://monkey-island-3736c-default-rtdb.europe-west1.firebasedatabase.app/players.json"
            );

            if (!response.ok) {
                throw new Error("Something went wrong.");
            }

            const data = await response.json();

            const loadedPlayers = [];

            for (const key in data) {
                loadedPlayers.push({
                    id: key,
                    name: data[key].name,
                    surname: data[key].surname,
                    age: data[key].age,
                    weight: data[key].weight,
                    rank: data[key].rank,
                });
            }

            // console.log(loadedPlayers);

            setPlayers(loadedPlayers);
        } catch (error) {
            setError(error.message);
        }

        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchPlayersHandler();
    }, [fetchPlayersHandler]);

    let content = (
        <p className="text-red-900">Found no players. Fetch players.</p>
    );

    if (players.length > 0) {
        content = <PlayerList players={players}></PlayerList>;
    }

    if (error) {
        content = <p className="text-red-900">{error}</p>;
    }

    if (isLoading) {
        content = <p className="text-indigo-900">Loading...</p>;
    }

    return (
        <>
            <div className="flex flex-col items-center">
                <section>
                    <button
                        className="rounded-full bg-red-900 text-white p-6 mt-5 hover:bg-red-400"
                        onClick={fetchPlayersHandler}
                    >
                        Fetch players
                    </button>
                </section>
                <section>{content}</section>
            </div>
        </>
    );
}

import Players from "./components/Players";
import SignupForm from "./components/SignupForm";

function App() {
    return (
        <>
            <div className="flex flex-col items-center">
                <h1 className="text-3xl text-red-800">
                    Welcome to Monkey Island!
                </h1>

                <img
                    className="h-48 w-full object-cover sm:h-28 md:h-full md:w-48"
                    src="./src/assets/Northern-Monkey-BJJ-Logo-1.jpg"
                ></img>
            </div>
            <SignupForm />

            <Players></Players>
        </>
    );
}

export default App;

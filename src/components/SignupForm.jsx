import useFormValidation from "../hooks/useFormValidation";

export default function SignupForm() {
    const nameRegex = new RegExp(/^([A-Za-z]{2,3})/, "g");

    const surnameRegex = new RegExp(/^([A-Za-z]{2})/, "g");

    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: enteredNameHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput,
    } = useFormValidation((value) => nameRegex.test(value) && value !== "");

    const {
        value: enteredSurname,
        isValid: enteredSurnameIsValid,
        hasError: enteredSurnameHasError,
        valueChangeHandler: surnameChangeHandler,
        inputBlurHandler: surnameBlurHandler,
        reset: resetSurnameInput,
    } = useFormValidation((value) => surnameRegex.test(value) && value !== "");

    const {
        value: enteredAge,
        isValid: enteredAgeIsValid,
        hasError: enteredAgeHasError,
        valueChangeHandler: ageChangeHandler,
        inputBlurHandler: ageBlurHandler,
        reset: resetAgeInput,
    } = useFormValidation((value) => value >= 4);

    const {
        value: enteredWeight,
        isValid: enteredWeightIsValid,
        hasError: enteredWeightHasError,
        valueChangeHandler: weightChangeHandler,
        inputBlurHandler: weightBlurHandler,
        reset: resetWeightInput,
    } = useFormValidation((value) => value >= 20);

    const {
        value: enteredRank,
        isValid: enteredRankIsValid,
        hasError: enteredRankHasError,
        valueChangeHandler: rankChangeHandler,
        inputBlurHandler: rankBlurHandler,
        reset: resetRank,
    } = useFormValidation(
        (value) => value === "White" || value === "Blue" || value === "Purple +"
    );

    /* FORM VALIDATION */

    let formIsValid = false;

    if (
        enteredNameIsValid &&
        enteredSurnameIsValid &&
        enteredAgeIsValid &&
        enteredWeightIsValid &&
        enteredRankIsValid
    ) {
        formIsValid = true;
    }

    const formSubmitHandler = async (event) => {
        event.preventDefault();

        const form = event.target;

        const formData = new FormData(form);

        const formJson = Object.fromEntries(formData.entries());

        try {
            const response = await fetch(
                "https://monkey-island-3736c-default-rtdb.europe-west1.firebasedatabase.app/players.json",
                {
                    method: "POST",
                    body: JSON.stringify(formJson),
                    headers: {
                        "Content-type": "application/json",
                    },
                }
            );
            if (!response.ok) {
                throw new Error("Something went wrong.");
            }
        } catch (error) {
            alert(error);
        }

        if (
            !enteredNameIsValid &&
            !enteredSurnameIsValid &&
            !enteredAgeIsValid &&
            !enteredWeightIsValid &&
            !enteredRankIsValid
        ) {
            return;
        }

        resetNameInput();
        resetSurnameInput();
        resetAgeInput();
        resetWeightInput();
        resetRank();
    };

    return (
        <div className="grid place-content-center antialiased text-gray-900 px-6">
            <div className="max-w-xl mx-auto py-12 divide-y md:max-w-4xl">
                <div className="py-12">
                    <h2 className="text-2xl font-bold text-red-900">
                        Sign up here
                    </h2>
                    <div className="mt-8 max-w-wd">
                        <div className="grid grid-cols-1 gap-6">
                            <form
                                method="post"
                                onSubmit={formSubmitHandler}
                            >
                                <label
                                    htmlFor="name"
                                    className="block"
                                >
                                    <span className="text-gray-700">Name</span>
                                    <input
                                        name="name"
                                        value={enteredName}
                                        onChange={nameChangeHandler}
                                        onBlur={nameBlurHandler}
                                        id="name"
                                        type="text"
                                        className="mt-1
                    block
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-red-200 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                                    />
                                    {enteredNameHasError && (
                                        <p className="text-red-900">
                                            Please check your name input.
                                        </p>
                                    )}
                                </label>
                                <label
                                    htmlFor="surname"
                                    className="block"
                                >
                                    <span className="text-gray-700">
                                        Surname
                                    </span>
                                    <input
                                        name="surname"
                                        value={enteredSurname}
                                        onChange={surnameChangeHandler}
                                        onBlur={surnameBlurHandler}
                                        id="surname"
                                        type="text"
                                        className="mt-1
                    block
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-red-200 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                                    />
                                    {enteredSurnameHasError && (
                                        <p className="text-red-900">
                                            Please check your surname input.
                                        </p>
                                    )}
                                </label>
                                <label
                                    htmlFor="age"
                                    className="block"
                                >
                                    <span className="text-gray-700">
                                        Age (Years old)
                                    </span>
                                    <input
                                        name="age"
                                        value={enteredAge}
                                        onChange={ageChangeHandler}
                                        onBlur={ageBlurHandler}
                                        id="age"
                                        type="number"
                                        className="mt-1
                    block
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-red-200 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                                    />
                                    {enteredAgeHasError && (
                                        <p className="text-red-900">
                                            Please check your age input.
                                        </p>
                                    )}
                                </label>
                                <label
                                    htmlFor="weight"
                                    className="block"
                                >
                                    <span className="text-gray-700">
                                        Weight (kg)
                                    </span>
                                    <input
                                        name="weight"
                                        value={enteredWeight}
                                        onChange={weightChangeHandler}
                                        onBlur={weightBlurHandler}
                                        id="weight"
                                        type="number"
                                        className="mt-1
                    block
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-red-200 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                                    />
                                    {enteredWeightHasError && (
                                        <p className="text-red-900">
                                            Please check your weight input.
                                        </p>
                                    )}
                                </label>

                                <label
                                    htmlFor="rank"
                                    className="block"
                                >
                                    <span className="text-gray-700">Rank</span>
                                    <select
                                        value={enteredRank}
                                        onChange={rankChangeHandler}
                                        onBlur={rankBlurHandler}
                                        name="rank"
                                        // defaultValue="White"
                                        id="rank"
                                        className="mt-1
                    block
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-red-200 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                                    >
                                        <option>White</option>
                                        <option>Blue</option>
                                        <option>Purple +</option>
                                    </select>
                                    {enteredRankHasError && (
                                        <p className="text-red-900">
                                            Please check your rank input.
                                        </p>
                                    )}
                                </label>

                                <button
                                    disabled={!formIsValid}
                                    type="submit"
                                    className="rounded-full bg-red-900 text-white p-6 mt-5 hover:bg-red-400"
                                >
                                    Sign up
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import React from "react";
import "./index.scss";

const questions = [
    {
        title: "React is...?",
        options: ["library", "framework", "application"],
        correct: 0,
    },
    {
        title: "The component is... ",
        options: [
            "application",
            "part of an application or page",
            "what I don't know what is",
        ],
        correct: 1,
    },
    {
        title: "What is JSX?",
        options: [
            "this is just HTML",
            "this is a function",
            "this is the same HTML, but with the ability to execute JS code",
        ],
        correct: 2,
    },
];

function Result({ correct }) {
    return (
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
            <h2>
                You guessed {correct} answers out of {questions.length}
            </h2>
            <a href="/">
                <button>try again</button>
            </a>
        </div>
    );
}

function Game({ step, question, onClickOptions }) {
    const percentage = Math.round((step / questions.length) * 100);

    return (
        <>
            <div className="progress">
                <div
                    style={{ width: `${percentage}%` }}
                    className="progress__inner"
                ></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {question.options.map((text, index) => (
                    <li onClick={() => onClickOptions(index)} key={text}>
                        {text}
                    </li>
                ))}
            </ul>
        </>
    );
}

function App() {
    const [step, setStep] = React.useState(0);
    const [correct, setCorrect] = React.useState(0);
    const question = questions[step];

    const onClickOptions = (index) => {
        console.log(step, index);
        setStep(step + 1);

        if (index === question.correct) {
            setCorrect(correct + 1);
        }
    };

    return (
        <div className="App">
            {step !== questions.length ? (
                <Game
                    step={step}
                    question={question}
                    onClickOptions={onClickOptions}
                />
            ) : (
                <Result correct={correct} />
            )}
        </div>
    );
}

export default App;

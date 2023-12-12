import { Fragment } from "react";

function FinishScreen({ points, maxPossiblePoints, highScore, dispatch }) {
    const percentage = (points / maxPossiblePoints) * 100;

    let emoji;
    if (percentage === 100) emoji = "🥇";
    if (percentage >= 80 && percentage < 100) emoji = "🎉";
    if (percentage >= 50 && percentage < 80) emoji = "🙃";
    if (percentage >= 0 && percentage < 50) emoji = "🤨";
    if (percentage === 0) emoji = "🤦‍♂️";

    return (
        <Fragment>
            <p className="result">
                <span>{emoji}</span> You scordered <strong>{points}</strong> out
                of {maxPossiblePoints} ({Math.ceil(percentage)}%)
            </p>
            <p className="highscore">
                {" "}
                HighScore: {highScore} / {maxPossiblePoints}
            </p>
            <button
                className="btn btn-ui"
                onClick={() => dispatch({ type: "restart" })}
            >
                Restart quiz
            </button>
        </Fragment>
    );
}

export default FinishScreen;

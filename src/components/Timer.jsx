import React from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import { FaPause, FaPlay, FaHistory } from "react-icons/fa";
import { IconContext } from "react-icons";

momentDurationFormatSetup(moment);

const Timer = ({
	handleControll,
	handleReset,
	timeLeft,
	timerLabel,
	playAudio,
}) => {

	const formatedTime = moment
		.duration(timeLeft, "seconds")
		.format("mm:ss", { trim: false });

	return (
		<div className="timer">
			<h2 id="timer-label">{timerLabel}</h2>
			<p id="time-left">{formatedTime}</p>
			<IconContext.Provider value={{}}>
				<div className="controllContainer">
					<button
						type="button"
						id="start_stop"
						className="react-icons"
						onClick={() => {
							handleControll(), playAudio();
						}}
					>
						<FaPlay />
						<FaPause />
					</button>
					<button
						type="button"
						id="reset"
						className="react-icons"
						onClick={() => {
							handleReset(), playAudio();
						}}
					>
						<FaHistory />
					</button>
				</div>
			</IconContext.Provider>
		</div>
	);
};

export default Timer;

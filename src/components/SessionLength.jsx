import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

momentDurationFormatSetup(moment);


const SessionLength = ({
	sessionLength,
	playAudio,
	decrementSessionTime,
	incrementSessionTime,
}) => {

	const sessionLengthMinutes = moment
	.duration(sessionLength, "s").asMinutes();
	// .minutes();

	return (
		<div>
			<h2 id="session-label">Session Length</h2>

			<div className="btns">
				<button
					type="button"
					id="session-decrement"
					className="react-icons"
					onClick={() => {
						decrementSessionTime(), playAudio();
					}}
				>
					<FaChevronDown />
				</button>
				<span id="session-length">{sessionLengthMinutes}</span>
				<button
					type="button"
					id="session-increment"
					className="react-icons"
					onClick={() => {
						incrementSessionTime(), playAudio();
					}}
				>
					<FaChevronUp />
				</button>
			</div>
		</div>
	);
};

export default SessionLength;

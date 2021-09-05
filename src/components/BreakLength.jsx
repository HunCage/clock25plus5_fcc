import React from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

momentDurationFormatSetup(moment);


const BreakLength = ({
	breakTime,
	playAudio,
	decrementBreakTime,
	incrementBreakTime,
}) => {

	const breakLengthMinutes = moment.duration(breakTime, "s").asMinutes();
	// minutes();

	return (
		<div>
			<h2 id="break-label">Break Length</h2>
			<div className="btns">
				<button
					type="button"
					id="break-decrement"
					className="react-icons"
					onClick={() => {
						decrementBreakTime(), playAudio();
					}}
				>
					<FaChevronDown />
				</button>
				<span id="break-length">{breakLengthMinutes}</span>
				<button
					type="button"
					id="break-increment"
					className="react-icons"
					onClick={() => {
						incrementBreakTime(), playAudio();
					}}
				>
					<FaChevronUp />
				</button>
			</div>
		</div>
	);
};

export default BreakLength;

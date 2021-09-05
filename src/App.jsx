import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import Timer from "./components/Timer";
import BreakLength from "./components/BreakLength";
import SessionLength from "./components/SessionLength";

function App() {
	const [currentSessionType, setCurrentSessionType] = useState("Session");
	const [intervalId, setIntervalId] = useState(null);
	const [sessionLength, setSessionLength] = useState(60 * 25);
	const [breakTime, setBreakTime] = useState(300);
	const [timeLeft, setTimeLeft] = useState(sessionLength);
	const audioElement = useRef(null);
	const [playClick, setPlayClick] = useState(new Audio("./src/click.mp3"));

	useEffect(() => {
		setTimeLeft(sessionLength);
	}, [sessionLength]);

	useEffect(() => {
		if (timeLeft === 0) {
			audioElement.current.currentTime = 0;
			audioElement.current.play();
			if (currentSessionType === "Session") {
				setCurrentSessionType("Break");
				setTimeLeft(breakTime);
			} else if (currentSessionType === "Break") {
				setCurrentSessionType("Session");
				setTimeLeft(sessionLength);
			}
		}
	}, [breakTime, currentSessionType, sessionLength, timeLeft]);

	const playAudio = () => {
		playClick.currentTime = 0;
		playClick.play();
	};

	const decrementBreakTime = () => {
		const newBreakTime = breakTime - 60;
		if (newBreakTime > 0) {
			setBreakTime(newBreakTime);
		}
	};
	const incrementBreakTime = () => {
		const newBreakTime = breakTime + 60;
		if (newBreakTime <= 60 * 60) {
			setBreakTime(breakTime + 60);
		}
	};

	const decrementSessionTime = () => {
		const newSessionLength = sessionLength - 60;
		if (newSessionLength > 0) {
			setSessionLength(newSessionLength);
		}
	};
	const incrementSessionTime = () => {
		const newSessionLength = sessionLength + 60;
		if (newSessionLength <= 60 * 60) {
			setSessionLength(sessionLength + 60);
		}
	};

	const isStarted = intervalId !== null;
	const handleControll = () => {
		if (isStarted) {
			clearInterval(intervalId);
			setIntervalId(null);
		} else {
			const newIntervalId = setInterval(() => {
				setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
			}, 1000);
			setIntervalId(newIntervalId);
		}
	};

	const handleReset = () => {
		audioElement.current.currentTime = 0;
		audioElement.current.pause();
		clearInterval(intervalId);
		setIntervalId(null);
		setCurrentSessionType("Session");
		setSessionLength(25 * 60);
		setBreakTime(5 * 60);
		setTimeLeft(60 * 25);
	};

	return (
		<div className="App">
			<Header />
			<div className="container">
				<BreakLength
					breakTime={breakTime}
					decrementBreakTime={decrementBreakTime}
					incrementBreakTime={incrementBreakTime}
					playAudio={playAudio}
				/>
				<SessionLength
					sessionLength={sessionLength}
					decrementSessionTime={decrementSessionTime}
					incrementSessionTime={incrementSessionTime}
					playAudio={playAudio}
				/>
			</div>
			<div className="timerContainer">
				<Timer
					timerLabel={currentSessionType}
					handleControll={handleControll}
					timeLeft={timeLeft}
					handleReset={handleReset}
					playAudio={playAudio}
				/>
				<audio id="beep" ref={audioElement}>
					<source src="./src/alarm.mp3" type="audio/mpeg" />
				</audio>
			</div>
		</div>
	);
}

export default App;

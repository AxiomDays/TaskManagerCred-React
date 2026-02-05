import { useEffect, useState } from "react";
import "./TaskAbout.css";

function TaskAbout() {
	return (
		<>
			<span className="task-about col-12">
				A side project made as extra react.js practice and a way to learn how to
				utilize local storage. All data is stored clientside. You can create
				tasks, assign levels of difficulty and gain coins to purchase different
				backgrounds. The only thing I didn't end up implementing was a deadline
				system. You can view more of my projects at{" "}
				<a href="https://github.com/AxiomDays">my github</a> or visit my
				personal vanity website at{" "}
				<a href="https://ravennest.neocities.org/">Raven's Nest</a>.<br></br>
				<br></br>
				Know that if you're reading this, I love you. Yes, YOU reading this.
			</span>
		</>
	);
}

export default TaskAbout;

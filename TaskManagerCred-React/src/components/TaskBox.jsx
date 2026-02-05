import { useState } from "react";
import "./TaskBox.css";
import Task from "./Task";
import TaskBoxList from "./TaskBoxList";

function TaskBox({ title = "TITLE", content}) {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="container">
				<div className="task-box row bebas">
					<h1 className="col-12 barlow">{title}</h1>
					{content}
				</div>
			</div>
		</>
	);
}

export default TaskBox;

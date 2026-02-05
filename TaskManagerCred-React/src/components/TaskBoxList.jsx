import { useEffect, useState } from "react";
import "./TaskBoxList.css";
import Task from "./Task";
import { getItem } from "./utils/localStorage";

function TaskBoxList({list=[]}) {
	const [taskList, setTaskList] = useState([]);

	return (
		<>
			<ul className="task-box-list col-12 col-lg-11 pb-2">{list}</ul>
		</>
	);
}

export default TaskBoxList;

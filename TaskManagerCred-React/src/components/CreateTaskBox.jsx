import { useState } from "react";
import "./CreateTaskBox.css";
import Task from "./Task";
import { getItem, setItem } from "./utils/localStorage";

function CreateTaskBox({ title = "TITLE", tasklist }) {
	const [count, setCount] = useState(0);
	const [taskName, settaskName] = useState("");
	const [taskDesc, settaskDescription] = useState("");
	const [difficulty, setDifficulty] = useState("");

	function taskPush() {
		let tasks = getItem("tasklist");
		console.log("tasks is: ", tasks);
		if (tasks) {
			if (tasks != [] && tasks != undefined && tasks.length >= 1) {
				console.log("tasks went thru");

				let form = {
					id: largestValueInArr(tasks) + 1,
					name: taskName,
					description: taskDesc,
					difficulty: difficulty != "" ? difficulty : "Normal",
					done: false,
				};

				console.log("tasks: ", tasks);
				console.log("form", form);
				tasks.push(form);
				setItem("tasklist", tasks);
				tasklist(tasks);
			}
		} else {
			let form = {
				id: 0,
				name: taskName,
				description: taskDesc,
				difficulty: difficulty != "" ? difficulty : "Normal",
				done: false,
			};

			console.log(form);
			let list = [form];
			setItem("tasklist", list);
			tasklist(list);
		}
	}

	const largestValueInArr = (arr) => {
		return Math.max(...arr.map((item) => item.id));
	};

	return (
		<>
			<div className="task-form row">
				<form
					className="main-form row"
					onSubmit={(e) => {
						setDifficulty(document.getElementById("select-form").value);
						e.preventDefault();
						console.log(document.getElementById("select-form").value);

						taskPush(e);
					}}
				>
					<div class="mb-3 col-12">
						<input
							type="text"
							class="form-control"
							id="taskName"
							onChange={(e) => settaskName(e.target.value)}
							value={taskName}
							placeholder="Task Name"
							required
						></input>
					</div>
					<div class="mb-3 col-12">
						<textarea
							rows="3"
							class="form-control"
							id="taskDesc"
							onChange={(e) => settaskDescription(e.target.value)}
							value={taskDesc}
						></textarea>
					</div>
					<div class="mb-3 col-8">
						<select
							id="select-form"
							class="form-select"
							onChange={(e) => setDifficulty(e.target.value)}
						>
							<option value="">Difficulty</option>
							<option value="Easy">Easy</option>
							<option value="Normal">Normal</option>
							<option value="Hard">Hard</option>
						</select>
					</div>
					<div className="btn-btn col-4">
						<button class="btn btn-light w-100" type="submit">
							<img
								src="src/assets/add_task_24dp_534948_FILL0_wght400_GRAD0_opsz24.svg"
								alt=""
								srcset=""
							/>
						</button>
					</div>
				</form>
			</div>
		</>
	);
}

export default CreateTaskBox;

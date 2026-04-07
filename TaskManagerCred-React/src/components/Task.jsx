import { useState } from "react";
import "./Task.css";
import { useEffect } from "react";

function Task({
	id = 0,
	title = "temporary task",
	desc = "",
	done = false,
	descFunction,
	delFunction,
	compFunction,
	difficulty = "Hard",
	hidden = true,
}) {
	const [doneState, setDoneState] = useState(done);
	

	function changeDesc() {
		console.log("change desc func enetered");
		descFunction(desc);
	}

	function deleteFunction() {
		delFunction(id);
	}

	function crossOut() {
		if (doneState) {
			console.log("tdone is ", done);
			setDoneState(false);
		} else {
			console.log("fdone is ", done);
			setDoneState(true);
		}
		
		compFunction(id);
	}

	useEffect(() => {
		console.log("donestate is ", doneState);
		if (document.getElementById(id) != null) {
			console.log("check this! useeffect in this task has been triggered");

			if (doneState){
				done = true;
			}

			if (hidden) {
				if (document.getElementById(id).classList.contains("done")) {
					document.getElementById(id).classList.add("done-but-show");
					console.log("added done but show");
				}
			} else {
				if (document.getElementById(id).classList.contains("done-but-show")) {
					document.getElementById(id).classList.remove("done-but-show");
					console.log("removed done but show");
				}
			}
		}
	}, [hidden, doneState]);

	return (
		<>
			<div className="container">
				<div className={doneState ? "task row done" : "task row"} id={id} title={desc}>
					{doneState ? (
						<input
							className="form-check-input col-1 task-check-box"
							type="checkbox"
							id="box"
							value=""
							onClick={crossOut}
							checked
						/>
					) : (
						<input
							className="form-check-input col-1 task-check-box"
							type="checkbox"
							id="box"
							value=""
							onClick={crossOut}
						/>
					)}
					<label
						className="form-check-label col-10 col-sm-11 "
						for="flexCheckDefault"
					>
						<span className="task-title col-8">{title}</span>
						<img
							src="/assets/cancel_24dp_534948_FILL0_wght400_GRAD0_opsz24.svg"
							className="del-btn col-1 del-btn"
							onClick={deleteFunction}
						></img>
						<img
							src="/assets/description_24dp_5985E1_FILL0_wght400_GRAD0_opsz24.svg"
							className="del-btn col-1 del-btn d-block d-lg-none"
							onClick={changeDesc}
							data-bs-toggle="modal"
							data-bs-target="#exampleModal"
						/>
						<img
							src="/assets/description_24dp_5985E1_FILL0_wght400_GRAD0_opsz24.svg"
							className="del-btn col-1 del-btn d-none d-lg-block"
							onClick={changeDesc}
						/>
						<span className="task-difficult col-3">{difficulty}</span>
					</label>
				</div>
			</div>
		</>
	);
}

export default Task;

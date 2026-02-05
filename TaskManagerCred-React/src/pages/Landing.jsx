import { useState, useEffect } from "react";
import "./Landing.css";
import TaskBox from "../components/TaskBox";
import Task from "../components/Task";
import Sider from "../components/Sider";
import TaskBoxList from "../components/TaskBoxList";
import CreateTaskBox from "../components/CreateTaskBox";
import StatusBubble from "../components/StatusBubble";
import { getItem, setItem } from "../components/utils/localStorage";
import TaskDesc from "../components/TaskDesc";
import TaskAbout from "../components/TaskAbout";
import TaskStore from "../components/TaskStore";
import FooterMobile from "../components/FooterMobile";
// find out how to push and pull to json
// add create task (X)
// get loca; storage fucntions from librar (X)
// add hide completed tasks button (X)
// permanently save completed tasks (X)
// delete task (no need for real time, just delete and hide w/ css then it changes on next refresh)(X)
// make id correlate with array position (bypassed)
// add expansion for description (X)
// use a separate name for state/store bonus local storage(X)
// change checkbox design(X)
// add about tab(X)
// figure out shop bonuses(X)
// rename local Storage Key
// save shop bonuses with cookies---NOOOOO
//fONTS
//

function Landing() {
	const [taskList, setTaskList] = useState(getItem("tasklist"));
	const [currList, setCurrList] = useState([]);
	const [hide, setHide] = useState(false);
	const [showDesc, setShowDesc] = useState("");
	const [createTask, setCreateTask] = useState(false);
	const [about, setAbout] = useState(false);
	const [home, setHome] = useState(false);
	const [store, setStore] = useState(false);
	const [bubbleAnimTrigger, setbubbleAnimTrigger] = useState(true);
	const [coins, setCoins] = useState(
		getItem("taskListDetailsCoinCount")
			? getItem("taskListDetailsCoinCount")
			: 0,
	);
	const [multiplier, setMulti] = useState(0);
	var multi = 0;

	function handleCreateTask() {
		setCreateTask(true);
		showHome();
	}

	const showStore = () => {
		setStore(true);
		setHome(false);
		setAbout(false);
		console.log("check ultra check");
	};

	const showHome = () => {
		setHome(true);
		setAbout(false);
		setStore(false);
	};

	const showAbout = () => {
		setAbout(true);
		setHome(false);
		setStore(false);
	};

	const handleTaskUpdate = () => {
		setTaskList(getItem("tasklist"));
	};

	function deleteTask(id) {
		let list = getItem("tasklist");
		console.log(list);
		console.log("id: ", id);
		let delIndex = list.findIndex((tem) => tem.id === id);
		console.log(delIndex);
		let delArr = list.splice(delIndex, 1);
		console.log(delIndex, " : ", delArr);
		setItem("tasklist", list);
		handleTaskUpdate();
		// location.reload();
		console.log("deleted...", list);
	}

	function completeTask(id) {
		let list = getItem("tasklist");
		console.log(list);
		console.log("id: ", id);
		let compIndex = list.findIndex((tem) => tem.id === id);
		console.log(list[compIndex]);
		console.log(list[compIndex].done);
		list[compIndex].done = !list[compIndex].done;
		console.log(list[compIndex].done);
		setItem("tasklist", list);
		if (list[compIndex].done == true) {
			determineCoins(list[compIndex].difficulty);
		}
	}

	function handleDescription(newDesc) {
		setCreateTask(false);
		setShowDesc(newDesc);
	}

	function hideAndShow() {
		if (hide) {
			setHide(false);
		} else {
			setHide(true);
		}
	}

	function determineCoins(mul) {
		console.log("mul is- ", mul);
		switch (mul) {
			case "Easy":
				multi = 1;
				break;
			case "Normal":
				multi = 2;
				break;
			case "Hard":
				multi = 3;
				break;
			default:
				multi = 2;
				break;
		}
		let coincount = getItem("taskListDetailsCoinCount");
		console.log("coin is: ", coincount);
		console.log("multi is: ", multi);
		if (coincount) {
			if (coincount != [] && coincount != undefined) {
				setCoins(coins + multi);
				setMulti(multi);
				console.log("inner count is -", coincount, "coins is -", coins);
			}
		} else {
			setItem("taskListDetailsCoinCount", 0);
			setCoins(coins + multi);
			setMulti(multi);
		}
		setbubbleAnimTrigger(!bubbleAnimTrigger);
	}

	function handleCoinSpend(value) {
		let coincount = getItem("taskListDetailsCoinCount");
		console.log("coin is: ", coincount);
		if (coincount) {
			if (value <= coincount) {
				setCoins(coins - value);
				setMulti(0 - value);
				return true
			} else {
				alert("Insufficient Coins. This style costs " + value + "00 coins.");
				return false
			}
			
		} else {
			setItem("taskListDetailsCoinCount", 0);
			if (value <= coincount) {
				setCoins(coins - value);
				setMulti(0 - value);
				return true
			} else {
				alert("Insufficient Coins. This style costs " + value + "00 coins.");
				return false
			}
		}
	}

	useEffect(() => {
		const list = [];
		console.log("landing useeefeect triggered");
		if (taskList != undefined) {
			taskList.forEach((task) => {
				list.push(
					<Task
						id={task.id}
						title={task.name}
						desc={task.description}
						done={task.done}
						descFunction={handleDescription}
						delFunction={deleteTask}
						compFunction={completeTask}
						difficulty={task.difficulty}
						hidden={hide}
					/>,
				);
			});
		}
		setCurrList(list);
		setItem("taskListDetailsCoinCount", coins);
	}, [taskList, hide, coins]);

	return (
		<>
			<div className="container-fluid p-0">
				<div className="row body-row">
					<div className="col d-none d-lg-flex">
						<Sider
							hideFunction={hideAndShow}
							createTaskFunction={handleCreateTask}
							showAboutFunction={showAbout}
							showHomeFunction={showHome}
							showStoreFunction={showStore}
						/>
					</div>
					<div className="col-lg-6 col-12 col p-0">
						<span className="d-flex d-lg-none">
							<StatusBubble
								coins={coins}
								gain={multiplier}
								bubbleAnimTrigger={bubbleAnimTrigger}
							/>
						</span>
						<TaskBox
							title={store ? "STORE" : about ? "ABOUT" : "REMINDERS"}
							content={
								store ? (
									<TaskStore setCoins={handleCoinSpend} />
								) : about ? (
									<TaskAbout />
								) : (
									<TaskBoxList list={currList} hide={hide} />
								)
							}
						/>
					</div>
					<div className="col-lg-4 d-none d-lg-block">
						<span>
							<StatusBubble
								coins={coins}
								gain={multiplier}
								bubbleAnimTrigger={bubbleAnimTrigger}
							/>
						</span>
						<TaskBox
							title={!createTask ? "Description" : "Add Tasks"}
							content={
								!createTask ? (
									<TaskDesc desc={showDesc} />
								) : (
									<CreateTaskBox tasklist={handleTaskUpdate} />
								)
							}
						/>
					</div>
					<div className="col-6 footer d-lg-none justify-content-center">
						<FooterMobile
							hideFunction={hideAndShow}
							createTaskFunction={handleCreateTask}
							showAboutFunction={showAbout}
							showHomeFunction={showHome}
							showStoreFunction={showStore}
						/>
					</div>
					<div class="modal fade" id="exampleModal" tabindex="-1">
						<div class="modal-dialog">
							<div class="modal-content">
								<div class="modal-header">
									<button
										type="button"
										class="btn-close"
										data-bs-dismiss="modal"
										aria-label="Close"
									></button>
								</div>
								<div class="modal-body">
									<TaskBox
										title={!createTask ? "Description" : "Add Tasks"}
										content={
											!createTask ? (
												<TaskDesc desc={showDesc} />
											) : (
												<CreateTaskBox tasklist={handleTaskUpdate} />
											)
										}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Landing;

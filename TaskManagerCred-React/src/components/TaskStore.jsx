import { useEffect, useState } from "react";
import "./TaskStore.css";
import TaskStoreCard from "./TaskStoreCard";
import Task from "./Task";
import { getItem } from "./utils/localStorage";

//create purchased list in localstorage

function TaskStore({ list = [], setCoins }) {
	return (
		<>
			<div className="task-store-list row">
				<div className="row">
					<div className="cardbox col-12 col-lg-4 col-md-4">
						<TaskStoreCard
							id={1}
							title="Red Cherry"
							desc="A tasteful red tinge that brings the page alive."
							setCoins={setCoins}
							price={2}
							style="ch-red"
						/>
					</div>
					<div className="cardbox col-12 col-lg-4 col-md-4">
						<TaskStoreCard
							id={2}
							title="Starter Green"
							desc="The idealistic shimmer of a new conviction"
							purchased={true}
							setCoins={setCoins}
							price={1}
							style="st-green"
						/>
					</div>
					<div className="cardbox col-12 col-lg-4 col-md-4">
						<TaskStoreCard
							id={3}
							title="Obelisk Blue"
							desc="A sign of order, nobility and superiority"
							setCoins={setCoins}
							price={3}
							style="ob-blue"
						/>
					</div>
					<div className="cardbox col-12 col-lg-4 col-md-4">
						<TaskStoreCard
							id={4}
							title="Honey Nest"
							desc="Does the Bee know that it makes honey for you? Or does it work tirelessly thinking it was its own choice"
							setCoins={setCoins}
							price={6}
							style="hn-nest"
						/>
					</div>
					<div className="cardbox col-12 col-lg-4 col-md-4">
						<TaskStoreCard
							id={5}
							title="Starry Sky"
							desc="Can you feel it? The heart's true nature?"
							setCoins={setCoins}
							price={1}
							style="stry-sky"
						/>
					</div>
					<div className="cardbox col-12 col-lg-4 col-md-4">
						<TaskStoreCard
							id={6}
							title="Poseidon's Wave"
							desc="The eternal tug of war, born of the sea and moon"
							setCoins={setCoins}
							price={8}
							style="psd-wave"
						/>
					</div>
					<div className="cardbox col-12 col-lg-4 col-md-4 ">
						<TaskStoreCard
							id={7}
							title="Native Arrange"
							desc="Ihe okenye no n'ani wee fu, nwatakili rigorogodu elu nnukwu osisi a gaghi afu ya"
							setCoins={setCoins}
							price={10}
							style="ntv-arrange"
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default TaskStore;

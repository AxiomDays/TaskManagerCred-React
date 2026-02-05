import { useEffect, useState } from "react";

import "./TaskStoreCard.css";
import { getItem, setItem } from "./utils/localStorage";

function TaskStoreCard({
	id,
	title = "test",
	desc = "a fun fresh new take on an old style!",
	price = 5,
	style = "",
	purchased = false,
	setCoins,
}) {
	const [taskList, setTaskList] = useState([]);
	let currentTheme = getItem("taskListDetailsBackground");
	let purchasedThemeList = getItem("taskListDetailsPurchasedList");

	const storeEquip = () => {
		setItem("taskListDetailsBackground", style);
		window.location.reload();
	};

	const storePurchase = () => {
		if (hasPurchased() == false) {
			if (setCoins(price)) {
				updatePurchased();
				setItem("taskListDetailsBackground", style);
				window.location.reload();
			}
		} else {
			if (currentTheme == style) {
				alert("You are already using this style");
			} else {
				storeEquip();
			}
		}
	};

	const hasPurchased = () => {
		if (purchasedThemeList) {
			console.log("ts has been purchased");
			return purchasedThemeList.includes(id);
		} else if (purchasedThemeList == undefined) {
			let temparr = [];
			setItem("taskListDetailsPurchasedList", temparr);
			return false;
		}
	};

	const updatePurchased = () => {
		if (purchasedThemeList) {
			console.log("purchased list is real");
			purchasedThemeList.push(id);
			setItem("taskListDetailsPurchasedList", purchasedThemeList);
		} else {
			console.log("purchased list does not exist");
			let temparr = [];
			temparr.push(id);
			setItem("taskListDetailsPurchasedList", temparr);
		}
	};

	if (hasPurchased() == true) {
		purchased = true;
	}

	return (
		<>
			<div className="task-store-card row" onClick={storePurchase}>
				<div className={style + " itemImg col-12"} alt=""></div>
				{purchased ? (
					<span className="purchased-msg col-12">PURCHASED</span>
				) : (
					<span></span>
				)}
				<div className="itemTitle col-12">{title}</div>
				<div className="itemDesc col-12">{desc}</div>
			</div>
		</>
	);
}

export default TaskStoreCard;

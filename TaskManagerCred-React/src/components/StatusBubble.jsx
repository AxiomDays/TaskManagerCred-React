import { useEffect, useState } from "react";
import { calculateDate } from "./utils/Time";
import "./StatusBubble.css";

function StatusBubble({ coins = 0, gain = 1, bubbleAnimTrigger }) {
	const [date, setDate] = useState(calculateDate());

	useEffect(() => {
		coinPlusAnimFunc();
		console.log("animation useEFFect has procced.");
	}, [bubbleAnimTrigger]);

	function coinPlusAnimFunc() {
		let box = document.getElementsByClassName("popup");
		if ((gain /= 0)) {
			for (let item of box) {
				item.classList.remove("popanim");
				void item.offsetWidth;
				item.classList.add("popanim");
			}
		}
	}

	return (
		<>
			<div className="container">
				<div className="bubble row bebas">
					<span className="col bubble-date">{date}</span>
					<span className="col-2 popup">
						{gain > 0 ? "+" : ""}
						{gain * 100}
					</span>
					<span className="col-4 bubble-coins">
						{coins * 100}
						<img
							className="bubble-icon"
							src="/assets/toll_24dp_534948_FILL0_wght400_GRAD0_opsz24.svg"
						></img>
					</span>
				</div>
			</div>
		</>
	);
}

export default StatusBubble;

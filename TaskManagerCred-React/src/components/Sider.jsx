import { useState } from "react";
import "./Sider.css";
import { useEffect } from "react";

function Sider({
	hideFunction,
	createTaskFunction,
	showAboutFunction,
	showHomeFunction,
	showStoreFunction,
}) {
	const [showState, changeShow] = useState(false);

	const handleShow = () => {
		changeShow(!showState);
	};

	const onclickFuncPack = () => {
		hideFunction();
		handleShow();
	};

	return (
		<>
			<div className="side-header col-1 d-none d-lg-block">
				<ul className="side-header-list">
					<li onClick={showHomeFunction}>
						<span>
							<img
								src="/home_24dp_534948_FILL0_wght400_GRAD0_opsz24.svg"
								alt=""
								srcset=""
							/>
						</span>
					</li>
					<li onClick={showAboutFunction}>
						<span>
							<img
								src="/info_24dp_534948_FILL0_wght400_GRAD0_opsz24.svg"
								alt=""
								srcset=""
							/>
						</span>
					</li>
					<li onClick={showStoreFunction}>
						<span>
							<img
								src="/store_24dp_534948_FILL0_wght400_GRAD0_opsz24.svg"
								alt=""
								srcset=""
							/>
						</span>
					</li>
					<li className="d-none d-lg-flex" onClick={createTaskFunction}>
						<span>
							<img
								src="/add_24dp_534948_FILL0_wght400_GRAD0_opsz24.svg"
								alt=""
								srcset=""
							/>
						</span>
					</li>
					{/* className="d-lg-none" */}

					<li onClick={onclickFuncPack} id="lastItem">
						<span>
							{!showState ? (
								<img
									src="/visibility_off_24dp_534948_FILL0_wght400_GRAD0_opsz24.svg"
									alt=""
									srcset=""
								/>
							) : (
								<img
									src="/visibility_24dp_534948_FILL0_wght400_GRAD0_opsz24.svg"
									alt=""
									srcset=""
								/>
							)}
						</span>
					</li>
				</ul>
			</div>

		</>
	);
}

export default Sider;

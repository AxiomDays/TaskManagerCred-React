import { useState } from "react";
import "./FooterMobile.css";
import { useEffect } from "react";

function FooterMobile({
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
			<div className="bottom-header">
				<ul className="bottom-header-list">
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
					<li
						data-bs-toggle="modal"
						data-bs-target="#exampleModal"
						onClick={createTaskFunction}
					>
						<span>
							<img
								src="/add_24dp_534948_FILL0_wght400_GRAD0_opsz24.svg"
								alt=""
								srcset=""
							/>
						</span>
					</li>

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

export default FooterMobile;

import { useEffect, useState } from "react";
import "./TaskDesc.css";

function TaskDesc({desc}) {
    return (
        <>
            <span className="task-desc col-12">{desc ? desc : "No Description"}</span>
        </>
    );
}

export default TaskDesc;

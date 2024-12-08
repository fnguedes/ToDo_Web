import { Check, Trash } from "@phosphor-icons/react";

import style from "./task.module.css";

import type { TaskProps } from "../App";

interface Props {
	task: TaskProps;
	key: number;
	handleCheckTask: (task: TaskProps) => void;
	handleDeleteTask: (task: TaskProps) => void;
}

export function Task({ task, handleCheckTask, handleDeleteTask }: Props) {
	return (
		<div className={style.container}>
			<button
				type="button"
				className={task.completed ? style.checkButton : style.uncheckButton}
				onClick={() => handleCheckTask(task)}
			>
				{task.completed ? <Check size={20} /> : null}
			</button>
			<div className={style.text}>
				<p>{task.text}</p>
			</div>
			<button
				type="button"
				className={style.trashButton}
				onClick={() => handleDeleteTask(task)}
			>
				<Trash size={25} />
			</button>
		</div>
	);
}

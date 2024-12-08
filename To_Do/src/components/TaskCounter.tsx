import { useEffect, useState } from "react";
import type { TaskProps } from "../App";

import style from "./taskCounter.module.css";

interface Props {
	tasks: TaskProps[]; // Array de tarefas criadas pelo usuário.
}

export function TaskCounter({ tasks }: Props) {
	const [checked, setChecked] = useState(0);
	const [unchecked, setUnchecked] = useState(0);

	useEffect(() => {
		setUnchecked(tasks.filter((task) => task.completed).length);
		setChecked(tasks.filter((task) => !task.completed).length);
	});

	return (
		<div className={style.container}>
			<div className={style.subcontainer}>
				<p className={style.task}>Tarefas criadas: </p>
				<div className={style.resultsContainer}>
					<p>{checked}</p>
				</div>
			</div>

			<div className={style.subcontainer}>
				<p className={style.checks}>Concluídas: </p>
				<div className={style.resultsContainer}>
					<p>
						{unchecked} de {tasks.length}
					</p>
				</div>
			</div>
		</div>
	);
}

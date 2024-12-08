import { PlusCircle } from "@phosphor-icons/react";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { TaskProps } from "../App";

import style from "./create.module.css";

interface Props {
	tasks: TaskProps[];
	create: (task: TaskProps[]) => void;
}

export function Create({ tasks, create }: Props) {
	const [task, setTask] = useState("");

	function handleTask(event: ChangeEvent<HTMLTextAreaElement>) {
		event.target.setCustomValidity("");
		setTask(event.target.value);
	}

	function handleCreateTask(event: FormEvent) {
		event.preventDefault();
		const newTask = {
			id: tasks.length + 1,
			text: task,
			completed: false,
		};
		const newListTasks = [...tasks, newTask];
		create(newListTasks);
		setTask("");
	}

	return (
		<form className={style.form} onSubmit={handleCreateTask}>
			<textarea
				placeholder="Adicione uma nova tarefa"
				onChange={handleTask}
				value={task}
			/>
			<button type="submit">
				<p>Criar</p> <PlusCircle size={25} />
			</button>
		</form>
	);
}

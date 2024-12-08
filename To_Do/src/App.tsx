import { useState } from "react";
import { ClipboardText } from "@phosphor-icons/react";

import style from "./App.module.css";

import { Create } from "./components/Create";
import { Header } from "./components/Header";
import { Task } from "./components/Task";
import { TaskCounter } from "./components/TaskCounter";

export interface TaskProps {
	id: number;
	text: string;
	completed: boolean;
}

function App() {
	const [tasks, setTasks] = useState<TaskProps[]>([
		{
			id: 1,
			text: "Estudar React",
			completed: true,
		},
	]);

	function handleCheckTask(task: TaskProps) {
		const newListTasks = tasks.map((item) =>
			task.id === item.id ? { ...task, completed: !task.completed } : item,
		);

		setTasks(newListTasks);
	}

	function handleDeleteTask(task: TaskProps) {
		const newListTasks = tasks.filter((item) => item.id !== task.id);
		setTasks(newListTasks);
	}

	return (
		<div>
			<Header />
			<div className={style.body}>
				<Create tasks={tasks} create={setTasks} />
				<TaskCounter tasks={tasks} />
				{tasks.length > 0 ? (
					tasks.map((task) => (
						<Task
							key={task.id}
							task={task}
							handleCheckTask={handleCheckTask}
							handleDeleteTask={handleDeleteTask}
						/>
					))
				) : (
					<div className={style.noTasks}>
						<ClipboardText size={60} />
						<p className={style.title}>
							Você ainda não tem tarefas cadastradas
						</p>
						<p className={style.subtitle}>
							Crie tarefas e organize seus itens a fazer
						</p>
					</div>
				)}
			</div>
		</div>
	);
}

export default App;

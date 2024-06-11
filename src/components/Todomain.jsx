import React, { useEffect, useRef, useState } from "react";
import TodoItem from "./TodoItem";

function Todomain() {
	const [todoTask, setTasks] = useState([]);
	const inputRef = useRef(null);

	const submit = (e) => {
		e.preventDefault();
		const task = inputRef.current.value;
		inputRef.current.value = "";
		if (!task) {
			alert("Please enter a task!!!");
		} else {
			const newTask = {
				todoWork: task,
				completed: false,
			};
			setTasks((prevTasks) => {
				const updatedTasks = [...prevTasks, newTask];
				localStorage.setItem("todoTask", JSON.stringify(updatedTasks));
				return updatedTasks;
			});
		}
	};

	useEffect(() => {
		const storedTasks = JSON.parse(localStorage.getItem("todoTask"));
		if (storedTasks) {
			setTasks(storedTasks);
		}
	}, []);

	const deleteTask = (todoWork) => {
		setTasks((prevTasks) => {
			const updatedTasks = prevTasks.filter((task) => task.todoWork !== todoWork);
			localStorage.setItem("todoTask", JSON.stringify(updatedTasks));
			return updatedTasks;
		});
	};

	const toggleTaskCompletion = (todoWork) => {
		setTasks((prevTasks) => {
			const updatedTasks = prevTasks.map((task) =>
				task.todoWork === todoWork ? { ...task, completed: !task.completed } : task
			);
			localStorage.setItem("todoTask", JSON.stringify(updatedTasks));
			return updatedTasks;
		});
	};

	return (
		<div className="w-[full] min-h-dvh md:w-[720px] lg:w-[960px]  lg:min-h-[640px] bg-[#074173] mx-auto md:mt-16 md:rounded-lg pt-6 md:p-10 overflow-auto">
			<h2 className="font-bold text-center text-[48px] lg:text-[64px]">Todo List</h2>
			<form
				className="border-2 dark:border-white m-8 flex rounded-lg"
				onSubmit={(e) => submit(e)}
			>
				<input
					type="text"
					ref={inputRef}
					className="bg-transparent h-full w-full text-xl md:text-2xl outline-none p-2 md:p-4 "
					placeholder="Add Your Task..."
				/>
				<button
					className="font-bold text-xl md:text-xl lg:text-2xl py-1 px-2 md:py-4 md:px-6 bg-[#7469B6] rounded-r-md outline-none"
					type="submit"
				>
					Add
				</button>
			</form>
			<div className="display_todo">
				{todoTask.length === 0 ? (
					<div className="w-[80%] md:w-[90%] mx-auto text-lg md:text-2xl">You have finished all your tasks! 🛩️</div>
				) : (
					todoTask.map((item, index) => (
						<TodoItem
							key={index}
							task={item.todoWork}
							completed={item.completed}
							onDelete={() => deleteTask(item.todoWork)}
							onToggle={() => toggleTaskCompletion(item.todoWork)}
						/>
					))
				)}
			</div>
		</div>
	);
}

export default Todomain;

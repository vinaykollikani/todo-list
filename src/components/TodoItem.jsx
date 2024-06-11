// import React from "react";

// function TodoItem({ id, task, completed, onDelete, onToggle }) {
//     return (
//         <div className="flex items-center mb-4">
//             <input
//                 type="checkbox"
//                 checked={completed}
//                 onChange={onToggle}
//                 className="mr-4"
//             />
//             <span
//                 style={{ textDecoration: completed ? "line-through" : "none" }}
//                 className="flex-grow"
//             >
//                 {task}
//             </span>
//             <button
//                 onClick={onDelete}
//                 className="bg-red-500 text-white px-2 py-1 rounded"
//             >
//                 Delete
//             </button>
//         </div>
//     );
// }

// export default TodoItem;

import React from "react";

function TodoItem({ task, completed, onDelete, onToggle }) {
	return (
		<>
			<div className="todo-item w-[85%] lg:w-[700px] border-b border-[#7469B6] border-dashed px-4 mx-auto my-6 flex justify-between">
				<div className="flex items-center justify-start gap-4 w-3/4">
					<input
						id="task"
						type="checkbox"
						checked={completed}
						onChange={onToggle}
						className="mr-2 md:mr-4 cursor-pointer"
					/>
					<div
						className="text-lg md:text-2xl capitalize w-full cursor-pointer decoration-black"
						style={{ textDecoration: completed ? "line-through #FFFFFF70" : "none", textDecorationColor: "#18181b" }}
						onClick={onToggle}
					>
						{task}
					</div>
				</div>
				<button onClick={onDelete} className="outline-none">
					<i className="fa-solid fa-trash text-lg md:text-2xl text-[#A696FF] hover:text-[#9f90f7] active:text-red-500 p-2"></i>
				</button>
			</div>
		</>
	);
}

export default TodoItem;

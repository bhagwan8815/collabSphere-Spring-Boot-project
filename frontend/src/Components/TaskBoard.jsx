import TaskColumn from "./TaskColumn";

const TaskBoard = ({ tasks, onCreateIssue }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <TaskColumn 
      title="Todo" 
      tasks={tasks.todo} 
      status="todo" 
      onCreateIssue={onCreateIssue} 
    />
    <TaskColumn 
      title="In Progress" 
      tasks={tasks.inProgress} 
      status="inProgress" 
      onCreateIssue={onCreateIssue} 
    />
    <TaskColumn 
      title="Done" 
      tasks={tasks.done} 
      status="done" 
      onCreateIssue={onCreateIssue} 
    />
  </div>
);

export default TaskBoard;


import styles from "./TodoList.module.css";
import TodoCard from "./TodoCard";

function TodoList(props) {
  return (
    <div className={styles.container}>
      <TodoCard />
      <TodoCard />
      <TodoCard task={{ title: "Title", description: "Description" }} />
    </div>
  );
}

export default TodoList;

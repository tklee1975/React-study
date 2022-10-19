
import styles from './TodoCard.module.css'


function TodoCard (props) {
    let task = props.task || {title:'Default Title', description:'Default Description'};
    let title = task.title || "Study React Hook";
    let description = task.description || "Study React Hook";

    return (
        <div className={styles.card}>
          <div className={styles.header}>{title}</div>
          <div style={{fontSize: '0.8rem'}}>
            {description}
          </div>
        </div>
      );
}

export default TodoCard;
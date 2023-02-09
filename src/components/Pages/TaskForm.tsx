import { MessageBar, MessageBarType, Stack } from '@fluentui/react';
import { useState, useEffect } from 'react';
import { ITask } from './../../utility/TaskTypes';
import styles from "../styles/FormS.module.css";

type Props = {
  onSubmitClickHnd: (data: ITask) => void;
}

const TaskForm = (props: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showMessage, setShowMessage] = useState<{ type: MessageBarType, message: string }>({ type: MessageBarType.success, message: "" });

  const { onSubmitClickHnd } = props;

  useEffect(() => {
    if (showMessage.message) {
      setTimeout(() => {
        setShowMessage({ type: MessageBarType.success, message: "" });
      }, 3000);
    }
  }, [showMessage.message]);

  const onTitleChangeHnd = (e: any) => {
    setTitle(e.target.value);
  };

  const onDescriptionChangeHnd = (e: any) => {
    setDescription(e.target.value);
  };

  const onSubmitBtnClickHnd = (e: any) => {
    e.preventDefault();
    if (!title || !description) {
      setShowMessage({ type: MessageBarType.error, message: "Title and description are required" });
      return;
    }
    const data: ITask = {
      id: new Date().toJSON().toString(),
      title: title,
      description: description,
      isFav: false,
    };
    onSubmitClickHnd(data);
    setShowMessage({ type: MessageBarType.success, message: "Task Added" });
    setTitle("");
    setDescription("");
  };


  return (
    <div className={styles.formContainer}>
      <form onSubmit={onSubmitBtnClickHnd}>
        <div className={styles.inputContainer}>
          <label>Title</label>
          <input type="text" value={title} onChange={onTitleChangeHnd} />
          <div className={styles.distContainer}>
            <label>Description</label>
            <input type="text" value={description} onChange={onDescriptionChangeHnd} />
          </div>

          <div className={styles.messageContainer}>
            <Stack horizontal tokens={{ childrenGap: 20 }} style={{ marginTop: 20 }}>
              <Stack style={{ width: "100%" }}>
                {showMessage.message &&
                  <MessageBar
                    messageBarType={showMessage.type}
                  >
                    {showMessage.message}
                  </MessageBar>
                }
              </Stack>
            </Stack>
          </div>
        </div>

        <div className={styles.btnContainer}>
          <input type="submit" value="Add Task" />
        </div>

      </form>
    </div>
  );
};

export default TaskForm;
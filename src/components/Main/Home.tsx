import React, { useState, useEffect } from 'react';
import { Stack, Pivot, PivotItem } from '@fluentui/react';
import { PivotKeysEnum, ITask } from '../../utility/TaskTypes';
import TaskList from '../Pages/TaskList';
import TaskString from "../../String.json";
import TaskForm from '../Pages/TaskForm';
import HomeStyle from '../styles/HomeS.style';

const Home = () => {
  const [selectedKey, setSelectedKey] = useState<string>(PivotKeysEnum.Tasks);
  const [taskList, setTaskList] = useState([] as ITask[]);

  useEffect(() => {
    const listInString = window.localStorage.getItem("TaskList");
    if (listInString) {
      _setTasklist(JSON.parse(listInString));
    }
  }, []);

  const _setTasklist = (list: ITask[]) => {
    setTaskList(list);
    window.localStorage.setItem("TaskList", JSON.stringify(list));
  }
  const addTask = (data: ITask) => {
    _setTasklist([...taskList, data]);
  }

  const deleteTask = (data: ITask) => {
    if (window.confirm(TaskString.deleteConfirm)) {
      const indexToDelete = taskList.indexOf(data);
      const tempList = [...taskList];
      tempList.splice(indexToDelete, 1);
      _setTasklist(tempList);
    }
  }

  return (
    <Stack className={HomeStyle.homeContainer}>
      <header className={HomeStyle.headerStyle}>
        <h2>{TaskString.header}</h2>
      </header>

      <Stack className={HomeStyle.pivotContainer}>
        <Pivot
          selectedKey={String(selectedKey)}
          styles={{ root: HomeStyle.pivotRoot }}
          onLinkClick={(item?: PivotItem) => {
            setSelectedKey(item?.props.itemKey || PivotKeysEnum.Tasks);
          }}
        >
          <PivotItem headerText={TaskString.pivots.taskTab} itemKey={PivotKeysEnum.Tasks}>
            <TaskList
              list={taskList}
              onDeleteClickHnd={deleteTask}
            />
          </PivotItem>

          <PivotItem headerText={TaskString.pivots.taskFormTab} itemKey={PivotKeysEnum.TaskForm}>
            <TaskForm
              onSubmitClickHnd={addTask}
            />
          </PivotItem>

        </Pivot>
      </Stack>
    </Stack>
  );
}

export default Home;
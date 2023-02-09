import { MessageBar, Checkbox, FontIcon, mergeStyles, Stack } from '@fluentui/react';
import { useState, useEffect } from "react";
import { initializeIcons } from '@fluentui/react/lib/Icons';
import { ITask } from './../../utility/TaskTypes';
import ListStyle from "../styles/ListS.style";
import TaskDescription from './TaskDescription';
initializeIcons();

type Props = {
  list: ITask[];
  onDeleteClickHnd: (data: ITask) => void;
};

const TaskList = (props: Props) => {
  const { list, onDeleteClickHnd } = props;
  const [favorites, setFavorites] = useState<ITask[]>(() => {
    const storedData = localStorage.getItem("favorites");
    return storedData ? JSON.parse(storedData) : [];
  });
  const [selectedTasks, setSelectedTasks] = useState<ITask[]>([]);

  const onToggleFavorite = (task: ITask) => {
    setFavorites(prevFavs => {
      if (prevFavs.some((fav) => fav.id === task.id)) {
        return prevFavs.filter((fav) => fav.id !== task.id);
      } else {
        return [...prevFavs, task];
      }
    });
  };

  const onCheckboxChange = (task: ITask) => {
    setSelectedTasks(prevTasks => {
      if (prevTasks.some((selectedTask) => selectedTask.id === task.id)) {
        return prevTasks.filter((selectedTask) => selectedTask.id !== task.id);
      } else {
        return [...prevTasks, task];
      }
    });
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const onRenderTask = (task: ITask) => {
    return (
      <Stack horizontal key={task.id} className={ListStyle.taskItem}>
        <Stack horizontal style={{ width: "85%" }}>
          <Checkbox onChange={() => onCheckboxChange(task)} />
          <Stack style={{ marginLeft: "6px", marginTop: "-3px" }}>
            <span className={selectedTasks.some((selectedTask) => selectedTask.id === task.id) ? mergeStyles(ListStyle.titleChecked) : ""}>{task.title}</span>
          </Stack>
        </Stack>

        <Stack horizontal style={{ justifyContent: "flex-end", width: "15%" }}>
          <TaskDescription task={task} />
          <FontIcon
            iconName={favorites.some((fav) => fav.id === task.id) ? "FavoriteStarFill" : "FavoriteStar"}
            className={mergeStyles(ListStyle.iconStyle, selectedTasks.some((selectedTask) => selectedTask.id === task.id) ? { color: "grey" } : { color: "blue" })}
            onClick={() => onToggleFavorite(task)}
          />
          <FontIcon
            iconName="Delete"
            className={ListStyle.iconStyleDelete}
            onClick={() => onDeleteClickHnd(task)}
          />
        </Stack>
      </Stack>
    );
  };

  return (
    <>
      {list && list.length ? (
        <>
          {list.sort((a, b) => a.title.localeCompare(b.title)).map(onRenderTask)}
        </>
      ) : (
        <MessageBar> No records to show </MessageBar>
      )}
    </>
  );
};

export default TaskList;
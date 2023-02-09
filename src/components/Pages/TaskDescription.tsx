import React from 'react';
import { FontIcon, TeachingBubble, mergeStyles, Stack } from '@fluentui/react';
import { useBoolean, useId } from '@fluentui/react-hooks';
import { ITask } from './../../utility/TaskTypes';
import ListStyle from './../styles/ListS.style';

type Props = {
  task: ITask;
}

const TaskDescription = ({ task }: Props) => {
  const buttonId = useId("targetButton");
  const [teachingBubbleVisible, { toggle: toggleTeachingBubbleVisible }] = useBoolean(false);

  return (
    <>
      <Stack className={ListStyle.iconStyleDesc}>
        <FontIcon
          id={buttonId}
          iconName="Info"
          className={task.description ? ListStyle.iconStyle : mergeStyles(ListStyle.iconStyle, ListStyle.disabled)}
          onClick={task.description ? toggleTeachingBubbleVisible : () => { }}
        />
      </Stack>

      {teachingBubbleVisible && (
        <TeachingBubble
          target={`#${buttonId}`}
          headline={task.title}
          onDismiss={toggleTeachingBubbleVisible}
        > {task.description} </TeachingBubble>
      )}
    </>
  );
};

export default TaskDescription;
import React, { useState } from 'react';
import { PencilSimpleLine, Trash } from '@phosphor-icons/react';
import EditTask from '../Modals/EditTask';
import ButtonIndex from '../Button/ButtonIndex';

const Card = ({
  taskObj,
  index,
  deleteTask,
  updateListArray,
  completedTodo,
}) => {
  const [modal, setModal] = useState(false);

  const colors = [
    {
      primaryColor: '#5D93E1',
      secondaryColor: '#ECF3FC',
    },
    {
      primaryColor: '#F9D288',
      secondaryColor: '#FEFAF1',
    },
    {
      primaryColor: '#5DC250',
      secondaryColor: '#F2FAF1',
    },
    {
      primaryColor: '#F48687',
      secondaryColor: '#FDF1F1',
    },
    {
      primaryColor: '#B964F7',
      secondaryColor: '#F3F0FD',
    },
  ];

  const toggle = () => {
    setModal(!modal);
  };

  const updateTask = (obj) => {
    updateListArray(obj);
  };

  const handleDelete = () => {
    deleteTask(taskObj.id);
  };

  return (
    <div className="card-wrapper mr-5">
      <div
        className="card-top"
        style={{ backgroundColor: colors[index % 5].primaryColor }}
      ></div>
      <div
        className="task-holder"
        style={{
          textDecoration: taskObj.isCompleted ? 'line-through' : '',
          opacity: taskObj.isCompleted ? '0.2' : '',
        }}
      >
        <span
          className="card-header"
          style={{
            backgroundColor: colors[index % 5].secondaryColor,
            borderRadius: '10px',
          }}
        >
          {taskObj.Name}
        </span>
        <p>{taskObj.Description}</p>

        <div style={{ position: 'absolute', right: '20px', bottom: '20px' }}>
          <ButtonIndex
            txt={'Completar'}
            onClick={() => completedTodo(taskObj.id)}
          />
          <PencilSimpleLine
            size={24}
            weight="bold"
            className=" m-1"
            style={{ color: colors[index % 5].primaryColor, cursor: 'pointer' }}
            onClick={() => setModal(true)}
          />
          <Trash
            size={24}
            weight="bold"
            style={{ color: colors[index % 5].primaryColor, cursor: 'pointer' }}
            onClick={handleDelete}
          />
        </div>
      </div>
      <EditTask
        modal={modal}
        toggle={toggle}
        updateTask={updateTask}
        taskObj={taskObj}
      />
    </div>
  );
};

export default Card;

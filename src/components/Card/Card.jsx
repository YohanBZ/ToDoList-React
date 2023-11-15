import React, { useState } from 'react';
import { PencilSimpleLine, Trash } from '@phosphor-icons/react';
import EditTask from '../Modals/EditTask';
import ButtonIndex from '../Button/ButtonIndex';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';

const Cards = ({
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

  const handleClik = () => {
    completedTodo(taskObj.id);
  };

  const updateTask = (obj) => {
    updateListArray(obj);
  };

  const handleDelete = () => {
    deleteTask(taskObj.id);
  };

  return (
    <Card
      style={{
        width: '17rem',
      }}
    >
      <CardBody
        style={{
          textDecoration: taskObj.isCompleted ? 'line-through' : '',
          opacity: taskObj.isCompleted ? '0.2' : '',
          borderTop: `3px solid ${colors[index % 5].primaryColor}`,
          borderRadius: '6px',
        }}
      >
        <CardTitle
          tag="h5"
          style={{
            backgroundColor: colors[index % 5].secondaryColor,
            borderRadius: '10px',
            padding: '5px',
          }}
        >
          {taskObj.Name}
        </CardTitle>
        <CardText>{taskObj.Description}</CardText>
      </CardBody>
      <CardBody
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          justifyItems: 'center',
          alignItems: 'center',
        }}
      >
        <ButtonIndex
          txt={taskObj.isCompleted ? 'incompleto' : 'Completar'}
          onClick={handleClik}
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
      </CardBody>
      <EditTask
        modal={modal}
        toggle={toggle}
        updateTask={updateTask}
        taskObj={taskObj}
      />
    </Card>
  );
};

export default Cards;

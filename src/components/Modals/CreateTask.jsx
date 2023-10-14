import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTask = ({ modal, toggle, save }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'taskName') {
      setTaskName(value);
    } else {
      setDescription(value);
    }
  };

  const handleSave = () => {
    let taskObj = {};
    if (!taskName || !description) return;
    taskObj['id'] = Math.floor(Math.random() * 1000);
    taskObj['Name'] = taskName;
    taskObj['Description'] = description;
    taskObj['isCompleted'] = false;
    save(taskObj);
    setTaskName('');
    setDescription('');
  };
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Criar Tarefa</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <label htmlFor="">Nome da Tarefa</label>
              <input
                type="text"
                className="form-control"
                maxLength="20"
                value={taskName}
                name="taskName"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Descrição</label>
              <textarea
                rows="5"
                className="form-control"
                maxLength="50"
                name="description"
                value={description}
                onChange={handleChange}
              ></textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>
            Criar
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CreateTask;

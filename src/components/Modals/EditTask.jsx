import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTask = ({ modal, toggle, updateTask, taskObj }) => {
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

  useEffect(() => {
    setTaskName(taskObj.Name);
    setDescription(taskObj.Description);
  }, [taskObj]);

  const handleUpdate = (e) => {
    e.preventDefault();
    let tempObj = { ...taskObj };
    tempObj['Name'] = taskName;
    tempObj['Description'] = description;
    updateTask(tempObj);
  };
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Atualizar Tarefa</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label htmlFor="">Nome da Tarefa</label>
            <input
              type="text"
              className="form-control"
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
              name="description"
              value={description}
              onChange={handleChange}
            ></textarea>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleUpdate}>
          Atualizar
        </Button>{' '}
        <Button color="secondary" onClick={toggle}>
          Cancelar
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditTask;

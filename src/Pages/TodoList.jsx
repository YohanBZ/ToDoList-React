import React, { useEffect, useState } from 'react';
import CreateTask from '../components/Modals/CreateTask';
import Filter from '../components/Filter/Filter';
import Header from '../components/Header/Header';
import NavMain from '../components/NavMain/NavMain';
import Cards from '../components/Card/Card';

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const toggle = () => setModal(!modal);

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('Todos');
  const [sort, setSort] = useState('Asc');

  const items = ['Todos', 'Completo', 'Incompleto'];

  useEffect(() => {
    let arr = localStorage.getItem('taskList');
    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  const deleteTask = (taskId) => {
    const tempList = taskList.filter((task) => task.id !== taskId);
    localStorage.setItem('taskList', JSON.stringify(tempList));
    setTaskList(tempList);
  };

  const completedTodo = (id) => {
    let newTodos = [...taskList];
    newTodos.forEach((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
    });
    localStorage.setItem('taskList', JSON.stringify(newTodos));
    setTaskList(newTodos);
  };

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem('taskList', JSON.stringify(tempList));
    setTaskList(tempList);
    setModal(false);
  };

  const updateListArray = (obj) => {
    if (!obj.id) {
      console.error('O objeto deve ter um ID!');
      return;
    }
    const updatedTasks = taskList.map((task) => {
      if (task.id === obj.id) {
        return obj;
      }
      return task;
    });
    localStorage.setItem('taskList', JSON.stringify(updatedTasks));
    setTaskList(updatedTasks);
    window.location.reload();
  };

  const deletar = () => {
    setTaskList([]);
  };

  return (
    <>
      <Header
        modal={modal}
        setModal={setModal}
        search={search}
        setSearch={setSearch}
      />
      <section className="sectionPrinpal">
        <Filter
          filter={filter}
          setFilter={setFilter}
          setSort={setSort}
          items={items}
        />
        <div>
          <div className="task-container">
            <NavMain
              value={filter}
              setFilter={setFilter}
              items={items}
              deletar={deletar}
              taskList={taskList}
            />
            {taskList
              .filter((taskObj) =>
                filter === 'Todos'
                  ? true
                  : filter === 'Completo'
                  ? taskObj.isCompleted
                  : !taskObj.isCompleted,
              )
              .filter((taskObj) =>
                taskObj.Name.toLowerCase().includes(search.toLowerCase()),
              )
              .sort((a, b) =>
                sort === 'Asc'
                  ? a.Name.localeCompare(b.Name)
                  : b.Name.localeCompare(a.Name),
              )
              .map((obj, index) => (
                <Cards
                  key={index}
                  taskObj={obj}
                  index={index}
                  deleteTask={deleteTask}
                  updateListArray={updateListArray}
                  completedTodo={completedTodo}
                />
              ))}
          </div>
        </div>
      </section>

      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
};

export default TodoList;

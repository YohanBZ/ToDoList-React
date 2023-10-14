<Card
  className="my-2"
  style={{
    width: '18rem',
  }}
>
  <CardHeader>{taskObj.Name}</CardHeader>
  <CardBody>
    <CardTitle tag="h5">Special Title Treatment</CardTitle>
    <CardText>{taskObj.Description}</CardText>
    <Button>Go somewhere</Button>
  </CardBody>
  <CardFooter>
    <ButtonIndex txt={'Completar'} onClick={() => completedTodo(taskObj.id)} />
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
  </CardFooter>
  <EditTask
    modal={modal}
    toggle={toggle}
    updateTask={updateTask}
    taskObj={taskObj}
  />
</Card>;

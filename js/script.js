{
    const tasks = [];
  
    const addNewTask = (newTaskContent) => {
      tasks.push({
        content: newTaskContent,
      });
      render();
    };
  
  }
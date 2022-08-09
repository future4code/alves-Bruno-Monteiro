function addTasks(item) {
    const tasks = ['Estudar', 'Lavar Roupa']
    const newTasks = item
    tasks = [...tasks, newTasks]

    console.log('Tarefa adicionada com sucesso!')
    console.log(tasks)
}

addTasks(process.argv[2])
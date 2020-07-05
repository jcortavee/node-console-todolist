const fs = require('fs');
const colors = require('colors');
const save = () => {
    let data = JSON.stringify(todolist);

    fs.writeFile('./data/data.json', data, (err) => {
        if (err) {
            console.log(err);
        }
    });
}

const load = () => {
    try {
        todolist = require('../data/data.json');
    } catch (err) {
        todolist = [];
    }
}

let todolist = [];

const create = (description) => {
    load();

    let task = {
        description,
        complete: false
    }

    todolist.push(task);

    save();

    return task;
}


const list = () => {
    load();

    todolist.forEach(task => {
        console.log("-----------------------".green);
        console.log(task.description.green);
        console.log(colors.green(task.complete));
        console.log("-----------------------".green);
    });
}

const update = (description, complete = true) => {
    load();

    let index = todolist.findIndex(task => task.description === description);

    if (index >= 0) {
        todolist[index].complete = complete;
        save();
        return todolist[index];
    } else {
        return null;
    }

}

const deleteTask = (description) => {
    load();

    let newList = todolist.filter(task => task.description !== description);

    if (newList.length !== todolist.length) {
        todolist = newList
        save();
        return true;
    } else {
        return false;
    }

}


module.exports = {
    create,
    list,
    update,
    deleteTask
}
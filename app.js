const argv = require('./config/yargs').argv;
const todo = require('./todo/todo');


let command = argv._[0];

switch (command) {
    case 'create':
        let task = todo.create(argv.description);
        console.log(task);
        break;

    case 'list':
        todo.list();
        break;

    case 'update':
        console.log(todo.update(argv.description, argv.complete));
        break;

    case 'delete':
        console.log(todo.deleteTask(argv.description));
        break;

    default:
        console.log('Command not foud');
}

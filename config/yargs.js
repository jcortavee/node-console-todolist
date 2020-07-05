const description = {
    demand: true,
    alias: 'd'
};
const complete = {
    demand: true,
    alias: 'c'
};

const argv = require('yargs')
                .command('create', 'Create a new task', {
                    description
                })
                .command('update', 'Update a taks to finish', {
                    description,
                    complete
                })
                .command('delete', 'Delete a task', {
                    description
                })
                .command('list', 'List all the tasks')
                .help()
                .argv;

module.exports = {
    argv
}
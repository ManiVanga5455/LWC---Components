import { LightningElement } from 'lwc';

export default class ToDoManager extends LightningElement {
    taskName = '';
    dueDate = null;
    toDOTasks = [];
    completedTasks = [];

    // Handle changes for input fields
    handleChange(event) {
        let { name, value } = event.target;
        if (name == 'taskName') {
            this.taskName = value;
        } else if (name == 'dueDate') {
            this.dueDate = value;
        }
    }

    // Reset the input fields
    handleReset() {
        this.taskName = '';
        this.dueDate = null;
    }

    // Add task to the list
    handleAdd() {
        // If dueDate is missing, populate with today's date
        if (this.dueDate == null) {
            this.dueDate = new Date().toISOString().slice(0, 10);
        }

        // Check if task is valid and not a duplicate
        if (this.validateTask()) {
            this.toDOTasks = [...this.toDOTasks, {
                taskName: this.taskName,
                dueDate: this.dueDate
            }];

            // Reset fields after adding
            this.handleReset();

            // Sort tasks by due date
            let sortedArray = this.sorttoDoTasks(this.toDOTasks);
            this.toDOTasks = [...sortedArray];
            console.log(JSON.stringify(this.toDOTasks,null,2)); // Should print sorted tasks correctly
        }
    }

    // Validate task to check for duplicates and empty tasks
    validateTask() {
        let isValid = true;

        // Query for the taskName field in the template
        let element = this.template.querySelector('.taskName');
        
        // Check if taskName is empty
        if (this.taskName == '') {
            alert('Task is empty');
            isValid = false;
        } else {
            // Check if task already exists (same name and date)
            let taskItem = this.toDOTasks.find((task) => {
                return task.taskName == this.taskName && task.dueDate == this.dueDate;
            });

            if (taskItem) {
                alert('Task already exists');
                element.setCustomValidity('Task already exists');
                isValid = false;
            }
        }

        // If valid, clear the custom validity message
        if (isValid) {
            element.setCustomValidity('');
        }

        // Report validity to the user
        element.reportValidity();

        return isValid;
    }

    // Sort tasks by due date
    sorttoDoTasks(inputArray) {
        let sortedToDoTasks = inputArray.sort((a, b) => {
            const A = new Date(a.dueDate);
            const B = new Date(b.dueDate);
            return A - B;
            });
        return sortedToDoTasks;}}
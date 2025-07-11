/* Requirements:
A - MENU:
    1 - Display to-do list (Ursula)
    2 - Add new task (Sampson)
    3 - Mark task as complete (Orlando)
    4 - Delete task (Janis)
    5 - Exit (Beril)
B - Allow to add multiple tasks in a row (Sampson)
C - Allow tasks to be marked as complete and update from [ ] to [X] (Orlando)
D - Allow tasks to be deleted after a confirmation question (Janis)
E - Use a unique ID counter

* Use an array for the task list?
* Each task should have id, description, and isComplete property

BONUS:
* Input validation
* Edit a task's description

*/

import readline from 'node:readline/promises';
import {stdin, stdout} from 'node:process';
import { readFile, writeFile } from 'node:fs/promises';

const filePath = './to-do-data.json';

// Save data to file
async function saveData(data) {
    await writeFile(filePath, JSON.stringify(data, null, 2), () => console.log("Couldn't write."));
}

// Load data from file
async function loadData() {
  try {
    const content = await readFile(filePath, 'utf-8', () => console.log("Couldn't read"));
    console.log("Your data has been loaded!");
    return JSON.parse(content);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('No data file found. Returning empty list.');
      return [];
    } else {
      throw err;
    }
  }
}

const rl = readline.createInterface({
    input: stdin,
    output: stdout
});
var tasksArray = [];
var idCounter = 1;
let readObj = await loadData();
if (readObj != []){
    tasksArray = readObj.tasksArray;
    idCounter = readObj.idCounter;
}

/*
task = {
    id: 123,
    description: Clean room,
    isComplete: false
}

obj = {
    tasksArray: [{id: , desc, iscomplete}],
    idCounter = num
}
*/
function displayMenu(){
    console.log(
        `
*****************************************
MENU
        
1: Display to-do list
2: Add new task
3: Mark task as complete
4: Delete task
5: Edit a task
6: Exit
*****************************************
`
    );
    console.log();
}

// Input Validation
function inputValNY(input){
    if(input.length > 1){
        console.log("ONLY USE ONE CHARACTER!");
        return 0 
    }else if(!input.match(/[yn]/i)){
        console.log("NOT A VALID CHARACTER USE Y or N");
        return 0
    }
    return 1
}

// Check for Menu input
function inputValnum(input){
    if(input.length > 1){
        console.log("ONLY USE ONE CHARACTER!");
        return 0 
    }else if(!input.match(/[1-6]/)){
        console.log("NOT A VALID CHARACTER USE (1-6)");
        return 0
    }
    return 1
}

function validateID(id){
    if (!id.match(/^([0-9])+$/gm)){
        console.log("Please enter a numerical value.");
        return -1;
    }

    // Check whether ID exists in the the tasksArray
    for (let i = 0; i < tasksArray.length; i++){
        let task = tasksArray[i];
        if (task.id == id) {
            return i; // Return INDEX!!!
        }
    }
    return -999; // Not found in array.
}

// Displaying to-do list
function displayTasks(tasks) {
  if (tasks.length === 0) {  
    console.log('\nYou have no tasks.');
    return;
  }
  console.log('\nTO-DO');
  for (const task of tasks) {
    const status = task.isComplete ? '[X]' : '[ ]';
    console.log(`[${task.id}]: ${status} ${task.description}`);  
  }
}

// Delete task
/**
 * deletes the task based on the given index
 * @param {string} idx
 * @returns {boolean} based on if the id was found
 */
function deleteTask(idx) {
  //if the task is not within the array
  if (idx == -999){
    console.log("The given ID doesn't exist within the current to-do list.");
    return false;
  }
  tasksArray.splice(idx, 1);
  return true;
}

// Prompt for ID
async function promptID(prompt){
    // Validate the ID and keep looping until valid
    let input = await rl.question(prompt);

    while (validateID(input) == -1){
        input = await rl.question(prompt);
    }
    // Return the index of the valid ID
    return validateID(input);
}

// Marking Complete
function MarkingComplete(idx){
    tasksArray[idx].isComplete = true;
    console.log();
    displayTasks(tasksArray);
}

// Adding a task
const askForTask = async () => {
  var run = true;
  while (run) {
    const taskTitle = await rl.question(
      "Whatcha gotta do today? Add task here (or type q to return to the menu): "
    );

    // console.log("[q or exit to QUIT (quitter!)]");
    // check for closure //
    if (taskTitle.toLowerCase() === "q") {
      console.log("'ight, bye, then! guess you all caught up, huh?! -.-");
      run = false;
      break;
    }
    // otherwise add new task
    const newTask = {
      id: idCounter,
      description: taskTitle,
      isComplete: false,
    };
    tasksArray.push(newTask);
    console.log(`Task added!! Task is: ${taskTitle}`);
    displayTasks(tasksArray);
    idCounter++;
  }
}

// Begin Program
let isRunning = true;
console.log("Welcome to the To-Do List!");
console.log();
do {
    displayMenu();
    let selection = await rl.question("Please choose an option (1-6): ");

    // Pass "selection" into input validation
    while (!inputValnum(selection)){
        selection = await rl.question("Please choose an option (1-6): ");
    }
    console.log();

    if (selection == '1'){
        // Display to-do list
        displayTasks(tasksArray);
    } else if (selection == '2'){
        // Add new task
        await askForTask();
    } else if (selection == '3'){
        // Mark as complete
        displayTasks(tasksArray);
        let idx = await promptID("Enter the ID of the task to mark as complete: ");
        if (idx == -999){
            console.log("The given ID doesn't exist within the current to-do list.");
        } else {
            // ID and index are valid
            MarkingComplete(idx);
        }

    } else if (selection == '4'){
        // Delete task
        displayTasks(tasksArray);
        let idx = await promptID("Enter the ID of the task you would like to delete: ");
        if (idx == -999){
            console.log("The given ID doesn't exist within the current to-do list.");
        } else {
            // ID and index are valid
            let yn = await rl.question(`Delete "${tasksArray[idx].description}" task? (Y/N): `);
            while (!inputValNY(yn)){
                yn = await rl.question(`Delete "${tasksArray[idx].description}" task? (Y/N): `);
            }
            if (yn == 'y' || yn == 'Y'){
                deleteTask(idx);
                console.log();
                displayTasks(tasksArray);
            }
        }
    } else if (selection == '5'){
        displayTasks(tasksArray);
        let idx = await promptID("What is the ID of the task you would like to edit? ");
        if (idx == -999){
            console.log("The given ID doesn't exist within the current to-do list.");
        } else {
            // ID and index are valid
            let desc = await rl.question("Enter the new description: ");
            tasksArray[idx].description = desc;
            console.log("Description updated!");
            displayTasks(tasksArray);
        }
    } else {
        // Exit
        let save = {
            "tasksArray": tasksArray,
            "idCounter": idCounter
        };
        await saveData(save);
        console.log(`Your to-do list has been saved to ${filePath}!`);
        console.log("Goodbye!");
        rl.close();
        isRunning = false;
    }
    console.log();
} while (isRunning);
// Simulate an asynchronous task that takes some time
function performAsyncTask(callback) {
  setTimeout(function () {
    console.log("Task completed");
    callback(); // Call the callback when the task is done
  }, 2000); // Simulate a 2-second delay
}

// Define a callback function
function afterTask() {
  console.log("Callback executed");
}

// Perform an asynchronous task and provide the callback
performAsyncTask(afterTask);

console.log("Task started");

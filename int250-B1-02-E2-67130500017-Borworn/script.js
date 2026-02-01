document.addEventListener("DOMContentLoaded", () => {
  updateTime();
  setInterval(updateTime, 1000);
  addTask();
  loadTask();
});

const allTask = [];
let currentFilter = "all";
let searchKeyword = "";

function updateTime() {
  const now = new Date();
  const day = now.toLocaleString("en-US", { weekday: "long" });
  const dayNum = now.toLocaleString("en-US", { day: "2-digit" });
  const month = now.toLocaleString("en-US", { month: "long" });
  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  document.getElementById("current-day").textContent = day;
  document.getElementById("current-dayNum").textContent = dayNum;
  document.getElementById("current-month").textContent = month;
  document.getElementById("current-time").textContent = time;
}

function addTask() {
  const taskForm = document.querySelector("form"); 
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const taskName = document.getElementById("task-name");
    const name = taskName.value.trim();

    const priorityInput = document.getElementById("priority-input").value;

    const isDuplicate = allTask.some(
      (task) => task.taskName.toLowerCase() === name.toLowerCase(),
    );

    if (isDuplicate) {
      alert("task นี้ได้ถูกสร้างไปแล้ว");
      return;
    }

    const newTask = {
      id: Date.now(),
      taskName: name,
      priority: priorityInput,
      completed: false,
      timeStamp: new Date().toLocaleString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    };

    allTask.unshift(newTask);

    saveTask();
    updateCount();
    renderTasks();

    taskForm.reset();;
  });
}


function searchTask() {
  const searchInput = document.getElementById("search-input");

  searchInput.addEventListener("input", (e) => {
    const searchValue = e.target.value.trim().toLowerCase();

    let filteredTasks = allTask;

    if (searchValue) {
      filteredTasks = filteredTasks.filter((task) =>
        task.taskName.toLowerCase().includes(searchValue),
      );
    }

    if (currentFilter === "active") {
      filteredTasks = filteredTasks.filter((task) => task.completed === false);
    }

    if (currentFilter === "completed") {
      filteredTasks = filteredTasks.filter((task) => task.completed === true);
    }

    renderTasks(filteredTasks);
  });
}

function filterTask() {
  const completedBtn = document.getElementById("completed-btn");
  const allBtn = document.getElementById("all-btn");
  const activeBtn = document.getElementById("active-btn");

  allBtn.addEventListener("click", () => {
    currentFilter = "all";
    allBtn.classList.add("active");
    completedBtn.classList.remove("active");
    activeBtn.classList.remove("active");
    renderTasks(allTask);
  });

  completedBtn.addEventListener("click", () => {
    const completedTasks = allTask.filter((task) => task.completed === true);
    completedBtn.classList.add("active");
    allBtn.classList.remove("active");
    activeBtn.classList.remove("active");
    currentFilter = "completed";
    renderTasks(completedTasks);
  });

  activeBtn.addEventListener("click", () => {
    const activeTasks = allTask.filter((task) => task.completed === false);
    activeBtn.classList.add("active");
    completedBtn.classList.remove("active");
    allBtn.classList.remove("active");
    currentFilter = "active";
    renderTasks(activeTasks);
  });
}

function updateCount() {
  const countAllTask = document.getElementById("all-task");
  const countActiveTask = document.getElementById("active-task");

  countAllTask.textContent = allTask.length;
  countActiveTask.textContent = allTask.filter(
    (task) => !task.completed,
  ).length;
}

function clearCompletedTask() {
  const clearBtn = document.getElementById("clear-btn");

  clearBtn.addEventListener("click", () => {
    const activeTasks = allTask.filter((task) => task.completed === false);

    allTask.length = 0;
    allTask.push(...activeTasks);

    let filteredTasks = allTask;

    if (currentFilter === "active") {
      filteredTasks = filteredTasks.filter((task) => task.completed === false);
    }

    if (currentFilter === "completed") {
      filteredTasks = filteredTasks.filter((task) => task.completed === true);
    }

    renderTasks(filteredTasks);
    saveTask();
    updateCount();
  });
}

function renderTasks(tasks = allTask) {
  const listArea = document.querySelector(".list-area-inner");

  listArea.innerHTML = "";

  tasks.forEach((task) => {
    const taskCard = document.createElement("div");
    taskCard.id = "task-card";
    taskCard.className = "mx-4 mb-4 px-3 d-flex align-items-center";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.className = "m-2";

    const divContentEl = document.createElement("div");
    const containerEl = document.createElement("div");
    const taskName = document.createElement("span");
    const taskPriority = document.createElement("span");
    const timeStamp = document.createElement("span");
    const deleteBtn = document.createElement("button");
    const editBtn = document.createElement("button");

    taskName.textContent = task.taskName;
    taskName.className = "fs-3 fw-bolder";

    deleteBtn.innerHTML = `<i class="fa-regular fa-trash-can"></i>`;
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", () => {
      const index = allTask.findIndex((e) => e.id === task.id);
      if (index !== -1) {
        allTask.splice(index, 1);
      }

      saveTask();
      updateCount();
      renderTasks();
    });

    editBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
    editBtn.className = "edit-btn";
    editBtn.addEventListener("click", () => {
      const dialogEl = document.createElement("dialog");

      dialogEl.innerHTML = `
        <div class="card edit-form" method="dialog">
          <p>Edit Task</p>
          <form>
            <input
              type="text"
              id="edit-task-name"
              class="form-control mb-2"
              placeholder="Enter task name"
              value=${task.taskName}
            />
            <select class="form-select mb-2" id="priority-edit">
              <option value="Medium">Medium priority</option>
              <option value="High">High priority</option>
              <option value="Low">Low priority</option>
            </select>
            <button class="btn btn-primary w-100" type="submit" id="save-task-btn">Save</button>
          </form>
        </div>
      `;

      document.body.appendChild(dialogEl);
      dialogEl.showModal();

      dialogEl.querySelector("#priority-edit").value = task.priority;
      const saveBtn = document.getElementById("save-task-btn");
      saveBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const editName = document.getElementById("edit-task-name").value.trim();
        const editPriority = document.getElementById("priority-edit").value;

        if (!editName) return;

        const dialogForm = document.querySelector(".edit-form");
        const oldWarning = dialogEl.querySelector(".warning");
        if (oldWarning) {
          oldWarning.remove();
        }

        const isDuplicate = allTask.some(
          (t) =>
            t.taskName.toLowerCase() === editName.toLowerCase() &&
            t.id !== task.id,
        );

        if (isDuplicate) {
          const warningEl = document.createElement("p");
          warningEl.textContent = "Duplicate task name, Pls try again";
          warningEl.style.color = "red";
          warningEl.className = "warning";
          dialogForm.appendChild(warningEl);
          return;
        }

        task.taskName = editName;
        task.priority = editPriority;
        task.timeStamp = new Date().toLocaleString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          day: "2-digit",
          month: "short",
          year: "numeric",
        });

        saveTask();
        updateCount();
        renderTasks();

        dialogEl.close();
        dialogEl.remove();
      });
    });

    checkbox.addEventListener("change", () => {
      task.completed = checkbox.checked;

      if (currentFilter === "completed") {
        renderTasks(allTask.filter((task) => task.completed));
      } else if (currentFilter === "active") {
        renderTasks(allTask.filter((task) => !task.completed));
      } else {
        renderTasks(allTask);
      }

      saveTask();
      updateCount();
    });

    taskPriority.textContent = task.priority;
    taskPriority.classList.add("task-priority");
    taskPriority.classList.add(task.priority.toLowerCase());

    timeStamp.innerHTML = `<i class="fa-regular fa-clock"></i> ${task.timeStamp}`;
    timeStamp.className = "timestamp-section d-flex align-items-center gap-1 justify-content-center"

    divContentEl.className = "d-flex align-items-center";

    containerEl.className = "d-flex flex-column justify-content-around align-items-start p-2";

    divContentEl.appendChild(taskName);
    divContentEl.appendChild(taskPriority);

    if (checkbox.checked) {
      const statusEl = document.createElement("span");
      statusEl.innerHTML = `Completed <i class="fa-regular fa-circle-check"></i>`;
      statusEl.className = "status-element";
      divContentEl.appendChild(statusEl);
    }

    if (checkbox.checked && currentFilter === "all") {
      taskCard.classList.add("task-completed");
    } else {
      taskCard.classList.remove("task-completed");
    }

    containerEl.appendChild(divContentEl);
    containerEl.appendChild(timeStamp);

    taskCard.appendChild(checkbox);
    taskCard.appendChild(containerEl);
    taskCard.appendChild(editBtn);
    taskCard.appendChild(deleteBtn);

    listArea.appendChild(taskCard);
  });
}

function saveTask() {
  localStorage.setItem("tasks", JSON.stringify(allTask));
}

function loadTask() {
  const task = localStorage.getItem("tasks");
  if (task) {
    allTask.push(...JSON.parse(task));

    filterTask();
    updateCount();
    searchTask();
    clearCompletedTask();
    renderTasks();
  }
}


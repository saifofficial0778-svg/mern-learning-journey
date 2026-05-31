const habitInput = document.getElementById('habit-input');
const addHabitBtn = document.getElementById('add-habit-btn');
const habitList = document.getElementById('habit-list');
const progressBarFill = document.getElementById('progress-bar-fill');
const progressText = document.getElementById('progress-text');

let habits = [];

addHabitBtn.addEventListener('click', () => {
    const text = habitInput.value;
    if (text !== "") {
        habits.push({ text: text, completed: false });
    }
    habitInput.value = "";
    console.log(habits)
    renderHabits();
})

function renderHabits() {
    habitList.innerHTML = "";

    habits.forEach((habit, index) => {

        const li = document.createElement('li');

        li.classList.add('habit-item');

        if (habit.completed) {
            li.classList.add('completed');
        }

        li.innerHTML = `
        <span class="habit-text ${habit.completed ? 'strike' : ''}">${habit.text}</span>
        <div class="habit-action">
                <button class="complete-btn" onclick="toggleHabit(${index})">✔️</button>
                <button class="delete-btn" onclick="deleteHabit(${index})">🗑️</button>
        </div>    

        `;
        habitList.appendChild(li);


    })
    updateprogressbar();
}
function deleteHabit(index) {
    habits.splice(index, 1);
    renderHabits();
}
function toggleHabit(index) {
    habits[index].completed = !habits[index].completed;
    renderHabits();
}
function updateprogressbar() {
    if (habits.length === 0) {
        progressBarFill.style.width = "0%";
        progressText.innerText = "0%"
        return;
    }

    const completedHabits = habits.filter(habit => habit.completed).length;

    const percentage = Math.round((completedHabits / habits.length) * 100);

    progressBarFill.style.width = `${percentage}%`;
    progressText.innerText = `${percentage}%`
}
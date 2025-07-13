const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
  if(inputBox.value === '') {
    alert('You must write something!');
  } else {
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement('span');
    span.innerHTML = '\u00D7';
    li.appendChild(span);
    span.className = 'close';
  }
  inputBox.value = '';
  saveData()
}

inputBox.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    addTask();
  }
});

//study this code again later
listContainer.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked');
      saveData()
  } else if (e.target.tagName === 'SPAN') {
      e.target.parentElement.remove();
      saveData()
  }
}, false); // move false here, outside the callback

function saveData() {
  localStorage.setItem('data', listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem('data');
}

showTask();
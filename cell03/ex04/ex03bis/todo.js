const ft_list = document.getElementById('ft_list');
const newButton = document.getElementById('newButton');

newButton.addEventListener('click', () => {
  const todo = prompt('Enter new todo:');
  if (todo) {
    const newDiv = document.createElement('div');
    newDiv.textContent = todo;
    ft_list.insertBefore(newDiv, ft_list.firstChild);
  }
});

ft_list.addEventListener('click', (event) => {
  const target = event.target;
  if (confirm('Are you sure you want to delete this todo?')) {
    ft_list.removeChild(target);
  }
});

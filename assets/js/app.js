document.addEventListener('contextmenu', event => event.preventDefault());

function clearall() {
  document.getElementById('name').value = ' ';
  document.getElementById('email').value = ' ';
  document.getElementById('contactNumber').value = ' ';
  document.getElementById('comments').value = ' ';
  console.log('cleared');
}

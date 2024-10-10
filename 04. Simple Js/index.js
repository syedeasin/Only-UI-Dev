function validateForm() {
  const name = document.getElementById('name').value;
  if(!name) {
    alert('Name is required!');
    return false;
  }
  return true;
}
function checkEmail() {
  const email = document.getElementById('email').value;
  if (!email.includes('@')) {
    alert('Please enter a valid email address');
  }
}
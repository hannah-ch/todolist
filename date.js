const dateTag = document.querySelector('.dateTag');



const now = new Date();

const months = ['January', 'Februay', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']


dateTag.innerText = `${now.getDate()} ${months[now.getMonth()]}, ${days[now.getDay()]}`;


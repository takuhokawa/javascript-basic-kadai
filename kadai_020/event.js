const addBtn = document.getElementById('btn');
const textChange = document.getElementById('text');

addBtn.addEventListener('click',() => {
  textChange.textContent= 'ボタンをクリックしました';
});
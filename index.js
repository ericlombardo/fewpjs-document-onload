document.addEventListener("DOMContentLoaded", function() {
  let para = document.getElementById('text');
  para.innerHTML = 'This is really cool!';
});

console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
); 
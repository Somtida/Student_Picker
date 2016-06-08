
var allNames = [];

document.addEventListener('DOMContentLoaded', init);

function init() {
  document.querySelector('button.add').addEventListener('click', addNames);
}

function addNames() {

  var str = document.querySelector('textarea.newNames').value;
  var list = document.querySelector('ul.names');

  var names = str.split(',');

  names = names.map(function(name) {
    return name.trim();
  });

  allNames = allNames.concat(names);

  console.log('allNames:', allNames);

  names.forEach(function(name) {
    var el = document.createElement('li');
    el.textContent = name;
    list.appendChild(el);
  });

}


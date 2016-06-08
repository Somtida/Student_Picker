document.addEventListener("DOMContentLoaded", init);
var student = [];
var count = 0;
function init(){
  document.getElementsByClassName('addStu')[0].addEventListener('click', addStudent);
  document.getElementsByClassName('addTeam')[0].addEventListener('click', addTeam);
  document.getElementsByClassName('who')[0].addEventListener('click', findWho);
  document.getElementsByClassName('clear')[0].addEventListener('click', clear);
  document.getElementsByClassName('addppl')[0].addEventListener('click', addppl);

}

function clear(){
  location.reload();
}

function addStudent(){
  if(document.querySelector(".nameText").value !== ""){
  
  document.querySelector('.content').style.display = "initial";
  document.querySelector('#button3').style.display = "initial";
  var str = document.querySelector(".nameText").value;
  var s = str.split(",");
  s = s.map(funciton(wo){
      return word.trim();
  });
  //console.log(s);
  if(s.length>0){

    var ell = document.createElement('p');
    ell.classList.add('headerstu');
      var txt = document.createTextNode("List of Student");
      ell.appendChild(txt);
      document.querySelector('.listStu').appendChild(ell);

    for(var i=0;i<s.length;i++){
      student.push(s[i]);
      var el = document.createElement('div');
      el.classList.add('stu');
      var txt = document.createTextNode(s[i]);
      el.appendChild(txt);
      document.querySelector('.listStu').appendChild(el);
    }
  }
  //console.log("clicked");
  document.querySelector(".nameText").value = "";
  console.log(student);
}}

function findWho(){
  if(student.length>0){
    var jackPotNum = Math.floor(Math.random() * student.length);
    var jackPotPerson = student[jackPotNum];
    document.querySelector('#whoIs').textContent = jackPotPerson;
  }else{
    document.querySelector('#whoIs').textContent = "Please Add Student";
  }
}

function shuffleArray(arr) {
    // for (var i = array.length - 1; i > 0; i--) {
    //     var j = Math.floor(Math.random() * (i + 1));
    //     var temp = array[i];
    //     array[i] = array[j];
    //     array[j] = temp;
    // }
    // return array;
    var shuffled = [];
    while(arr.length){
      var index = Math.floor(Math.random()*arr.length);
      var removedArr = arr.splice(index,1);
      shuffled = shuffled.concat(removedArr);
    }
    return shuffled;
}

function chuck(arr, num){
  var arrays = [];
  while (arr.length){
    var chunk = arr.splice(0,num);
    arrays.push(chunk);
  }
  return arrays;
}

function addppl(){
  var listTeam = document.getElementById('listTeam');
  while (listTeam.firstChild){
    listTeam.removeChild(listTeam.firstChild);
  }
  
  console.log("student: "+student);
  var num = document.querySelector(".pplText").value;
  console.log("num: "+num);
  var numInTeam = student.length / parseInt(num);
  console.log("numInTeam: "+numInTeam);
  var student3 = student.slice();
  var student2 = shuffleArray(student3);
  console.log("student2: "+student2);
  var arrays = chuck(student2, parseInt(num));

  console.log("arrays: "+arrays);

/*
  for(var i=0;i<arrays.length;i++){
      console.log(arrays[i]);

      var p = document.createElement('p');
      var nameOfTeam = "Team: "+(i+1);
      var name = document.createTextNode(nameOfTeam);
      p.appendChild(name);
      document.querySelector('#listTeam').appendChild(p);

      var el = document.createElement('div');
      var className = "subListTeam"+j;
      //console.log(className);
      el.classList.add(className);
      el.classList.add("tm");
      document.querySelector('#listTeam').appendChild(el);

      for(var j=0;j<arrays[i].length;j++){
        console.log(arrays[i][j]);
        var jackPotPerson = arrays[i][j];
        var ele = document.createElement('div');
       // className = 
        ele.classList.add("tm");
        var txt2 = document.createTextNode(jackPotPerson);
        ele.appendChild(txt2);
        // document.querySelector(".tm").appendChild(ele);
        el.appendChild(ele);
      }
      var hr = document.createElement('hr');
      document.querySelector('#listTeam').appendChild(hr);
    }*/
}

function addTeam(){
  var listTeam = document.getElementById('listTeam');
  while (listTeam.firstChild){
    listTeam.removeChild(listTeam.firstChild);
  }
  
  var student2 = student.slice();
  console.log("student2", student2);
  var num = document.querySelector(".teamText").value;
  console.log(parseInt(num));
  var numInTeam = student.length / parseInt(num);
  // console.log("student.length: " + student.length);
  // console.log(Math.floor(numInTeam));
  

  if(student.length>0){
    for(var j=0;j<num;j++){
      
        var p = document.createElement('p');
        var nameOfTeam = "Team: "+(j+1);
        var name = document.createTextNode(nameOfTeam);
        p.appendChild(name);
        document.querySelector('#listTeam').appendChild(p);
      
      var el = document.createElement('div');
      var className = "subListTeam"+j;
      console.log(className);
      el.classList.add(className);
      el.classList.add("tm");
      document.querySelector('#listTeam').appendChild(el);
      //for(var i=0;i<student.length;i++){
      for(var i=0;i<Math.floor(numInTeam);i++){
        console.log("i: "+ i + " student2.length: " + student2.length);
        var jackPotNum = Math.floor(Math.random() * student2.length);
        var jackPotPerson = student2[jackPotNum];
        student2.splice(jackPotNum,1);
        console.log(student2);
        var ele = document.createElement('div');
        //className = 
        ele.classList.add("tm");
        var txt2 = document.createTextNode(jackPotPerson);
        ele.appendChild(txt2);
        // document.querySelector(".tm").appendChild(ele);
        el.appendChild(ele);
        if(j==num-1 && i==Math.floor(numInTeam)-1 && student2.length>0){
          //jackPotPerson=student2[0];
          var ele = document.createElement('div');
          //className = 
          ele.classList.add("tm");
          var txt2 = document.createTextNode(student2[0]);
          ele.appendChild(txt2);
          // document.querySelector(".tm").appendChild(ele);
          el.appendChild(ele);
        }
      }
      var hr = document.createElement('hr');
      document.querySelector('#listTeam').appendChild(hr);
    }
  }else{
    var p = document.createElement('p');
    var nameOfTeam = "Please Add Student!";
    var name = document.createTextNode(nameOfTeam);
    p.appendChild(name);
    document.querySelector('#listTeam').appendChild(p);
  }


}

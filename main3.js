document.addEventListener("DOMContentLoaded", init);
var student = [];
var count = 0;
function init(){
  document.getElementsByClassName('addStu')[0].addEventListener('click', addStudent);
  document.getElementsByClassName('addTeam')[0].addEventListener('click', addTeam);
  document.getElementsByClassName('who')[0].addEventListener('click', findWho);
  document.getElementsByClassName('clear')[0].addEventListener('click', clear);

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

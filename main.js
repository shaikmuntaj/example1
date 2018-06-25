function loadJson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status==200)
    {
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
}
loadJson("data.json",function(text){
  let data= JSON.parse(text);
  console.log(data);
  fun_career(data.careerobjective);
  fun_education(data.education);
  fun_achievements(data.achievements);
  fun_skills(data.skills);

});
var div2=document.getElementById("child2");
function fun_career(career_obj){
  var list3=document.createElement("h2");
  list3.textContent="careerobjective";
  div2.appendChild(list3);
  var listt=document.createElement("hr");
  div2.appendChild(listt);

  var list=document.createElement("ul");
  div2.appendChild(list);
  var list6=document.createElement("p");
  list6.textContent=career_obj.info;
  list.appendChild(list6);
  var listts=document.createElement("hr");
  div2.appendChild(listts);


}
function fun_education(edu){


  var lis=document.createElement("h2");
  lis.textContent="Educational Qualifications";
  div2.appendChild(lis);
  var lists=document.createElement("hr");
  div2.appendChild(lists);

  //lis.hconte="educational qualifications";
var list=document.createElement("ul");
div2.appendChild(list);

for(var i=0;i<edu.length;i++){
  var listItem=document.createElement("li");

  listItem.textContent=edu[i].degree;
  list.appendChild(listItem);

  var listItem2=document.createElement("ul");
  listItem2.textContent=edu[i].Institute;
  list.appendChild(listItem2);

  var listItem3=document.createElement("ul");
  listItem3.textContent=edu[i].data;
  list.appendChild(listItem3);


}
}
function fun_achievements(ach){
  var list3=document.createElement("h2");
  list3.textContent="achievements";
  div2.appendChild(list3);
  var listt=document.createElement("hr");
  div2.appendChild(listt);
  var list=document.createElement("ul");
  div2.appendChild(list);
  for(var i=0; i<ach.length; i++){
    var listItem=document.createElement("li");
    listItem.innerHTML=ach[i].name;
    list.appendChild(listItem);
}
}
function fun_skills(tech){
  var head=document.createElement("h2");
  head.textContent="skills";
  div2.appendChild(head);
 var hr=document.createElement("hr");
  head.appendChild(hr);
  var tr="";
  var table=document.createElement("table");
    table.border=1;
  div2.appendChild(table);
  for(var i=0; i<tech.length; i++)
  {
    tr+="<tr><td>"+tech[i].name+"</td><td>"+tech[i].data+"</td><td>";

  }
  table.innerHTML=tr;

}

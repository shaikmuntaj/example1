function loadJson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  }
     xhr.send(null);
}
loadJson("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  fun_education(data.education);
});
var div2 = document.getElementById("child2");
function fun_education(edu){
  var h1=document.createElement("h1");
  h1.textContent="Eductional Qualification";
  div2.appendChild(h1);
  var underline=document.createElement("hr");
  div2.appendChild(underline);
  var list=document.createElement("ul");
  div2.appendChild(list);
  for(var i=0; i<edu.length; i++){
    var listItem=document.createElement("li");
    listItem.textContent=edu[i].institute;
    list.appendChild(listItem);
    var listItem=document.createElement("li");
    listItem.textContent=edu[i].data;
    list.appendChild(listItem);
  }
}

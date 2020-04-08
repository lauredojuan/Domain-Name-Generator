function myFunction() {
var p1= document.getElementById("P1").value;
var p2= document.getElementById("P2").value;
var p3= document.getElementById("P3").value;
var a1= document.getElementById("A1").value;
var a2= document.getElementById("A2").value;
var a3= document.getElementById("A3").value;
var n1= document.getElementById("N1").value;
var n2= document.getElementById("N2").value;
var n3= document.getElementById("N3").value;
var pronoun = []; 
var adj = [];
var noun = [];

if (p1 !=""){
	pronoun.push(p1);
}
if (p2 !=""){
	pronoun.push(p2);
}
if (p3 !=""){
	pronoun.push(p3);
}
if (a1 !=""){
	adj.push(a1);
}
if (a2 !=""){
	adj.push(a2);
}
if (a3 !=""){
	adj.push(a3);
}
if (n1 !=""){
	noun.push(n1);
}
if (n2 !=""){
	noun.push(n2);
}
if (n3 !=""){
	noun.push(n3);
}
  var WriteDomName = "";
  var i;
  var j;
  var k;
  for (i = 0; i < pronoun.length; i++) {
  	for(j = 0; j < adj.length; j++){
  	  for(k = 0; k < noun.length; k++){	

WriteDomName += pronoun[i] + adj[j] + noun[k] +".com" +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
  	document.getElementById("Nameline").innerHTML = WriteDomName;
  	
  	}		
  	  } 
        }
    
  	}
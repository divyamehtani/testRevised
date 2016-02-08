var myFirebaseRef = new Firebase("https://torrid-heat-1119.firebaseio.com/");
var x=window.location.hash.substring(1);

if(x=="news1"){
myFirebaseRef.child("abc").on("value", function(snapshot) {
  var abc=" "+snapshot.val();  
  document.getElementById("div2").innerHTML=abc;
  document.getElementById("div1").innerHTML=snapshot.name();
  
});}
else if(x=="news2"){
myFirebaseRef.child("xyz").on("value", function(snapshot) {
  var xyz=" "+snapshot.val();  
  document.getElementById("div2").innerHTML=xyz;
  document.getElementById("div1").innerHTML=snapshot.name();
});}
else if(x=="news3"){
myFirebaseRef.child("lmn").on("value", function(snapshot) {
  var lmn=" "+snapshot.val();  
  document.getElementById("div2").innerHTML=lmn;
  document.getElementById("div1").innerHTML=snapshot.name();
});}
else if(x=="news4s"){
myFirebaseRef.child("pqr").on("value", function(snapshot) {
  var pqr=" "+snapshot.val();  
  document.getElementById("div2").innerHTML=pqr;
  document.getElementById("div1").innerHTML=snapshot.name();
});}
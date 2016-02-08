var myFirebaseRef = new Firebase("https://torrid-heat-1119.firebaseio.com/");

myFirebaseRef.child("abc").on("value", function(snapshot) {
  var abc=" "+snapshot.val();  
  document.getElementById("dev1").innerHTML=abc;
  
});

myFirebaseRef.child("xyz").on("value", function(snapshot) {
  var xyz=" "+snapshot.val();  
  document.getElementById("dev2").innerHTML=xyz;
});
myFirebaseRef.child("lmn").on("value", function(snapshot) {
  var lmn=" "+snapshot.val();  
  document.getElementById("dev3").innerHTML=lmn;
});
myFirebaseRef.child("pqr").on("value", function(snapshot) {
  var pqr=" "+snapshot.val();  
  document.getElementById("dev4").innerHTML=pqr;
});
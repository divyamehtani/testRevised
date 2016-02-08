function validateForm() {
    var x = document.forms["val"]["email"].value;
	var y = document.forms["val"]["uname"].value;
	var z = document.forms["val"]["msg"].value;
	
    if (x == null || x == "" || y == null || y == "" || z == null || z == "") {
        document.getElementById("result").innerHTML="Please complete the form";
        return false;
    }
	 
	
	var eflag=0;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        document.getElementById("result").innerHTML="Please enter a valid email";
		eflag=1;
		
        return false;
    }
	
	var uflag=0;
	if (!/^[a-zA-Z]*$/g.test(y)) {
        document.getElementById("result").innerHTML="Please enter a valid name";
		uflag=1;
        
        return false;
    }
	
	if (eflag==0 && uflag==0 && z != null && x != null && x != "" && y != null && y != "" && z != null && z != "") {
        document.getElementById("result").innerHTML="Your mail has been sent";
        return false;
		}
}
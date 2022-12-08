/* JQuery function to check selected option value in burger size
 if Supersized selected return a health alert, return no alert for the other 2 selections */

 $(document).ready(function() {
	$("select.size").change(function() {
	  var selectedSize = $(".size option:selected").text();
	  if (selectedSize == "16oz Supersize - Price:17.50euro") {
		alert("You have selected Super-sized burger, it may have adverse health implications! ");
	  } else {
	  }
	});
});

/* showMsg function checks if any value was entered into the discount field (btndiscnt) 
 	Function creates an alert once the Apply button is clicked */
  
  function showMsg(){
	var myEntry =document.getElementById("btndiscnt");
	/*alert(myEntry.value.length);*/
	if (myEntry.value.length > 0){
	/* document.getElementById("Applied").innerHTML = "Discount has been applied!"; */
    alert("Discount has been applied!"); 
	}
}
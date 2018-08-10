
var formData = location.search;
formData = formData.substring(1, formData.length);
while (formData.indexOf("+") !== -1) {
    formData = formData.replace("+", " ");
}
formData = decodeURIComponent(formData);
var formArray = formData.split("&");
for (var i = 0; i < formArray.length; i = i + 1) {
    document.write("<p>" + formArray[i] + "</p>");
}
  /*Jquery*/
$(document).ready(function () {
   
 
    
        $("input").focus(function(){
            $(this).css("background-color", "#cccccc");
        });
        $("input").blur(function(){
            $(this).css("background-color", "#ffffff");
        });
        $("button").click(function(){
            $(".words").hide();
        });
        $("#show").click(function(){
            $(".words").show();
        });
        
        
});
 /*javascript*/
 document.getElementById("large").addEventListener("click", function(){
    alert("Hello friends");

});

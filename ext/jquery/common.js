$("#subscribe").click(function(){
    var email = $("#email").val();
    $.post("mymail.php",{mail:email}, function(data){
        alert(data);
    })
    
});
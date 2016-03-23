/**
 * Created by Monyk on 19.03.2016.
 */

$(document).ready(function()
{
    $("#notes").sortable(
        {
            cursor: "move",
            revert: true,
            scroll: false
        }
    );
    $("#notes").disableSelection();
    $("#note-creator input").resizable();
    $("#menu-button").click(function(){
        $("nav").toggle("slide",200);
        setTimeout(function() {
            $(document).mousedown(function(e){
                var target = $(e.target);
                if (target.is('nav') || target.parents('nav').length
                    || target.is('#menu-button') || target.parents('#menu-button').length)
                    return;
                $(document).unbind("mousedown", arguments.callee);
                $("nav").hide("slide",200);
            });
        },1);
    });
    $("#newnote").click(function(){
        $("#notename, #notemenu").show();
        $(document).mousedown(function(e){
            var target = $(e.target);
            if (target.is('#newnote') || target.parents('#newnote').length) return;
            $(document).unbind('mousedown', arguments.callee)
            $("#notename, #notemenu").hide();
        });
    });
    $("#notetextwr").on("input", function(){
        if (this.textContent!="") $("#plh2").hide();
        else $("#plh2").show();
    });
    $("#notenamewr").on("input", function(){
        if (this.textContent!="") $("#plh1").hide();
        else $("#plh1").show();
    });

})

$("#signoutbutton").click(
    function(){
    $.get("index.php/?ajax=signOut",
        function(data:string)
        {
            if(data == "Fine")
                window.location.replace("/?page=login");
            else
                alert("signout error");
        })}
);
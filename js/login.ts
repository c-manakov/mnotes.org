/**
 * Created by Monyk on 22.03.2016.
 */

$("#signinbutton").click(function()
{
    $.post("login/isAuthorizationCorrect",
    {
        email: $("#emailField").val(),
        password: $("#passwordField").val()
    },function(data:string)
        {
            if(data == "Fine")
            {
                window.location.replace("/main");
            }
            else
                alert("Authorization error");
        }
    )
}
)
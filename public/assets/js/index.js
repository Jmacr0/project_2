// Shorthand for $( document ).ready()
$(function () {
    console.log("ready!");

    $("#login-button").on("click", function () {
        console.log("clicked");
        //need to add some logic
    });

    // $("#login-button-proceed").on("click", function () {        
    //     //need to add some logic
    //     event.preventDefault();
    //     console.log("clicked");
    //     const usernameInput = $("#login-username").val().trim();
    //     const passwordInput = $("#login-password").val().trim();
        
    //     const checkUserExist = {
    //         username: usernameInput,
    //         password: passwordInput,
    //     };
    //     // Send the PUT request.
    //     $.ajax("/api/users/login", {
    //         type: "POST",
    //         data: checkUserExist
    //     }).then(
    //         function (data) {
    //             console.log("user has logged in: " + data);                
    //             // Reload the page to get the updated list
    //             // location.reload();
    //         }
    //     );   

    // });

    $("#sign-up-button").on("click", function () {
        //need to add some logic
        console.log("clicked");
    });

});
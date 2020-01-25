// Shorthand for $( document ).ready()
$(function () {
    console.log("ready!");

    $("#login-button").on("click", function () {
        console.log("clicked");
        //need to add some logic
    });

    $("#sign-up-button").on("click", function () {
        //need to add some logic
        console.log("clicked");
    });

    $("#sign-up-button-proceed").on("click", function () {
        //need to add some logic
        event.preventDefault();
        console.log("clicked");
        const firstNameInput = $("#sign-up-first-name").val().trim();
        const lastNameInput = $("#sign-up-last-name").val().trim();
        const usernameInput = $("#sign-up-username").val().trim();
        const passwordInput = $("#sign-up-password").val().trim();
        const confirmPasswordInput = $("#confirm-password").val().trim();
        const countryInput = $("#sign-up-country").val().trim();

        //check if passwords the same
        if (passwordInput !== confirmPasswordInput) {
            //return error
            return;
        } 

        const newUser = {
            username: usernameInput,
            password: passwordInput,
            firstName: firstNameInput,
            lastName: lastNameInput,
            country: countryInput
        };
        console.log(newUser);

        // Send the PUT request.
        $.ajax("/api/users", {
            type: "POST",
            data: newUser
        }).then(
            function (data) {
                console.log("created new user: " + data);                
                // Reload the page to get the updated list
                // location.reload();
            }
        );


    });
});
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
        const firstNameInput = $("#sign-up-first-name");
        const lastNameInput = $("#sign-up-last-name");
        const usernameInput = $("#sign-up-username");
        const passwordInput = $("#sign-up-password");
        const countryInput = $("#sign-up-country");
        const newUser = {
            username: usernameInput.val().trim(),
            password: passwordInput.val().trim(),
            firstName: firstNameInput.val().trim(),
            lastName: lastNameInput.val().trim(),            
            country: countryInput.val()
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
$(function () {
    $(".change-devoured").on('click', function (evt) {
        var id = $(this).data("id");
        var newDevoured = {
            devoured: $(this).data("devoured")
        };
        $.ajax('/api/burger/' + id, {
            type: "PUT",
            data: newDevoured
        }).then(function () {
            console.log('changed')
            location.reload();
        })
    })

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: 0
        }
        $.ajax('/api/burger', {
            type: 'POST',
            data: newBurger
        }).then(function () {
            console.log('done')
            location.reload();
        })
    })
})
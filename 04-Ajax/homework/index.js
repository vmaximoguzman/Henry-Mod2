const nuevoEl = (response) => {
    response.forEach(element => {
        $(`<li>${element.name}</li>`).appendTo("#lista");
    });
} //Escribo la función amigos antes (Para que no sea tanto código).

$("#boton").click(() => {
    $("#lista").empty(); //Borro la lista (Para que no se haga doble).
    $.get("http://localhost:5000/amigos", nuevoEl);

});

$("#search").click(() => {
    const id = $("#input")[0].value;
    $("#amigo").empty;

    $.get(`http://localhost:5000/amigos/${id}`, (response) => {
        $("#amigo").html(response.name);
    });
});

$("#delete").click(() => {
    const id = $("#inputDelete")[0].value;

    $.get(`http://localhost:5000/amigos/${id}`, (response) => {
        $("#success").html("Se ha eliminado a " + response.name);
    });
    

    $.ajax({
        url: `http://localhost:5000/amigos/${id}`,
        type: "DELETE",
        success: (result) => {
            $("#lista").empty();
            nuevoEl(result);
        }
    })

});
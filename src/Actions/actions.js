function fncInteraccionTest() {
    prmId = $("#hdnId").val();

    var vJsonAjax = {
        acc: "funcion_server_ejecutar",
        id: prmId
    };
    $.getJSON("include/procesos.php", vJsonAjax, function (data) {
        if (data.length > 0) {
            localStorage.setItem("codigo_perfil", data.codigo_perfil);

            $("#nombre").html(data.nombre);
            $("#titulo").html(data.titulo);
            $("#codigoPerfil").html(localStorage.getItem("codigo_perfil"));

            if (data.tipo == 8) {
                $("#divDatos").css("border-radius", "11px");
            } else {
                $("#divDatos").css("border-radius", "6px");
            }
            $("#divDatos").show();
        } else {
            $("#divDatos").hide();
        }
    });
}
$(() => {
    $.ajax({
        url: "assets/json/regioni.json",
        type: "get",
        dataType: "json",
        success: function (data) {
            $.each(data, (i, el) => {
                let regione = el.prov_regione;
                $("#regione").append(`<option value="${regione}">${regione}</option>`);
            });
        },
    });

    $("#regione").change(function () {
        $("#displayer").empty();
        $("#provincia").empty();
        $("#provincia").append(`<option value="selezionaProvincia">Seleziona Provincia</option>`);
        $.ajax({
            url: "assets/json/province.json",
            type: "get",
            dataType: "json",
            success: function (data) {
                $.each(data, (i, el) => {
                    let provincia = el.prov_nome;
                    let regione = el.prov_reg;
                    if (regione == $("#regione").val()) {
                        $("#provincia").append(`<option value="${provincia}">${provincia}</option>`);
                    }
                });
            },
        });
    });

    $("#provincia").change(function () {
        $("#displayer").empty();
        $.ajax({
            url: "assets/json/province.json",
            type: "get",
            dataType: "json",
            success: function (data) {
                $.each(data, (i, el) => {
                    let sigla = el.prov_it;
                    let provincia = el.prov_nome;
                    let regione = el.prov_reg;
                    let img = el.prov_url;
                    if (provincia == $("#provincia").val()) {
                        $("#displayer").append(`<h3>${regione}</h3>
                        <img class="stemma" src="${img}" />
                        <h3>${provincia} (${sigla})</h3>
                        <img class="stemma" src="assets/img/province/${provincia}.png" />`);
                    }
                });
            },
        });
    });
});

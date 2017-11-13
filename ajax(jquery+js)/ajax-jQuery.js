$(function () {
    $("#btn").click(function () {
        $.ajax({
            url: "ajax.json",
            dataType: "json",
            async: true,
            type: "GET",
            success: function (data) {
                $("#showContent").text(data.module);
            }
        })
    })
})
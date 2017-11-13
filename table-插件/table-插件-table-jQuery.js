(function ($) {
    $.fn.table = function (option) {

        $(this).empty();
        if (option["caption"]){
            var $title =  $("<caption></caption>").text(option["caption"]);
        }

        $(this).append($title);

        var $rowHead = $("<tr></tr>");
        for (var m=0; m<option['rowMudle'].length; ++m){
            var $rowevery =  $("<td></td>").text(option["rowMudle"][m].title);
            $rowHead.append($rowevery);
        }
        $(this).append($rowHead);

        for (var n=0;n<option["rowBody"].length;++n){
            var $rowB = $("<tr></tr>");
            for (var i=0;i<option["rowMudle"].length;++i){
                var $rowE = $("<td></td>").text(option["rowBody"][n][option["rowMudle"][i].code]);
                $rowB.append($rowE);
            }
            $(this).append($rowB);
        }
    }
})(jQuery)
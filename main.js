$(document).ready(function () {
    var counter = 2;

    $("#addrow").on("click", function () {
        var newRow = $("<tr>");
        var cols = "";

        // cols += '<td><input type="text" class="form-control" name="index' + counter + '"/></td>';
        cols += '<td class="text-center"> <span class="sl-no'+ counter +'"> </span> </td>';
        cols += '<td><input type="text" class="form-control" name="header' + counter + '"/></td>';

        cols += '<td><input type="button" class="ibtnDel btn btn-md btn-danger "  value="Delete"></td>';
        newRow.append(cols);
        $("table.order-list").append(newRow);
        $(`.sl-no${counter}`).html(counter);
        counter++;
    });



    $("table.order-list").on("click", ".ibtnDel", function (event) {
        $(this).closest("tr").remove();       
        counter -= 1
    });


});

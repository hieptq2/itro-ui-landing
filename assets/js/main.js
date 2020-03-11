$(document).ready(function () {
    //always open accordion on showcase block
    $('#Accordion-Showcase [data-toggle="collapse"]').on('click', function (e) {
        e.preventDefault();
        if (!$(this).hasClass('collapsed')) {
            e.stopPropagation();
            return false;
        }
    });
})
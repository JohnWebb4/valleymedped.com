$('#signUpElationThumb').click(function () {
    const source = $("#signUpElationVideo").attr('src');

    if (!source.match(/autoplay/)) {
        $("#signUpElationVideo").attr('src', source + '?autoplay=1');
    }

});

$('#signUpElationModal').click(function () {
    const source = $("#signUpElationVideo").attr('src');

    if (source.match(/autoplay/)) {
        $("#signUpElationVideo").attr('src', source.match(/.+(?=\?)/)[0]);
    }
});

$('#introElationThumb').click(function () {
    const source = $("#introElationVideo").attr('src');

    if (!source.match(/autoplay/)) {
        $("#introElationVideo").attr('src', source + '?autoplay=1');
    }

});

$('#introElationModal').click(function () {
    const source = $("#introElationVideo").attr('src');

    if (source.match(/autoplay/)) {
        $("#introElationVideo").attr('src', source.match(/.+(?=\?)/)[0]);
    }
});
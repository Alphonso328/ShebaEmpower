$(document).ready(function() {

    var userFeed = new Instafeed({
        get: 'user',
        userId: '178299469',
        limit: 9,
        resoulution: 'standard_resoulution',
        accessToken: '178299469.1677ed0.0e9c51b371f448788863b792e22cfac1',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 py-2 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });
    userFeed.run();

    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });

});
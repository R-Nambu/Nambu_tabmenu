$(function () {

 
    //selfタブメニュー
    $('.menu-tab a').on('click', function () {
        if ($(this).hasClass('active')) {
            return false;
        }

        console.log(this.hash);

        // var type = window.location.hash.substr(1);
        // console.log(type);

        // var urlHash = location.hash;
        // console.log(urlHash);

        // $('.image[src="assets/img/menu01.jpg"]').attr('src',"assets/img/" + type + ".jpg");

        $('.menu-tab a').removeClass('active');
        $(this).addClass('active');

        $('.menu-content > div').removeClass('active');
        $('.menu-content > div')
            .filter(this.hash)
            .addClass('active');

        return false;

 
    });


});
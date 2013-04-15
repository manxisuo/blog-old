(function($){
    $(function(){
        $('.code.code-js').each(function(){
            var pre = $(this).children('pre');
            if (pre.length) {
                pre.html(hightlineJsCode(pre.text()));
            }
            else {
                $(this).html(hightlineJsCode($(this).text()));
            }
        });
    });
})(jQuery);

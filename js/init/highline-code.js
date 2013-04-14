(function($){
    $(function(){
        $('.code.code-js').each(function(){
            $(this).html(hightlineJsCode($(this).text()));
        });
    });
})(jQuery);

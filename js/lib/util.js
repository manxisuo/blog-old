function hightlineJsCode(codes) {
    var result = codes;
    // String in ''
    result = result.replace(/('[^']*')/g, "<span class='string'>$1</span>");
    
    // String in ""
    result = result.replace(/("[^"]*")/g, "<span class='string'>$1</span>");
    
    // key word
    var keyword_regexp = /((break|case|catch|continue|default|delete|do|else|finally|for|function|if|instanceof|in|new|return|switch|this|throw|try|typeof|var|void|while|with)(\W))/g;
    result = result.replace(keyword_regexp, "<span class='keyword'>$2</span>$3");
    
    return result;
}

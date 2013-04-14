function hightlineJsCode(codes) {
    var result = codes;
    // String in ''
    result = result.replace(/('[^']*')/g, "<span class='code-string'>$1</span>");
    
    // String in ""
    result = result.replace(/("[^"]*")/g, "<span class='code-string'>$1</span>");
    return result;
}

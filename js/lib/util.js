function hightlineJsCode(codes) {
    var result = codes;
    // String in ''
    result = result.replace(/('[^']*')/g, "<span class='string'>$1</span>");
    
    // String in ""
    result = result.replace(/("[^"]*")/g, "<span class='string'>$1</span>");
    return result;
}

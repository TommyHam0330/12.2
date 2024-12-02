let selectBox = document.getElementById("selectBox")
let resultDiv = document.getElementById("result");

selectBox.addEventListener("change", function() {
    let select = selectBox.options[selectBox.selectedIndex].value;
    resultDiv.innerText = "좋아하는 과일은: " + select;
});
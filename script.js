let textbox = document.getElementById("textbox");

textbox.addEventListener('input', function() {
    var text = this.value;
    let char = text.length;
    document.getElementById("char").innerHTML = char;

    text = text.trim();
    let word = text.split(" ");
    let cleanWord = word.filter(function(elm) {
        return elm != "";
    });
    document.getElementById("word").innerHTML = cleanWord.length;
});

function changeTheme(color) {
    document.body.style.backgroundColor = color;
}
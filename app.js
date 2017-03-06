function anagram() {
    var firstWord, secondWord;
    var isAnagram = false;

    firstWord = prompt("Введите первое слово:");
    secondWord = prompt("Ввведите второе слово:");

    if(firstWord.split("").sort().join("") === secondWord.split("").sort().join("")) {
        isAnagram = true;
    }

    alert(isAnagram ? "Введенные слова являются анаграммой" : "Введенные слова не являются анаграммой");
}

function closure() {
    console.log("Замыкалити");
    for (var i = 0; i < 10; i++) {
        var a = i;
        setTimeout(function(i){
            console.log(i);
        }(i), 1000);
    }
}

anagram();
alert("Хэй! А теперь загляни в консоль....");
closure();
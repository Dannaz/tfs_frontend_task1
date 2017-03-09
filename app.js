doFirstTask();
alert("Хэй! А теперь загляни в консоль....");
doClosureTask();

function doFirstTask(){
    var firstWord, secondWord;

    firstWord = prompt("Введите первое слово:");
    secondWord = prompt("Ввведите второе слово:");

    alert(checkAnagram(firstWord, secondWord) ? "Введенные слова являются анаграммой" : "Введенные слова не являются анаграммой");
}

function checkAnagram(firstWord, secondWord) {
    firstWord = firstWord.toLowerCase().split("").sort().join("");
    secondWord = secondWord.toLowerCase().split("").sort().join("");

    return firstWord === secondWord;
}

function doClosureTask() {
    console.log("Замыкалити");

    for (var i = 0; i < 10; i++) {
        setTimeout(function(i){
            console.log(i);
        }(i), 1000);
    }

    console.log("Замыкалити 2.0");

    for (var i = 0; i < 10; i++){
        setClosureTimeout(i, 1000);
    }

}

function setClosureTimeout(arg, timeout){
    setTimeout(function(){
        console.log(arg)
    }, timeout);
}
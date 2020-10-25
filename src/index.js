module.exports = function check(str, bracketsConfig) {
  //  конфигурация скобок задана как 2мерный массив, используем map+join для получения для преобразования в строку каждого подмассива.
  let arr = bracketsConfig.map(function (item) {
    return item.join("");
  })
  // т.к. есть открывающая и закрывающая скобка то число проверок уменьшаем на 2
  let reducedLength = str.length / 2;
  let i = 0;
  //  цикл while: для подсчета общих проверок; цикл for: в случае если идет совпадение  элемента arr(который строка и получен с bracketsConfig), то происходит удаление совпадаемого элемента из str и т.к. далее.
  while (i < reducedLength) {
    for (let j = 0; j < arr.length; j++) {
      str = str.replace(arr[j], "");
    }
    i++;
  }
  // если все предыдущие проверки пройдены, то length=0
  return (str.length == 0) ? true : false;
}

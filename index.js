
// Реалізувати функцію генератор. Функція "Boo" повинна працювати так само , як "Foo"

function* Foo() {
  console.log('Foo: start')
  yield 1
  yield 2
  yield 3
  console.log('Foo: finish')
}

const iterator = Foo()

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// ******************************

function Boo() {
    console.log('\nboo: start');
    let num = 0;
      return {
        next: ()=> {
          num++
          if(num >= 4){
          console.log('boo: finish')
          return {value: undefined, done: true} 
        }
      return {value: num, done: false}
    }
  }
}

const iterator2 = Boo();
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());


const buttonOne = document.querySelector('.buttonOne');
const containerOne = document.querySelector('.containerOne');
const containerTwo = document.querySelector('.containerTwo');


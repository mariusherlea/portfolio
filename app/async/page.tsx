'use client';

let pizza: any;
let notify: any;

function orderPizza(callback: any) {
  notify = 'Ordering pizza';
  setTimeout(() => {
    pizza = 'Pizza calzon';
    callback();
  }, 2000);
}

function pizzaReady() {
  console.log(`Eat the ${pizza}`);
}

let callFriend = 'Call Bill';

export default function Async() {
  orderPizza(pizzaReady);

  return (
    <div>
      <h1>Async</h1>
      <p>(Open inspect and reload)</p>
      <p>{notify}</p>
      <p>{callFriend}</p>
    </div>
  );
}

// DOM 잡을때 만약 a태그 에 href 가 없을 수도 있다.
// ! 물음표를 사용해서 나를 믿고 따라오라는 사인을 보낸다.

// const anchor = document.querySelector("a")!;

// if(anchor){
//     console.log(anchor.href)
// }

// console.log(anchor.href);

const form = document.querySelector(".new-item-form") as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});

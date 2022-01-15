// type Aliases 타입 앨리아스

// 타입들을 정해줘서 간편하게 사용할수 있다.

type NumberOrString = number | string;
type UserType = { name: number; age: NumberOrString };
type UserObj = {
  id: number;
  title: string;
  path: string;
};

let aliasType = (a: number, b: NumberOrString) => {
  console.log(a, b);
};

let aliasTypeTwo = (a: number, b: NumberOrString) => {
  console.log(a, b);
};

let personName = (user: UserType) => {
  console.log(user);
};

let minjiObj = (user: UserObj): number => {
  console.log(user);
  return user.id;
};

personName({ name: 1, age: 32 });
minjiObj({ id: 1, title: "hoho", path: "yes" });

// 타입 적용하기 문제!!

type GanInfo = { company: string; where: string; easy: boolean };

const ganJob = (it: GanInfo): object => {
  return it;
};

ganJob({ company: "apple", where: "포항", easy: false });

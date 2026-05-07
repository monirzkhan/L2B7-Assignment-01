// Problem 1:

const filterEvenNumbers = (numbers: number[]): number[] => {
  return numbers.filter(num => num % 2 === 0);
};

filterEvenNumbers([1, 2, 3, 4, 5, 6]);

// Problem 2:

const reverseString = (str: string): string => {
  return str.split('').reverse().join('');
};

reverseString("typescript");

// Problem 3:

const checkType= (value: string | number): string | number => {
  if (typeof value === "string") {
    return 'String';
  } else {
    return 'Number';
  }
}

checkType("Hello");
checkType(42);


//problem 4:

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

const user = { id: 1, name: "John Doe", age: 21 };
getProperty(user, "name");



// Solution of Problem 1:

const filterEvenNumbers = (numbers: number[]): number[] => {
  return numbers.filter(num => num % 2 === 0);
};

filterEvenNumbers([1, 2, 3, 4, 5, 6]);



// Solution of Problem 2:

const reverseString = (str: string): string => {
  return str.split('').reverse().join('');
};

reverseString("typescript");



// Solution of Problem 3:

const checkType= (value: string | number): string | number => {
  if (typeof value === "string") {
    return 'String';
  } else {
    return 'Number';
  }
}

checkType("Hello");
checkType(42);



//Solution of Problem 4:

const getProperty = <T, X extends keyof T>(obj: T, key: X): T[X] => {
  return obj[key];
};

const user = { id: 1, name: "John Doe", age: 21 };

getProperty(user, "name");



//Solution of Problem 5:

interface Book{
    title: string;  
    author: string;
    publishedYear: number;
    
}

interface ReadStatus extends Book{
    isRead: boolean;        
}

const toggleReadStatus=(book: ReadStatus): ReadStatus => {
    return { ...book, isRead: !book.isRead };
}

const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024};


toggleReadStatus({ ...myBook, isRead: false});



//Solution of Problem 6:

class Person{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

class Student extends Person{
    grade: string;

    constructor(name: string, age: number, grade: string){
        super(name, age);
        this.grade = grade;
    }

    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}

const student = new Student("Alice", 20, "A");
student.getDetails();




//Solution of Problem 7:

const getIntersection = <T>(arr1: T[], arr2: T[]): T[] => {
    const secondArray = new Set(arr2);
    return arr1.filter(item => secondArray.has(item));
}

const array1 = [1, 2, 3, 4,5];
const array2 = [3, 4, 5, 6, 7];

getIntersection(array1, array2);

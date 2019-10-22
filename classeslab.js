// ## Question 1
// a. Write a class called `Person` that has 3 properties: a 
// first name, a last name and a middle name. Create 2 instances 
// of a `Person`. Print one of their first names.
class Person {
    constructor(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
    }
    fullName() {
        return this.firstName + " " + this.middleName + " " + this.lastName
    }
}
let Ashya = new Person("Ashya", "Lamina", "Manning")
let John = new Person("John", "Anthony", "Jones")
console.log(Ashya.firstName)

// b. Write a method in `Person` called `fullName` that will return 
// a formatted string of an instance's full name. Call this method 
// on both the instances you created in part a.
console.log(John.fullName())


// ## Question 2
// a. Create a class called `Book` that has properties `title`, 
// `author`and `rating`. Create some instances of `Book`.

class Book {
    constructor(title, author, rating){
        this.title = title
        this.author = author
        this.rating = rating;
    }

    isGood (){
        if(this.rating >= 7){
            return true
        } else {
            return false
        }
    }
}

let book1 = new Book ("catcher in the rye", "J. D Salinger", 5);
let book2 = new Book ("Game of Thrones", "George R Martin", 10);
let book3 = new Book ("How to kill a mockingbird", "Harper Lee", 7);

// b. Add a method to `Book` called `isGood` that returns `true` 
// if its rating is greater than or equal to 7

console.log(book1.isGood())
console.log(book2.isGood())


// ## Question 3

// a. Create a `Dog` class with four properties: `name (string), breed (string), 
// mood (string), and hungry (boolean)`.

class Dog {
    constructor(name, breed, mood, hungry) {
        this.name = name;
        this.breed = breed;
        this.mood = mood;
        this.hungry = hungry;
    }
    playFetch() {
        this.hungry = true
        this.mood = "playful";
        return "Ruff!"
    }
    feed() {
        if (this.hungry === true) {
            this.hungry = false;
            return "Woof!"
        } else {
            return "Dog doesn't look hungry"
        }
    }
    toString() {
        return this.name + " is a " + this.breed
    }
}

let bulldog = new Dog("Casper", "bulldog", "angry", false)
let germanShepard = new Dog("Spike", "German Shepard", "playful", false)
let poodle = new Dog("Tiny", "poodle", "happy", true)

// b. Add a method called `playFetch`. It should set the dog's `hungry` property to 
// `true`, set its mood property to `playful`, and log "Ruff!"

console.log(bulldog.playFetch())
console.log(bulldog)

// c. Add a method called `feed`. If the dog is hungry, it should set `hungry` to 
// `false` and print "Woof!" If the dog is not hungry, it should log "The dog doesn't 
// look hungry"

console.log(poodle.feed())
console.log(germanShepard.feed())

// d. Add a method called `toString` that returns a description of the dog:

console.log(germanShepard.toString())


// ## Question 4

// There are three common scales that are used to measure temperature: Celsius, Fahrenheit, 
// and Kelvin:

// C = (F - 32) / 1.8
// F = 1.8 * C + 32
// K = C + 273

// a. Make an object called `freezingPoint` that has three properties: `celsius`, 
// `fahrenheit`, and `kelvin`. Give them all values equal to the freezing point of water.

let freezingPoint = {
    celsius: 0,
    fahrenheit : 32,
    kelvin : 273.2
}
// b. Make a class called `Celsius` that has one property: 
// `celsius`, and two methods `getFahrenheitTemp`, and `getKelvinTemp`.

// ```js
// let outsideTempt = new Celsius(10.0)
// outsideTempt.celsius //returns 10.0
// outsideTempt.getKelvinTemp() //returns 283.0
// outsideTempt.getFahrenheitTemp() //returns 50.0
// ```

class Celsius {
    constructor(celsius){
        this.celsius = celsius;
    }

    getFahrenheitTemp (){
        return 1.8 * this.celsius + 32
    }

    getKelvinTemp(){
       return this.celsius + 273
    }
    isBelowFreezing (){
        if(this.celsius >= freezingPoint["celsius"]){
                return false
        } else {
            return true
        }
    }
}

let outsideTempt = new Celsius(-5.0)
console.log(outsideTempt.celsius)
console.log(outsideTempt.getKelvinTemp()) //returns 283.0
console.log(outsideTempt.getFahrenheitTemp()) //returns 50.0

// c. Give `Celsius` a method called `isBelowFreezing` that returns a
//  `Bool` (true if the temperature is below freezing).

console.log(outsideTempt.isBelowFreezing())


// ## Question 5

// a. Create a class called `Movie` that has properties for `name`, `year`, `genre`, 
// `cast`, and `description`. Create an instance of your `Movie`

class Movie {
    constructor(name, year, genre, cast, description) {
        this.name = name;
        this.year = year;
        this.genre = genre;
        this.cast = cast;
        this.description;
    }
    blurb() {
        return this.name + " was created in " + this.year + " and is a " + this.genre
    }
}

let movie1 = new Movie("Casper", 1993, "non-fiction", "ghost", "kid-friendly")
let movie2 = new Movie("Hunger Games", 2009, "non-fiction", "Jennifer Lawrence", "action")

// b. Create an method inside `Movie` called `blurb` that returns a formatted string describing the movie.

console.log(movie1.blurb())


// ## Question 6

// Write a class Vector that represents a vector in two-dimensional space.
// It takes two number arguments: `x` and `y` parameters, which it should be saved to properties of the same name.

// Give the Vector prototype two methods, `plus` and `minus`, that take another vector as an argument and
// returns a new vector that has the sum or difference of the two vectors’ (the one in `this` and the parameter) x and y values.

// Add a method `getLength` to the prototype that computes the length of the vector ;
// that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)

// [Vectors at mathisfun.com](https://www.mathsisfun.com/algebra/vectors.html)

// ```js
// var v1 = new Vector(1, 2)
// var v2 = new Vector(2, 3)
// console.log(v1.plus(v2));
// // => Vector {x: 3, y: 5}
// console.log(v1.minus(v2));
// // => Vector {x: -1, y: -1}

// var v3 = new Vector(3, 4)
// console.log(v3.getLength());
// // => 5
// ```

class Vector{
    constructor(x,y){
        this.x = x;
        this.y = y;
    } 
    plus(vector){
        let nX = this.x + vector.x;
        let nY = this.y + vector.y;
        let nVex = new Vector(nX, nY)
        return nVex
    }

    minus(vector){
        let nX = this.x - vector.x;
        let nY = this.y - vector.y;
        let nVex = new Vector(nX, nY)
        return nVex
    }
}



let samplevex = new Vector(10,2);
let samplevex2 = new Vector(4,5);

console.log(samplevex.plus(samplevex2))


// ## Question 7

// a. Write a class called `Cylinder` that has properties 
// `radius` and `height`.  Create an instance of a Cylinder.
class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }
    getVolume() {
        let volume = Math.PI * Math.pow(this.radius, 2) * this.height
        return Math.floor(volume)
    }
}

let triCylinder = new Cylinder(10, 15)

// b. Add an instance method `getVolume` that returns 
// the [volume](https://www.mathopenref.com/cylindervolume.html)

console.log(triCylinder.getVolume())
// console.log(Math.PI)
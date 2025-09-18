class student{
    //create constructor
    constructor(name, course){
        this.name = name;
        this.course = course;
    }

    //introduce method
    introduce(){
        console.log("Hi I am " + this.name + " and I study " + this.course);
    }
}

//create object
var s1 = new student("Janeza Malaya", "Information Technology");
s1.introduce();

var s2 = new student("Grace", "BSBA");
s2.introduce();
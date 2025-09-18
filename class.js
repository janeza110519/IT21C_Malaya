class Animal{
    constructor(name,act){
        this.name=name;
        this.act=act;
    }
    Doing(){
        console.log(this.name + " is " + this.act);
    }
}

let dog1 = new Animal("Dog ", " eating. ");
dog1.Doing();

let dog2 = new Animal("Dog ", " sleeping. ");
dog2.Doing();

let dog3 = new Animal("Dog ", " playing. ");
dog3.Doing();
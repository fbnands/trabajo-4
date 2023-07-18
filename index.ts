const myName: string = "fabian"
const numBerFavorite: string = "11"  

let myArray: string[] = ["dog", "cat", "snake","monkey","tourtle" ,"cow","tigger","hen","chiken","lion"];


interface orGanization  {

    firstname : string ;
    slogan : string ;
    employers : number ;
    atenttion : any  
    remote : boolean 
    creation : any 


}

class orGanization  implements orGanization {
    
    firstname: string;
    slogan: string;
    employers: number;
    atenttion: any;
    remote: boolean;
    creation: any;

    constructor(firstname: string, slogan: string, employers: number, atenttion: any, remote: boolean, creation: any) {
        this.firstname = firstname;
        this.slogan = slogan;
        this.employers = employers;
        this.atenttion = atenttion;
        this.remote = remote;
        this.creation = creation;
      }
}


interface students {

    twoname : string;
    twoage  : number;
    course  : number;
    direction : any ;





}

class students {

    twoname : string;
    twoage  : number;
    course  : number;
    direction : any ;

    constructor (twoname: string, twoage: number, course: number, direction: any) {

        this.twoname = twoname;
        this.twoage  = twoage;
        this.course  = course;
        this.direction = direction;
    
    }

}

interface raDio {

    A:  number;
    pi: any;
    d : number;
    r : number;
    c : number;
}

class bAll {

    A:  number;
    pi: any;
    d : number;
    r : number;
    c: any;
    constructor( A : any, pi : any, d : number, r: number, c: any) {
        this. A = A;
        this.pi = pi;
        this.d  = d;
        this.r  = r;
        this.c = c;

    }
}

interface circle  {

    radius:number;

}

const A = [];
const pi = 3.14;
const d  = 10;
const r  = d ** 10;



function raDio ( A = pi * d) : circle {
    return raDio (A)
}

interface numberOne {

    numberOne: number;
    numberTwo: number;
    numberThre: number;
    max : number;

}
 class numberOne {

    numberOone: number;
    numberTwo: number;
    numberThre: number;
    max : number;

constructor(numberOne: number, numberTwo: number, numberThree: number, max : number) {
    this.numberOone= numberOne;
    this.numberTwo= numberTwo;
    this.numberThre= numberThree;
    this.max = max;
}
 }

 const numberOone= 11;
 const numberTwo= 12;
 const numberThree= 13;
 

 function max () {

  let max = numberThree

  if (numberThree > numberOone ) {
    max = numberThree
  }

  if (numberThree > numberTwo) {
    max = numberThree
  }

  return  (max)

 }


const oneName =  "fabian";

function twoName() {

    console.log("hola soy"+"")

}

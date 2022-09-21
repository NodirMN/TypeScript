let a: number = 4;
let b: string = 'Hello World';
let c = true;

let d: string[] = ['Nodir', 'Aziz']

let e: any = 4
e='Nodir'


function test(a:string):string | number {
    return ''
    
}


const test2 = (a:number):number=>{
    return a+2
}

d = d.map((x:string) => x.toLocaleLowerCase())


function countCord(coord:{lat:number, long?:number}) {
    
}


function printIt(id:number | string){
    if (typeof id == 'number') {
        console.log(id.toString());
    }else if (typeof id == 'string'){
        id.toLocaleUpperCase()
    }
}
let p =100; //block scope
console.log("value of p outside of block = ",p)


{
    //block 1
    console.log("value of p inside block = ",p)
    let q = 120 ;//block scope
    console.log("value of q inside block = ",q)
}

//console.log("value of q outside block = ",q) //error...
{
    //block2
    //console.log("value of q inside block2 = ",q) //error
}


let a =100;
console.log("value of a = ",a)
//let a =200; //compile time error


// var b =100;
// let b =200; //error







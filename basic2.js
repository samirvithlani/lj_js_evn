//var let const...

var no = 100; //global scope
console.log("value of no outside of block = ",no)

//block..
{
    //block 1
    console.log("value of no inside block = ",no)

    var no2 =120; //inside block --> global scope
    console.log("value of no2 inside block = ",no2)
}
console.log("value of no2 outside block = ",no2)

//you cant decalre same variable name in c language

var x =100;
console.log("value of x = ",x)
var x =200;
console.log("value of x = ",x)

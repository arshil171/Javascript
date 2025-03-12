// simpale pattern 



for ( let i = 1;i<=5;i++ ) {
    let str =""
    for(let j = 1;j<=i;j++ )
    {
       str+="*"
    }
    console.log(str);
}


// right side patter 

for (let i = 1; i <= 5; i++) {
    let str = "";
    for (let j = 5; j >= i; j--) {
        str += " ";
    }
    for (let k = 1; k <= i; k++) {
        str += "*";
    }
    console.log(str);
}
 // Q-1 


 let num = 15;
 for (let i = 1; i <= num; i++){
    if (i % 2 == 0 ||  i % 5 == 0)
    {
        console.log(i);
    }
 }

 // Q-2

 let num1= 3;
 for (let i = 1; i <= 10 ; i++){
    console.log(num1 + " x " + i + " = " + num1 * i );
   
 }

 // Q-3

 for ( let i = 1;i<=5;i++ ) {
    let str =""
    for(let j = 1;j<=i;j++ )
    {
       str+="*"
    }
    console.log(str);
}


 // Q-4

 let num2 = 6;
 sum=0;
 for(let i = 1; i<=num2; i++ ){
    if (i % 2 == 0 )
    {
        console.log(i);
        sum = sum +i;

        
        
       
        // return sum+=i
        // if ( = num2)
        // {
        //     console.log(num2  + "It is perfect Number")
        // }
        // else{
        //     console.log(num2  + "It is not perfect Number")
        // }
        
        
    }
   
    
 }
 console.log(sum);

 if (sum == num2)
    {
        console.log(num2  + "It is perfect Number")
    }
    else{
        console.log(num2  + ""+" is not perfect Number")
    }


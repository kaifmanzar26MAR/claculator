let array=[];
function solve(op,sol1,sol){
    if(op==='+'){
        return sol1+sol;
    }else if(op==='-'){
        return sol1-sol;
    }else if(op==='/'){
        return sol1/sol;
    }else if(op==='*'){
        return sol*sol1;
    }else if(op==='^'){
        return sol1**sol;
    }
}
var solution1=0;
let ans='';
let ans1;
var pre='';
var i=0;
function print(n){

// var temp='';

    if(n==='AC'){
        document.querySelector('.d').textContent=""; 
        ans='';
        ans1='';
        pre='';
    }else if(n==='='){
        if(pre!=''){
            ans1=solve(pre,Number(ans1),Number(ans));
        }
        document.querySelector('.d').textContent=ans1;
    }else if(n==='+' || n=='-' || n=='*' || n=='/' || n=='^'){
        if(pre!=''){
            console.log('ans1 '+ans1);
            ans1=solve(pre,Number(ans1),Number(ans));
        }else{
            ans1=ans;
        }
        pre=n;
        ans='';
        document.querySelector('.d').textContent+=n; 
        array[i++]=document.querySelector('.d').textContent;
    
    }else if(n=='X'){
        document.querySelector('.d').textContent=array[--i];
    }
    else{
        document.querySelector('.d').textContent+=n;
        array[i++]=document.querySelector('.d').textContent;
        console.log(array);
        ans+=n;
        console.log(ans);
    }
}
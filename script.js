// Generate Number
document.getElementById("generate").addEventListener('click',function(){
    var generateCode = Math.floor(1000+Math.random()*9000);
    document.getElementById("display-code").value = generateCode;
})


function getNumber(num){ 
    let number = num;
    let displayNumber = document.getElementById('input-code');
    let displayValue = displayNumber.value;
    let valueLen =displayValue.length;
    if(valueLen< 4){ 
        document.getElementById('input-code').value += number;
    }
}


function clear(clearInput){ 
    let matchNumber = document.getElementById('input-code');
    let matchValue = matchNumber.value;

    if(clearInput === "C"){ 
        document.getElementById('input-code').value = '';
    }
    if(clearInput == "<"){
        document.getElementById('input-code').value = matchValue.slice(0, -1);
    }
}


 function submitNumber(){ 
    let generateNumber = document.getElementById('display-code');
    let generateValue = generateNumber.value;

    let matchNumber = document.getElementById('input-code');
    let matchValue = matchNumber.value;

   
    if( generateValue == matchValue && generateValue != ''){ 
        document.getElementById('success').style.display = 'block';
        document.getElementById('error').style.display = 'none';
        document.getElementById('input-code').value = '';
        document.getElementById('display-code').value = '';
        document.getElementById('try-count').innerText = 3;
        document.querySelector('.pin-generator').style.marginRight = '-115555550px';
       
    }else{ 
        document.getElementById('error').style.display = 'block';
        document.getElementById('success').style.display = 'none';
        let tryCount = document.getElementById('try-count');
        let tryCountValue = tryCount.innerText;

        if(tryCountValue > 0 ){ 
            document.getElementById('try-count').innerText = tryCountValue -1;
        }
        if(tryCountValue == 1){ 
            document.getElementById('submit').style.background = 'red';
            document.getElementById('submit').disabled = true;
        }
    }
   

}


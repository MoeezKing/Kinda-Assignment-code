function validate(){
    var pass = document.getElementById('pass1');
    var up = document.getElementById('upper');
    var low = document.getElementById('lower');
    var special = document.getElementById('special_char');
    var num = document.getElementById('number');
    var len = document.getElementById('length');

    if(pass.value.match(/[0-9]/)){
        num.style.color = 'yellow'
    }else{
        num.style.color = 'black'
    }

    if(pass.value.match(/[A-Z]/)){
        up.style.color = 'yellow'
    }else{
        up.style.color = 'black'
    }

    if(pass.value.match(/[a-z]/)){
        low.style.color = 'yellow'
    }else{
        low.style.color = 'black'
    }

    if(pass.value.match(/[!\@\#\$\%\^\&\*\(\)\-\+\=\_\?\<\>\.\,]/)){
        special.style.color = 'yellow'
    }else{
        special.style.color = 'black'
    }

    if(pass.value.length < 6){
        len.style.color = 'black'
    }else{
        len.style.color = 'yellow'
    }
}
var forms = document.getElementById('forms');
forms.addEventListener('submit',(e) => {
    e.preventDefault();
})
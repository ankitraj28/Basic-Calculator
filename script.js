let string = "";
let buttons = document.querySelectorAll('.button');
let flag = true;
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        let temp = e.target.innerHTML;
        if(temp == '='){
            string = eval(string);
        }
        else if(temp == 'AC'){
            string = "";
            flag = false;
        }
        else if(temp == 'CE'){
            string = string.substring(0, string.length - 1);
            flag = false;
        }
        else{
            let operator = temp == '+' || temp == '-' ||
            temp == '/' || temp == '*' ||
            temp == '%';
            if(operator){
                if(!flag){
                    flag = true;
                }
                else{
                    string = string.substring(0, string.length - 1);
                }
            }
            else{
                flag = false;
            }
            string+=temp;
        }
        document.querySelector('input').value = string;
    })
})

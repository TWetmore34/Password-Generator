const alphabet =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers =  '1234567890';
const special =  "!@#$%^&*_-+=";
let password = '';
let temp = '';

document.getElementById('generate').addEventListener('click',handleClick);

function handleClick() {
    temp = '';
    password = '';
    let len = prompt('How long would you like password to be (8-128)?');

    if(len < 8 || len > 128) {
        alert("Please choose a length between 8 and 128");
        return
    }
    let lower = confirm('Would you like lowercase?');
    let upper = confirm('Would you like uppercase?');
    let num = confirm('Would you like numbers?');
    let spec = confirm('Would you like special characters?');
    
    
    

    if(lower) {temp += lowerCase;}
    if(upper) {temp += alphabet;}
    if(num) {temp += numbers;}
    if(spec) {temp += special;}

    function loop() {

        if(lower) {
            password += lowerCase[Math.floor(Math.random()*lowerCase.length)]
        } else {
            password = '';
        };

        if(upper) {
            password += alphabet[Math.floor(Math.random()*alphabet.length)]  
        } else {
            password = '';
        };

        if(num) {
            password += numbers[Math.floor(Math.random()*numbers.length)]       
        } else{
            password = ';'
        };
        
        if(spec) {
            password += special[Math.floor(Math.random()*special.length)]
        } else{
            password = '';
        };

        for (let i = password.length; i < len; i++) {
            password += temp[Math.floor(Math.random()*temp.length)]
        };
    }
    loop();

    function shuffleMe () {
        let arr = password.split("");
        for (i = len; i > 0; i--) {
          let j = Math.floor(Math.random()*arr.length);
          let temp = arr[i]
          arr[i] = arr[j];
          arr[j] = temp;
        }
        password = arr.join("");
      }
      shuffleMe();

    document.getElementById('password').innerText = password;
}

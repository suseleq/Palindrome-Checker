let palindrone;

const infoPalindrome = document.querySelector('.info');
const input = document.querySelector('.input');
const button = document.querySelector('.btn');
const infoBox = document.querySelector('.info-text')

button.addEventListener('click', checkPalindrome);
input.addEventListener('keyup', () =>{
    infoBox.classList.remove('active');
    infoPalindrome.innerHTML = '';
});

function checkPalindrome(){
    if (input.value == '') {
        infoBox.classList.add('active');
    } else {
        palindrone = input.value;
        let filteredPalindrome = palindrone.split(' ').join('');
        let reversePalindrome = filteredPalindrome.split('').reverse().join('');
        if (filteredPalindrome != reversePalindrome) {
            infoPalindrome.innerHTML = `<span class="palindrome">'${palindrone}'</span> is not palindrome`;
        } else {
            infoPalindrome.innerHTML = `<span class="palindrome">'${palindrone}'</span> is palindrome`;
        }
    }
}
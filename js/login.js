// step-1:
document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2:
    const emailField = document.getElementById('user-email');
    const email = emailField.value ;
    
    const passwardField = document.getElementById('user-passward');
    const passward = passwardField.value ;
    if(email === 'sontan@baap.com' && passward === 'secure'){
        location.href = 'bank.html'
    }
    else{
        alert ('Your information is invalid')
    }
})









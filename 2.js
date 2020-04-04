function usernameCheck(username) {
    let syarat1 = /[A-Z]/g;
    let syarat2 = /[a-z]/g;
    let syarat3 = /[0-9]/g;
    let syarat4 = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g;

    if (!(username.length < 7) && !(username.length > 7)) {
        if (username.match(syarat1) && !username.match(syarat2) && !username.match(syarat3) && !username.match(syarat4)) {
            return true
        }
    }
    return false;
}

function passwordCheck(password) {
    let syarat1 = /[A-Z]/g;
    let syarat2 = /([a-z])/g;
    let syarat3 = /[0-9]/g;
    let syarat4 = /[#]/g;

    if (!(password.length < 9) && !(password.length > 15)){
        if (password.match(syarat1) && password.match(syarat2) && password.match(syarat3) && password.match(syarat4)) {
            console.log(true);
        } else {
            console.log(false);
        }
    } else {
        console.log(false);
    }
}
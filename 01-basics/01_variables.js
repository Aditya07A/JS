const accountId =  12345;
let accountEmail = "adi@gmail.com";
var accountPassword = "78910";
accountCity = "Hyderabad";
let accountState;



// accountId2 = 67890;  not allowed
console.log(accountId);
accountEmail = "ad@ad.com";
accountPassword = 787878;
accountCity = "Bengaluru";
console.table([accountId,accountEmail,accountPassword,accountState,accountCity]);

/*
prefer not to use var because issue in block scope and functional scope
*/
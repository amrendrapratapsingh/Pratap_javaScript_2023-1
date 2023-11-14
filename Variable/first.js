const accountId = 44777123;
let accountEmail = "pratap@google.com" ;
var accountPassword = "123456";
let accountState;
    accountCity = "Varanasi";

    // accountId =  445693;
    console.log(accountId);

    /*
    prefer not use var
because var  keyword issues in block scope and function function
    */

/*
  console result

  ┌─────────┬─────────────────────┐
│ (index) │       Values        │
├─────────┼─────────────────────┤
│    0    │      44777123       │
│    1    │ 'pratap@google.com' │
│    2    │     'Varanasi'      │
│    3    │      undefined      │
*/

    console.table([accountId,accountEmail,accountCity,accountState]); 
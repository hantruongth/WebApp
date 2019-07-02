(function(){
    "use strict";

    const accountCreator = (function(){
        let accountName;
        let amount;
        return {createAccount: function(name, amt){
            accountName = name;
            amount = amt;
            return {name: accountName, balance: amount};
            }
        }
    })();

    const accountInfoList = [];
    
    function createNewAccount(){
        let accountName = document.getElementById("accountName").value;
        let amount = document.getElementById("deposit").value;
        if(accountName === '' || amount == '')
            return;
        let displayArea = document.getElementById("textarea");
        let createAccountBtn = document.getElementById("createAccountBtn");
        const newAcct = accountCreator.createAccount(accountName, amount);
        accountInfoList.push(newAcct);
        
        let data = "";
        for(let acct of accountInfoList){
            data += "Account Name: "+ acct.name +"   " + "Balance: "+ acct.balance + "\n\n";
        }
        displayArea.value = data;
    }
    window.onload = function() {

        createAccountBtn.onclick = createNewAccount;
    }

})();
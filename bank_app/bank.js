class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
            console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
        }
    }

    getBalance() {
        return this.balance;
    }

    displayAccountInfo() {
        console.log(`
        Account Number: ${this.accountNumber}
        Owner Name: ${this.ownerName}
        Balance: $${this.balance}
        `);
    }
}

//create two instance
const account1 = new BankAccount(1234, "Uttam Sharma", 500);
const account2 = new BankAccount(5678, "Akash Hossain", 1000);


//account-1
console.log("Initial Account Information(Account 1):");
account1.displayAccountInfo();

console.log("\nDeposit and withdraw from account 1:");
account1.deposit(200);
account1.withdraw(100);
console.log("\nTrying to take out more money than what's in account 1:");
account1.withdraw(700); 

console.log("\nUpdated Account Information:");
account1.displayAccountInfo();


//account-2
console.log("Initial Account Information(Account 2):");
account2.displayAccountInfo();

console.log("\nDeposit and withdraw from account 2:");
account2.deposit(300);
account2.withdraw(150);

console.log("\nUpdated Account Information:");
account2.displayAccountInfo();

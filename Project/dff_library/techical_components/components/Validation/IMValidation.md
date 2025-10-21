

## Installation

Using npm:
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

## Check Bank Account Valid or Not 
## Account Number is grater than 9 digits
## Use  Method -- isValid_Bank_Acc_Number
## Eg.- isValid_Bank_Acc_Number('9876543210') Pass account number & result comes in boolean like as TRUE OR FALSE


## Check Email Valid or Not
## Use  Method -- isValid_Email
## Eg.- isValid_Email('email@gamil.com')  Pass Email ID & result comes in boolean like as TRUE OR FALSE


## Check Mobile 10 digit or Not 
## Mobile Number start with 6,7,8,9
## Use  Method -- isValid_Mobile
## Eg.- isValid_Mobile('9876543210')  Pass Email ID & result comes in boolean like as TRUE OR FALSE

## Check Text Input length
## Use  Method -- validate_InputCharacter_Limit
## Eg.- validate_InputCharacter_Limit('abcdefg', 10)  Pass any string & textLimit  & result comes in string 


## Check Enter amount with Range of MIN & MAX amount
## Use  Method -- validate_AmountLimit
## Eg.- validate_AmountLimit(1200,1000,5000)  Pass amount with range of minAmount & maxAmount result comes in string 


## Check Date format valid or Not
## Use  Method -- isValid_Date
## Eg.- isValid_Date('12/10/1990')  Pass Dates & result comes in boolean like as TRUE OR FALSE check date with below formats
```
YYYY-MM-DD,
YYYY/MM/DD,
MM/DD/YYYY,
MM-DD-YYYY,
DD/MM/YYYY,
DD-MM-YYYY,
ISODate Eg. 2019-11-15T13:34:22.178Z,
ISODate Eg. 2013-08-11T17:22:04.51+01:00
 DD MMM YY
 DD MMM 
```


## Check Amount with 2 decimals
## Use  Method -- amount_hasTwoDecimal_Places
## Eg.- amount_hasTwoDecimal_Places('100')  Pass amount  & result comes in boolean like as TRUE OR FALSE

```
10. false
10.000 false
10 true
10.00 true
``

## Convert to Date format of DD MMM YY & DD MMM
## Use  Method -- formatDate_DDMMMYY_DDMMM
## Eg.- formatDate_DDMMMYY_DDMMM("2019-11-15T13:34:22.178Z")  Pass Date & result comes in String like as 15 Nov 2019  
## 15 Nov => just pass false Eg.- formatDate_DDMMMYY_DDMMM("2019-11-15T13:34:22.178Z", false)

## check date with below formats

```
ISODate Eg. 2019-11-15T13:34:22.178Z,
ISODate Eg. 2013-08-11T17:22:04.51+01:00
```

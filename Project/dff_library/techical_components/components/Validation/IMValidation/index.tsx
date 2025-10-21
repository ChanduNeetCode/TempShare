export const isValid_Bank_Acc_Number = (bank_account_number: string) => {
  let accountRegex = /^[0-9]{9,18}$/;
  if (bank_account_number == null) {
    return false;
  }
  if (accountRegex.test(bank_account_number) == true) {
    return true;
  } else {
    return false;
  }
};

export const isValid_Email = (email: string) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (!email) {
    return false;
  }
  if (emailRegex.test(email)) {
    return true;
  } else {
    return false;
  }
};

export const isValid_Mobile = (mobileNumber: string) => {
  const phoneRegex = /^[6789]\d{9}$/;
  if (!mobileNumber) {
    return false;
  }
  if (phoneRegex.test(mobileNumber)) {
    return true;
  } else {
    return false;
  }
};

export const validate_InputCharacter_Limit = (
  inputString: string,
  limit: number,
) => {
  if (inputString.length > limit) {
    return `Max ${limit} characters allowed`;
  } else {
    return 'Success';
  }
};

export const amount_hasTwoDecimal_Places = (amount: string) => {
  const amountRegex = /^-?\d+(\.\d{1,2})?$/;

  if (!amount) {
    return 'Enter Amount';
  }

  if (amountRegex.test(amount)) {
    return true;
  } else {
    return false;
  }
};

export const validate_AmountLimit = (
  amount: number,
  minAmount: number,
  maxAmount: number,
) => {
  if (amount === 0) {
    return 'Enter Amount';
  }

  if (amount >= minAmount && amount <= maxAmount) {
    return 'Success';
  } else {
    return `${amount} Should be in between ${minAmount} and ${maxAmount}`;
  }
};

export const indianNumberFormat = (amount: number) => {
  return amount.toLocaleString('en-IN');
};

export const isValid_Date = (dateFormat: string) => {
  const datesRegex = [
    /^\d{4}-\d{2}-\d{2}$/, //YYYY-MM-DD
    /^\d{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])$/, // YYYY/MM/DD
    /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/, // MM/DD/YYYY
    /^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-(\d{4})$/, // MM-DD-YYYY
    /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/, // DD/MM/YYYY
    /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(\d{4})$/, // DD-MM-YYYY
    /^[0-9]{4}-((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01])|(0[469]|11)-(0[1-9]|[12][0-9]|30)|(02)-(0[1-9]|[12][0-9]))T(0[0-9]|1[0-9]|2[0-3]):(0[0-9]|[1-5][0-9]):(0[0-9]|[1-5][0-9])\.[0-9]{3}Z$/, // ISODate Eg. 2019-11-15T13:34:22.178Z
    /(\d{4}-\d{2}-\d{2})[A-Z]+(\d{2}:\d{2}:\d{2}).([0-9+-:]+)/gm, // 2013-08-11T17:22:04.51+01:00
    /^\d{1,2} [a-zA-Z]{3,4} (\d{2})$/, // DD MMM YY
    /^\d{1,2} [a-zA-Z]{3,4}$/, // DD MMM
  ];

  const isValidFormat = datesRegex.some(patterns => patterns.test(dateFormat));
  return isValidFormat;
};

enum formatYear {
  DDMMYYYY = 'DDMMYYYY',
  DDMM = 'DDMM',
  DDMMYY = 'DDMMYY',
}

export const formatDate_DDMMMYY_DDMMM = (
  inputDate: string,
  _formatYear?: formatYear.DDMMYYYY | string,
) => {
  const date = typeof inputDate === 'string' ? new Date(inputDate) : inputDate;

  if (isNaN(date.getTime())) {
    throw new Error('Invalid date format');
  }
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const dd = String(date.getDate()).padStart(2, '0');
  const mmm = monthNames[date.getMonth()];
  const yy = date.getFullYear().toString().slice(-2);

  //const yy = date.getFullYear();
  switch (_formatYear) {
    case formatYear.DDMMYY:
      return `${dd} ${mmm} ${`'`}${yy}`;
    case formatYear.DDMMYYYY:
      const yyyy = date.getFullYear();
      return `${dd} ${mmm} ${`'`}${yyyy}`;
    case formatYear.DDMM:
      return `${dd} ${mmm}`;
  }
};

import padEnd from 'lodash/padEnd';

export const parseIssueDate = (issueDate, issueDateFormat) => {
  const issueDateFormatArray = issueDateFormat.split('/');
  const issueDateArray = issueDate ? issueDate.split('/') : [];
  let date = [];

  issueDateFormatArray.forEach((dateElement, i) => {
    const dateFormatElementLength = dateElement.length;
    const issueDateElement = issueDateArray[i];
    date = [...date, padEnd(issueDateElement || '', dateFormatElementLength, '•')];
  });

  return date.join('/');
};

export const padNumber = (memberNumber, length) => padEnd(memberNumber, length, '•');

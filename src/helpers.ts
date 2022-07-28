import readlineSync from 'readline-sync';

class InvalidInputError implements Error {
  name = 'Invalid Input';
  message = '无效输入 Invalid Input';
}

const readNumber = (question: string): number => {
  const rawInput = readlineSync.question(question);
  const rawNumber = Number(rawInput);
  if (rawNumber === NaN) {
    throw new InvalidInputError();
  }
  return rawNumber;
}

export { readNumber };
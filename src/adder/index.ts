import Algorithm from "../algorithm";
import { readNumber } from "../helpers";

// Actually for testing the flow
class Adder implements Algorithm {
  cnName = '加法器';
  enName = 'Adder';
  description = '获取两个数，并返回相加的结果。 Returns the sum of two numbers.'
  
  private left: number = 0;
  private right: number = 0;

  getInput = (): number => {
    this.left = readNumber('输入第1个数字 Input first number:');
    this.right = readNumber('输入第2个数字 Input second number:');
    return 0;
  }

  exec = (): number => {
    console.log(this.left + this.right);
    return 0;
  };
}

export default Adder;
import { exit } from 'process';
import { readNumber } from './helpers';
import Algorithm from "./algorithm";
import Adder from './adder';

const algorithms = [
  new Adder()
]

const main = (): number => {
  console.log('选择要执行的算法 Choose an algorithm to run:');
  algorithms.forEach((algorithm: Algorithm, index: number) => {
    console.log(`${index + 1}: ${algorithm.enName} ${algorithm.cnName}`);
  })

  try {
    let choice = readNumber('输入算法编号 Input index of the algorithm：');
    if (choice > algorithms.length || choice <= 0) {
      throw new Error('不存在这个编号的算法 Wrong index for algorithm')
    }
    choice -= 1;
    const algorithm = algorithms[choice];
    const inputResult = algorithm.getInput();
    if (inputResult != 0) {
      throw new Error('输入有误 Wrong input');
    }
    const startTime = new Date().getTime();
    const execResult = algorithm.exec();
    const endTime = new Date().getTime();
    if (execResult != 0) {
      throw new Error('算法执行过程中遇到错误 Error happens when running algorithm');
    }
    console.log(`运行时间 Time spent: ${endTime - startTime}`);
    return 0;
  } catch (error: any) {
    console.log(error)
    return 1;
  }
}

const result = main();
exit(result);
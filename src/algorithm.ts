interface Algorithm {
  cnName: string;
  enName: string;
  description: string;
  getInput: () => number;
  exec: () => number;
}

export default Algorithm;
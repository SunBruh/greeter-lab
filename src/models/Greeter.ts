export default class Greeter {
  greeting: string;
  constructor(phrase: string) {
    this.greeting = phrase;
  }
  greet(name: string): string {
    return `${this.greeting}, ${name}!`;
  }
}

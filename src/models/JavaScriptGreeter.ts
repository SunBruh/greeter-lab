import Greeter from "./Greeter";

export default class JavaScriptGreeter extends Greeter {
  greet(jsName: string): string {
    return `console.log('${super.greet(jsName)}')`;
  }
}

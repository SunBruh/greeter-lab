import Greeter from "./Greeter";

export default class HtmlGreeter extends Greeter {
  tagName: string;
  constructor(greeting: string, newTagName: string = "h1") {
    super(greeting);
    this.tagName = newTagName;
  }
  greet(htmlName: string): string {
    return `<${this.tagName}>${super.greet(htmlName)}</${this.tagName}>`;
  }
}

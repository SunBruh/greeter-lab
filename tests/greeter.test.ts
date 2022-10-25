import Greeter from "../src/models/Greeter";
import HtmlGreeter from "../src/models/HtmlGreeter";
import JavaScriptGreeter from "../src/models/JavaScriptGreeter";
import LoudGreeter from "../src/models/LoudGreeter";

describe(`Greeter class`, () => {
  test(`constructor sets greeting property`, () => {
    const hello: Greeter = new Greeter("howdy");
    expect(hello.greeting).toBe("howdy");
  });
  test(`greet method called with "Brandon" and object constructed with param "hi" return "hi Brandon"`, () => {
    const hey: Greeter = new Greeter("hi");
    expect(hey.greet("Brandon")).toBe("hi, Brandon!");
  });
});

describe(`JavaScriptGreeter`, () => {
  test(`greet method: greeting "hola: and name "Dominic" returns "console.log('hola, Dominic!')"`, () => {
    const hola: JavaScriptGreeter = new JavaScriptGreeter("hola");
    expect(hola.greet("Dominic")).toBe("console.log('hola, Dominic!')");
  });
});

describe(`LoudGreeter`, () => {
  test(`LoudGreeter without addVolume returns "yo, Brandon!!"`, () => {
    const yo: LoudGreeter = new LoudGreeter("yo");
    expect(yo.greet("Brandon")).toBe("yo, Brandon!!");
  });
  test(`LoudGreeter calling addVolume 3 times returns "yo, Brandon!!!!!"`, () => {
    const yo: LoudGreeter = new LoudGreeter("yo");
    yo.addVolume();
    yo.addVolume();
    yo.addVolume();
    expect(yo.greet("Brandon")).toBe("yo, Brandon!!!!!");
  });
  test(`LoudGreeter calling addVolume 5 times returns "yo, Brandon!!!!!!!"`, () => {
    const yo: LoudGreeter = new LoudGreeter("yo");
    yo.addVolume();
    yo.addVolume();
    yo.addVolume();
    yo.addVolume();
    yo.addVolume();
    expect(yo.greet("Brandon")).toBe("yo, Brandon!!!!!!!");
  });
});

describe(`HtmlGreeter class`, () => {
  test(`HtmlGeeter with tagName param left off returns "<h1>hey, Brandon!</h1>"`, () => {
    const hey: HtmlGreeter = new HtmlGreeter("hey");
    expect(hey.greet("Brandon")).toBe("<h1>hey, Brandon!</h1>");
  });
  test(`HtmlGeeter with tagName param p returns "<p>hey, Brandon!</p>"`, () => {
    const hey: HtmlGreeter = new HtmlGreeter("hey", "p");
    expect(hey.greet("Brandon")).toBe("<p>hey, Brandon!</p>");
  });
});

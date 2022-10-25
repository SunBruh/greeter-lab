const promptly = require("promply")(async () => {
  const greetingFromUser: string = await promptly.prompt("Enter a greeting: ");
  //   console.log(greetingFromUser);
  const nameFromUser: string = await promptly.prompt("Enter a name: ");
  const tagNameFromUser: string = await promptly.prompt("Enter a tag name: ");
  const htmlObj: HtmlGreeter = new HtmlGreeter(
    greetingFromUser,
    tagNameFromUser
  );
  console.log(htmlObj.greet(nameFromUser));
})();

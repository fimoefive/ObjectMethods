/*
Objects' keys can contain values of any type, even functions.

let painter = {
  tools: ["brush", "roller", "caulk", "sandpaper", "dropcloth"],
  uniform: "white overalls",
  cost_per_hour: 25.00,
  insured: true
}
Add an action that the painter can perform ( a property whose value is a function ).
Have her take that action by execucting the method you created.
BONUS: Add a method that allows us to add new tools for the painter.
*/

let painter = {
    tools: ["brush", "roller", "caulk", "sandpaper", "dropcloth"],
    uniform: "white overalls",
    cost_per_hour: 25.00,
    insured: true,
    paint: function() {
        return this.cost_per_hour * workHours;
    }
  }

  let workHours =  6;

  let newTools = painter.tools.push('stir sticks');

  painter.paint();

  console.log(`Here are my ${painter.tools}`);

  console.log(`$${painter.paint()}`);

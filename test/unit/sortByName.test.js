const sorting = require("../../app");

describe("Books names test suit", () => {
  test("Books names should be sorted in ascending order", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ];
    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];
    
    const output = sorting.sortByName(input);

    expect(output).toEqual(expected);
  });

  test("Identical book titles should not be sorted", () => {
    const input = [
      "Гарри Поттер",
      "Гарри Поттер",
      "Властелин Колец",
    ];
    const expected = [
      "Властелин Колец",
      "Гарри Поттер",
      "Гарри Поттер",
    ];

    const output = sorting.sortByName(input);

    expect(output).toEqual(expected);
  });
});

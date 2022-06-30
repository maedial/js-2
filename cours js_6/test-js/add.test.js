const addNumber = require('./add.js');

test("additionne 2 nombres", ()=>{
    expect(addNumber(1,2)).toBe(3);
    expect(addNumber(6,2)).toBe(8);
});


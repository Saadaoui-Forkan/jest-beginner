const sum = require('./sum')

test('Return 0 if there is no params', ()=> {
    expect(sum()).toBe(0)
})

test('Return Only One Number', ()=> {
    expect(sum(10)).toBe(10)
})

test('Return The Sum Of Two Numbers', ()=> {
    expect(sum(10,20)).toBe(30)
})

test('Return The Sum Of Three Numbers', ()=> {
    expect(sum(10,20,50)).toBe(80)
})
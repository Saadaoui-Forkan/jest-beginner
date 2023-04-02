const say = require('./say')

test('test jest message', ()=> {
    expect(say()).toBe('Hello Jest')
})
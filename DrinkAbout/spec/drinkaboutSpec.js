describe("function drinkAbout", function(){
   it("should exists", function() {
     expect(drinkAbout).toBeDefined();
   })
	it('should be a function', function() {
    expect(typeof drinkAbout).toBe('function')
  })
	it('drinkAbout(22) should return a string', function() {
    expect(typeof drinkAbout(22)).toBe("string")
  })
	it('drinkAbout(11) should return a "Drink toddy"', function() {
    expect(drinkAbout(11)).toBe("Drink toddy")
  })
	it('drinkAbout(16) should return a "Drink coke"', function() {
    expect(drinkAbout(16)).toBe("Drink coke")
  })
	it('drinkAbout(20) should return a "Drink beer"', function() {
    expect(drinkAbout(20)).toBe("Drink beer")
  })
	it('drinkAbout(31) should return a "Drink whisky"', function() {
    expect(drinkAbout(31)).toBe("Drink whisky")
  })

})
describe("function rockPaperScissors", function(){
   it("should exists", function() {
     expect(rockPaperScissors).toBeDefined();
   })
   it('should be a function', function() {
    expect(typeof rockPaperScissors).toBe('function')
   })
   it('rockPaperScissors("PAPER","SCISSORS") should return a string', function() {
    expect(typeof rockPaperScissors('PAPER','SCISSORS')).toBe("string")
   })
   it('rockPaperScissors("PAPER","PAPER") should return a PAPER vs PAPER => tie!', function() {
    expect(rockPaperScissors('PAPER','PAPER')).toBe("PAPER vs PAPER => tie!")
   })
   it('rockPaperScissors("ROCK","PAPER") should return a ROCK vs PAPER => PAPER wins!', function() {
    expect(rockPaperScissors('ROCK','PAPER')).toBe("ROCK vs PAPER => PAPER wins!")
   })
   it('rockPaperScissors("SCISSORS","ROCK") should return a SCISSORS vs ROCK => ROCK wins!', function() {
    expect(rockPaperScissors('SCISSORS','ROCK')).toBe("SCISSORS vs ROCK => ROCK wins!")
   })
   it('if only have one arguments the second argument should be random', function() {
    var str = rockPaperScissors('PAPER')
    expect(/PAPER/g.test(str)).toBeTruthy()
  })
})

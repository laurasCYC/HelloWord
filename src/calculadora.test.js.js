function suma(x,y){
var res = parseInt(x)+parseInt(y);
return res;
}
it('suma correctamente', () => {
expect(suma(5,6)).toBe(11);
});
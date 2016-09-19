describe('test validation mask', () => {
  it('validation phone', () => {
    const phone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/g;
    const testPhone = "88005553535";
    expect(phone.test(testPhone)).to.be.eql(true);
  });
});

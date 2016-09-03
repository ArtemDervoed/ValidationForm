describe('test validation mask', () => {
  it('validation phone', (done) => {
    const phone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/g;
    const testPhone = "88005553535";
    if (phone.test(testPhone)) {
      done();
    } else {
      throw "invalid";
    }
  });
  it('invalidation phone', (done) => {
    const phone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/g;
    const testPhone = "+7 (800) 555 abab";
    if (!phone.test(testPhone)) {
      done();
    } else {
      throw "invalid";
    }
  });

});

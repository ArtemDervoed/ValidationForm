describe('test validation mask', () => {
  it('validation mail', (done) => {
    const mail = /[0-9a-z_]+@[0-9a-z_^\.]+\.[a-z]{2,3}/g;
    const testMail = "tetstMail123@gmail.com";
    if (mail.test(testMail)) {
      done();
    } else {
      throw "invalid";
    }
  });
});

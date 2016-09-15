describe('test validation mask', () => {
  it('validation mail', () => {
    const mail = /[0-9a-z_]+@[0-9a-z_^\.]+\.[a-z]{2,3}/g;
    const testMail = "tetstMail123@gmail.com";
    expect(mail.test(testMail)).to.be.eql(true);
  });
});

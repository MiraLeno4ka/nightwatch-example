module.exports = {
  'Demo test Google' : function (client) {
    client
      .url('http://www.yandex.ru')
      .waitForElementVisible('body', 1000)
      .assert.title('Яндекс')
      .assert.visible('input[id=text]')
      .setValue('input[id=text]', 'сова')
      .waitForElementVisible('.search2__button button[type=submit]', 10000)
      .sendKeys('button[type=submit]',client.Keys.ENTER)
      .click('.search2__button button[type=submit]')
      .end();
  }
};
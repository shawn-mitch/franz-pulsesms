'use strict';

module.exports = Franz => {
  const getMessages = function getMessages() {
    const count = document.querySelectorAll('.conversation-title.bold').length;
    Franz.setBadge(count);
  };

  Franz.loop(getMessages);
};
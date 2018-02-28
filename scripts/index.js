'use strict';
/* global shoppingList, $, store, api, Item */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();

  api.getItems((items) => {
    items.forEach((item) => store.addItem(item));

    const item = store.items[0];
    console.log('current name: ' + item.name);
    store.findAndUpdateName(item.id, { name: 'Ham'});
    console.log('new name: ' + item.name);
    shoppingList.render();
  });
});

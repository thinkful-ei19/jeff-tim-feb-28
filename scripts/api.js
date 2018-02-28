
'use strict';
/*global $*/
const api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/Jeffim';

  function getItems(callback) {

    $.getJSON(BASE_URL + '/items', callback);// response => callback(response));
  }

  function createItem(name, callback){
    const newItem = JSON.stringify({name});
    
    $.ajax({
        "url": BASE_URL + '/items',
        "method": 'POST',
        "contentType": 'application/json',
        "data": newItem,
        "success": callback
    })
      
  }

  return {
    getItems,
    createItem
  };
}());





var autoDestroy = function () {
    autoDestroy = null;
    //...
    return 1;
  };
  
  autoDestroy(); // returns 1
  autoDestroy(); // TypeError: autoDestroy is not a function

console.log("Delete User: Ming Lee");
  const deletedIndex = 2;
  destroy(deletedIndex);
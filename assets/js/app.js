// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
  // Enable panel left visibility breakpoint
  panel: {
    leftBreakpoint: 960,
  },
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/'
});

//array of pizza images
var index = 0;

function changeImg() {
    [].forEach.call(document.images, function(v, i) {
        document.images
    });
}

//get pizza info from JSON
var getName = function(type) {
  app.request.json('../assets/jsons/pizza.json', function (data) {
    var objname = data[type].pizza;
    var objIngred = data[type].ingredients;
    var objImg = data[type].img;
    document.getElementById('pizza-name').innerHTML = objname

    function makeUL(array) {
      // Create the list element
      var list = document.createElement('ul');

      for (var i = 0; i < array.length; i++) {
          // Create the list item
          var item = document.createElement('li');
          // Set its contents
          item.appendChild(document.createTextNode(array[i]));
          // Add it to the list
          list.appendChild(item);
      }
  
      // Finally, return the constructed list:
      return list;
    }
    document.getElementById('pizza-ingred').appendChild(makeUL(objIngred));
    document.getElementById('recipe').innerHTML = data.recipie.recipe
    document.getElementById('pizza-img').innerHTML = '<img src="'+objImg+'" height="159px" width="316px"/>'
  })
  
};
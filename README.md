#PEGjs

This is a repacked version for Meteor. Just add the package and use it as described in the docs.

##Installation
In a Meteor application directory add the package with:
    
    $ meteor add chaosbohne:pegjs
    
This adds PEGjs to your client and server side. If you don't need the package on client side and you care about your apps size and quality you should remove the package from client side if not needed.


##How to use
Just have a look at the docs of [PEGjs](https://github.com/pegjs/pegjs). The parser is available throw the variable PEG.

```JAVASCRIPT
var parser = PEG.buildParser("start = ('a' / 'b')+");
```

##Advanced
Take care to generate the parser at start of your application. You can save the generated parser in a global variable. There is no need the generate the parser for every request.



```JAVASCRIPT
App = {}

Meteor.startup(function () {
  App.parser = PEG.buildParser("start = ('a' / 'b')+");
});
```

In your template:
```JAVASCRIPT
App.parser.parse("ab");
```

If you have the grammar in a seperate file you can use _Npm.require_ to load and access the file.


##Requests
This is a very basic package without any additional functions. Create requests!



#flight-resource
###FlightJS mixin for creating RESTful resource backed flight components

Inspired by backbonejs models/collections.

##Docs

####Initialization
```js

  // call this in the after('initialize', ...) function

  this.modelConfig({
    // specify base URL to sent GET, PUT, POST, DELETE
    url: 'http://api.example.com/v1/users',
    id: 1,
    // attach validators to attributes
    validators: {
      age: function(age){ return age > 0; }
    },
    // run validators before save & if all pass, continue on to save
    validateOnSave: true,

    // set model attribute defaults
    defaults: {
    }

  });

```

###Model Attributes
```js

  this.set('name', 'steve');  // triggers "model.name:changed"

  this.set('job', {
    title: 'intern',
    company: 'ACME corp'
  })
  // triggers "model.job:changed"

  this.set({
    name: 'steve',
    job: {
      title: 'intern',
      company: 'ACME corp'
    }
  });
  // triggers "model:changed"

  this.get('name'); // 'steve'
  this.get('job'); // { title: 'intern', company: 'ACME corp' }
  this.get();
  //
  //  {
  //    name: 'steve',
  //    job: {
  //      title: 'intern',
  //      company: 'ACME corp'
  //    },
  //    age: 10
  //  }
  //

  this.has('name') // true
  this.has('benefits') // false


  this.set('age', 0);
  // triggers model.change:age

  this.hasValid('age'); // false

  this.set('age', 10);

  this.hasValid('age'); //true

  this.reset(); // clears all previously set attributes to defaults

  this.has('name') // false

```


###Persisting to server

```js

  // using above model ^

  this.fetch(ajaxOptions); // GET request
  this.save(ajaxOptions); // POST or PUT request
  this.destroy(ajaxOptions); // DELETE request

```

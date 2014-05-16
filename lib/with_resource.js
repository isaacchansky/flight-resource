define(function(require) {
    'use strict';

  /**
   * Module dependencies
   */


  /**
   * Module export
   */

    return withResource;

  /**
   * Module function
   */

    function withResource() {

      this.defaultAttrs({
        // default settings for withResource enabled component
        defaultSettings: {
          validateOnSave: false
        },
        // placeholder for user settings - gets extended by user options
        settings: {},
        // model defaults - gets extended by user options
        modelDefaults: {
          // id starts as undefined until save or fetch
          id: undefined
        },
        // the eventual model attributes
        modelAttrs: {},
        // validators for specific attributes - gets extended by user options
        validators: {}
      });


      this.modelConfig = function(options){
        // Initial configuration of mixin
        this.attr.settings = $.extend(this.attr.defaultSettings, options);
        this.attr.modelDefaults = $.extend(this.attr.modelDefaults, options.defaults);
        this.attr.validators = options.validators || {};
      };

      this.set = function() {
        // Set attributes of model

        // if called like: this.set(key, value)
        if(typeof arguments[0] === 'string' && arguments[1] !== undefined){
          this.attr.modelAttrs[arguments[0]] = arguments[1];
          // trigger specific model attribute changed event, and general model changed event
          this.trigger('model.'+arguments[0]+':changed', this.attr.modelAttrs);
          this.trigger('model:changed', this.attr.modelAttrs);
        }
        // if called like: this.set(modelAttributesObject)
        if(typeof arguments[0] === 'object'){
          this.attr.modelAttrs = $.extend(this.attr.modelAttrs, arguments[0]);
          // just trigger model changed
          this.trigger('model:changed', this.attr.modelAttrs);
        }
      };

      this.get = function(attr){
        // get attributes of model

        if(attr){
          return this.attr.modelAttrs[attr];
        }else{
          // if called like" this.get() just return all attributes
          return this.attr.modelAttrs;
        }
      }

      this.has = function(attr){
        // See if model contains a top level attribute

        if(this.attr.modelAttrs[attr] !== undefined){
          return true;
        }else{
          return false;
        }
      };

      this.reset = function() {
        // reset model to default attribute values

        this.attr.modelAttrs = this.attr.modelDefaults;
        this.trigger('model:reset', this.attr.modelAttrs);
      };

      this.after('initialize', function() {
      });
    }
});




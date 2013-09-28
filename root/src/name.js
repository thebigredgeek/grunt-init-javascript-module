{%
    var sterileName = name.replace(/\W/g, ''); //sterilize the name
%}

/**
 * The {%= sterileName %} class.
 * {%= description %}
 *
 * @version {%= version %}
 * @author {%= author %}
 * @name {%= sterileName %}
 * @class
 */
(function(scope){
    /**
     * The constructor for the {%= sterileName %} Object.  Provides direct and factory
     * instantiation.
     *
     * @example
     * var obj = {%= sterileName %}();
     *
     * @example
     * var obj = new {%= sterileName %}();
     *
     * @name {%= sterileName %}#constructor
     * @public
     * @returns {{%= sterileName %}} An instance of the {%= sterileName %} Object
     */
    var Constructor = function(){

            var publicMembers = this, //public members namespace
                privateMembers = {}; //private members namespace

            /**
             * This function returns the string 'world'
             *
             * @example
             * var obj = {%= sterileName %}();
             * console.log(obj.hello()); // => 'world'
             *
             * @name {%= sterileName %}#hello
             * @public
             * @function
             * @returns {String} Returns the string 'world'
             */
            publicMembers.hello = function(){
                return "world";
            };


            if(!(this instanceof arguments.callee)){  //handle factory construction
                return new Constructor();
            }

        },

        bind = function(scope){ //this function binds the {%= sterileName %} object to a given scope
            if(scope !== null){ //make sure we have a legitimate scope
                scope.{%= sterileName %} = Constructor;
            }
            else{ //throw an error if there is a problem
                throw new Error("Cannot find appropriate scope for binding; 'window' and 'exports are undefined!");
            }
        };

    bind(scope);


}(typeof window == 'object' ? window : (typeof exports == 'object' ? exports : null)));
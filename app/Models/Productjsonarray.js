
/**
 * SpoonacularAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ) on 01/19/2017
 */
var BaseModel = require("./BaseModel");
/**
 * Creates an instance of Productjsonarray
 *
 * @constructor
 */
Productjsonarray = function (obj) {
    if(!obj) {
        this.pluCode = null;     
        this.title = null;     
        this.upc = null;     
        //Append to variable dictionary
        this._variableDict['pluCode'] = 'plu_code';
    } else {
        this.pluCode = (obj.plu_code !== undefined && obj.plu_code !== null)? obj.plu_code : null;
        this.title = (obj.title !== undefined && obj.title !== null)? obj.title : null;
        this.upc = (obj.upc !== undefined && obj.upc !== null)? obj.upc : null;
        //Append to variable dictionary
        this._variableDict['pluCode'] = 'plu_code';
    }
};

Productjsonarray.prototype = new BaseModel();
Productjsonarray.prototype.constructor = Productjsonarray;

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
Productjsonarray.prototype.getPluCode = function() {
    return this.pluCode;
};

/**
 * Setter for PluCode
 * 
 * @param {string} value 
 */
Productjsonarray.prototype.setPluCode = function(value) {
    this.pluCode = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
Productjsonarray.prototype.getTitle = function() {
    return this.title;
};

/**
 * Setter for Title
 * 
 * @param {string} value 
 */
Productjsonarray.prototype.setTitle = function(value) {
    this.title = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
Productjsonarray.prototype.getUpc = function() {
    return this.upc;
};

/**
 * Setter for Upc
 * 
 * @param {string} value 
 */
Productjsonarray.prototype.setUpc = function(value) {
    this.upc = value;
};


module.exports = Productjsonarray;

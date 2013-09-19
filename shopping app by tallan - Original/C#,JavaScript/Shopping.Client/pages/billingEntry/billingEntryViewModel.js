﻿//*************************************************************************
//
//    Copyright (c) 2013 ThinkitDrinkit Inc.  All rights reserved. 
//
//    Use of this sample source code is subject to the terms of the Microsoft Limited Public License
//    at http://msdn.microsoft.com/en-us/cc300389.aspx#P and is provided AS-IS. 
//
//    For more information about ThinkitDrinkit, visit our website, http://ThinkitDrinkit.com/.     
//
//    To see the topic that inspired this sample app, go to http://msdn.microsoft.com/en-us/library/windows/apps/jj635241. 
//
//*************************************************************************


/// <reference path="ms-appx://Microsoft.WinJS.1.0/js/base.js" />
/// <reference path="/js/api.js" />

(function (WinJS, api) {
    "use strict";
        
    WinJS.Namespace.define("Shopping.ViewModel", {
        BillingViewModel : WinJS.Class.define(function BillingViewModel_ctor() {
            this.cart = api.cart.cart;
        }, {
            init: function () {
            }

        })
    });
    
})(WinJS, Shopping.Api);
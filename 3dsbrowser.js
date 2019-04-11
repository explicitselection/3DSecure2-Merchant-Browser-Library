/*
* 3DSecure2 Merchant Browser Library - 1.0.0
* https://github.com/explicitselection/3DSecure2-Merchant-Browser-Library
* Copyright (c) 2019 Explicit Selection (support@explicitselection.com)
*
* Licensed under the BSD-2 Clause (https://github.com/explicitselection/3DSecure2-Merchant-Browser-Library/blob/master/LICENSE) license.
* @preserve
*/
/*
* BSD 2-Clause License
* Copyright (c) 2019, Explicit Selection
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:

*   * Redistributions of source code must retain the above copyright notice, this
*     list of conditions and the following disclaimer.
*
*    * Redistributions in binary form must reproduce the above copyright notice,
*      this list of conditions and the following disclaimer in the documentation
*      and/or other materials provided with the distribution.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
* FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
* DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
* SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
* CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
* OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

(function (name, context, definition) {
    'use strict'
    if (typeof window !== 'undefined' && typeof define === 'function' && define.amd) {
        define(definition)
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = definition()
    } else if (context.exports) {
        context.exports = definition()
    } else {
        context[name] = definition()
    }
})('EMV3DSBrowserLibrary', this, function () {
    'use strict'

    var EMV3DSBrowserLibrary = function () {
        throw new Error("'new ES3DSBrowserLibrary()' is not used, use ES3DSBrowserLibrary.get() or ES3DSBrowserLibrary.getPromise()")
    };

    EMV3DSBrowserLibrary.VERSION = '1.0.0';

    var browserUserAgent = function () {
        return (navigator.userAgent || null);
    };

    var browserLanguage = function () {
        return (navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || null);
    };

    var browserColorDepth = function () {
        if (screen.colorDepth || window.screen.colorDepth) {
            return new String(screen.colorDepth || window.screen.colorDepth);
        }
        return null;
    };

    var browserScreenHeight = function () {
        if (window.screen.height) {
            return new String(window.screen.height);
        }
        return null;
    };

    var browserScreenWidth = function () {
        if (window.screen.width) {
            return new String(window.screen.width);
        }
        return null;
    };

    var browserTZ = function () {
        return new String(new Date().getTimezoneOffset());
    };

    var browserJavaEnabled = function () {
        return (navigator.javaEnabled() || null);
    };

    var browserJavascriptEnabled = function () {
        return (true);
    };

    var components = [
        {key: 'browserJavaEnabled', function: browserJavaEnabled},
        {key: 'browserJavascriptEnabled', function: browserJavascriptEnabled},
        {key: 'browserLanguage', function: browserLanguage},
        {key: 'browserColorDepth', function: browserColorDepth},
        {key: 'browserScreenHeight', function: browserScreenHeight},
        {key: 'browserScreenWidth', function: browserScreenWidth},
        {key: 'browserTZ', function: browserTZ},
        {key: 'browserUserAgent', function: browserUserAgent},
    ];

    EMV3DSBrowserLibrary.get = function (callback) {

        var results = [];

        for (var i = 0; i < components.length; i++) {
            try {
                results.push({key: components[i].key, value: components[i].function()});
            } catch (e) {
                console.log(e);
            }
        }

        callback(results);
    };

    EMV3DSBrowserLibrary.getPromise = function () {
        return new Promise(function (resolve, reject) {
            EMV3DSBrowserLibrary.get(resolve)
        })
    };

    return EMV3DSBrowserLibrary;
});

  

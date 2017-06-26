/**
 * @fileoverview fail code which include ko library
 * @author doron wix
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-ko-in-core"),

    RuleTester = require("../../../lib/testers/rule-tester");


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-ko-in-core", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "var obs = ko.observable();",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});

/**
 * @fileoverview fail code which include ko library
 * @author doron wix
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "fail code which include ko library",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

	create: context =>({
	
	// variables should be defined here

	//----------------------------------------------------------------------
	// Helpers
	//----------------------------------------------------------------------

	// any helper functions should go here or else delete this section

	//----------------------------------------------------------------------
	// Public
	//----------------------------------------------------------------------


		MemberExpression: (node) =>{
			if (node.object.name === "ko" || node.object.name === "knockout") {
				context.report(node, "Don't use knockoutjs in this context, use vanilla javascript");
			}
			
		},
		Literal: (node) =>{
 			if (node.raw === "'knockout'" || node.raw === "\"knockout\"") {
				context.report(node, "Don't use knockoutjs in this context, use vanilla javascript");
			} 		
		}
		
		
	})
	
}

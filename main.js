/*
  Necessary test cases:
  Link to a paragraph:            p2
  Skip to a particular sentence:  p2s2
  Highlight a sentence:     h2s2
  Double Shift creates links for the paragraphs
*/

(function( $, doc, undefined ){
    $(function(){
	var hash = doc.location.hash.substr(1),//.match( /([p|h|s]\d+)/gi ),
	    page = {},
	    paras = $("p");
	
	//JS doesn't support lookbehind, use this to simulate behavior
	function substr1( substr, match, offset, str ){
	    return match; 
	}
	
	page = {
	    //Took the Mayans to understand 0, common folks still don't like it
	    para:      hash.replace( /.*[p|h](\d+).*/i, substr1 ) - 1, 
	    sent:      hash.replace( /.*s(\d+).*/i, substr1 ) - 1,
	    highlight: /s/i.test( hash )
	};
	
	//Sentence is specified, find the position of this relative to the paragraph
	if( !isNaN( page.sent ) && !isNaN( page.para ) ){

	    var para = paras.eq( page.para ),
	        //Collect all sentences before the necessary one
	        sentences = para[0].innerHTML.match( /[^.]+/g ),
	        prefixSentences = sentences.slice( 0, page.sent ),
	        dummy,
	        top = 0;
	    
	    //Create a dummy div with any text preceding your sentence and
	    // css properties of that element
	    //Inspired by: https://github.com/kir/js_cursor_position
	    dummy = $("<div />",{
		css:{
		    position: 'absolute',
		    left: '0',
		    fontSize: para.css('fontSize'),
		    fontFamily: para.css('fontFamily'),
		    fontWeight: para.css('fontWeight'),
		    fontStyle: para.css('fontStyle'),
		    fontVarient: para.css('fontVarient'),
		    fontTransform: para.css('fontTransform')
		},
		html: prefixSentences.join('')
	    }).appendTo('body');
	    top = para.offset().top + dummy.height() - parseInt( dummy.css('fontSize') ) * 1.2;
	    dummy.remove(); //Remove dummy
	    if( page.highlight ){
		para.html(
		    para.html().replace( sentences[ page.sent ],
					 "<span class=\"highlight\">" +
					 sentences[ page.sent ] + "</span>") );
	    }
	    window.scrollTo( 0, top );
	}
	else if( !isNaN( page.para ) ){
	    
	    var top = paras.eq( page.para ).offset().top;
	    window.scrollTo( 0, top );
	}
    });

    
})(jQuery,document);
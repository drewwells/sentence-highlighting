Sentence highlighting
================================

Scroll to a paragraph or sentence within a paragraph based on input from the hash.  Also, it can highlight a sentence within a paragraph.  The usage is knock off of NYT's implementation [The New York Times introduces the evolution of the hyperlink](http://thenextweb.com/media/2010/12/02/the-new-york-times-introduces-the-evolution-of-the-hyperlink/)

Usage
--------------

* `http://example.com/index.html#p2`: scrolls to the second paragraph
* `http://example.com/index.html#p2s2`: scrolls to the second sentence of the paragraph, line depends on the length of the first sentence
* `http://example.com/index.html#h2s2`: scrolls like **p2s2** but also highlights this sentence.

This functionality only occurs on page load, just like the NYT's implementation.  I still need to add some graphics and functionality for the double shift like described in the above url.

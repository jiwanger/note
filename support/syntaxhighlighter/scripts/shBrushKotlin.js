/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{

		var keywords =  'package  val 	     var 	fun 	 true 	   false    typealias ' +
			       'if 	 else 	     break 	continue return	   for 	    do 	      while 	when ' + 
                               'is 	 is! 	     in 	in! 	 as 	   as&#161; 	    try       throw ' +
                               'class 	 interface   object 	null 	 this 	   super    typeof '  +

	                       'import 	 constructor init 	by 	 where 	   catch    finally   set 	get 	dynamic ' +
                               'delegate field 	     file 	param 	 property  receiver setparam  ' +

			       'public 	 internal    protected 	private  open 	   abstract override  final ' +
	                       'data 	 enum 	     annotation	sealed 	 companion inner '  +
                               'const 	 lateinit    out 	reified	 suspend ' +
                               'operator infix 	     tailrec 	vararg 	 inline    noinline crossinline ' +
	                       'actual 	 expect      external';





		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.singleLineCComments,	css: 'comments' },		// one line comments
			{ regex: /\/\*([^\*][\s\S]*)?\*\//gm,						css: 'comments' },	 	// multiline comments
			{ regex: /\/\*(?!\*\/)\*[\s\S]*?\*\//gm,					css: 'preprocessor' },	// documentation comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },		// strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },		// strings
			{ regex: /\b([\d]+(\.[\d]+)?|0x[a-f0-9]+)\b/gi,				css: 'value' },			// numbers
			{ regex: /(?!\@interface\b)\@[\$\w]+\b/g,					css: 'color1' },		// annotation @anno
			{ regex: /\@interface\b/g,									css: 'color2' },		// @interface keyword
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),		css: 'keyword' }		// kotlin keyword
			];

		this.forHtmlScript({
			left	: /(&lt;|<)%[@!=]?/g, 
			right	: /%(&gt;|>)/g 
		});
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['kotlin'];

	SyntaxHighlighter.brushes.Kotlin = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

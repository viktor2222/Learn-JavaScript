<h1>Introduction-To-JavaScript</h1>

<h2>Learned-12-11-2018</h2>  

<ul>
  <li><a href="https://github.com/viktor2222/Learn-JavaScript/commit/e23e21e344b10c8ce6e6f59bc7e4938e27c96dae">Display an alert</a></li>
</ul>

<h2>Learned-13-11-2018</h2>

<ul>
  <li><a href="https://github.com/viktor2222/Learn-JavaScript/commit/991fa43a96ce0690c9b51d03d11d25b3e4eb68d1">Print alert with external script</a></li>
</ul>

<h2>Description-12-11-2018</h2>

<h4>Introduction</h4>

<ul>
  <p>JavaScript was originally designed to make web pages "live". Programs in this language are called scripts. In the browser, they are connected directly to HTML and, as soon as the page loads, they are immediately executed.</p>
  <li>Compilation - is when the source code of a program, with the help of a special tool, another program called “compiler”, is converted into another language, as a rule - into machine code. This machine code is then distributed and started. In this case, the source code of the program remains with the developer.</li>
  <li>Interpretation - is when the source code of a program is received by another tool, which is called an “interpreter,” and executes it “as is”. At the same time, the source code itself (script) is distributed. This approach is used in browsers for javascript.</li>
  <li>What is the uniqueness of javascript:
    <ul>
      <li>Full integration with HTML / CSS.</li>
      <li>Simple things are done simply.</li>
      <li>Supported by all common browsers and enabled by default.</li>
    </ul>
  </li>
</ul>

<h4>Reference and Specifications</h4>

<ul>There are three basic javascript references in English:
  <li><a href="https://developer.mozilla.org/en-US/">Mozilla Developer Network</a> - contains information that is correct for the main browsers. Also, there are only extensions for Firefox (they are marked). When I need to quickly find the “standard” information on the RegExp - I enter “RegExp MDN” into Google, and the keyword “MDN” (Mozilla Developer Network) leads to information from this directory.</li>
  <li><a href="https://msdn.microsoft.com/en-us/">MSDN</a> - reference book from Microsoft. There is a lot of information there, including JavaScript (they call it “JScript”). If you need something that is specific to IE, it’s better to go right there. For example, for information about the features of RegExp in IE - a useful combination: "RegExp msdn". Sometimes it is better to add the term “JScript” to the search phrase: “RegExp msdn jscript”.</li>
  <li><a href="https://developer.apple.com/safari/resources/">Safari Developer Library</a> - is less well known and less common, but you can also find valuable information in it.</li>
  <li>The specification is the most important, defining document in which it is written how JavaScript behaves, browser, CSS, etc.</li>
  <li>If something is not clear, and the directory does not give an answer, then the specification, as a rule, reveals the topic much deeper and allows you to dot the i.</li>
  <li>The specification (a formal description of the syntax, basic objects and algorithms) of the Javascript language is called <a href="http://www.ecma-international.org/publications/standards/Ecma-262.htm">ECMAScript.</a></li>
</ul>

<h4>External scripts, execution order</h4>

<ul>
  <li>Alert - displays a message box and waits until the visitor clicks OK.</li>
  <li>As a rule, only the simplest scripts are written in HTML, and complex ones are put into a separate file.</li>
  <li>The browser will only download it for the first time and, if the server is properly configured, it will be taken from its cache.</li>
  <li>Due to this, the same large script, containing, for example, a library of functions, can be used on different pages without a complete reload from the server.</li>
  <li>If the src attribute is specified, the contents of the tag are ignored.
In one SCRIPT tag it is impossible to simultaneously connect an external script and specify the code.</li>
  <li>Scripts are inserted into the page as text in the <script> tag, or as an external file via <script src = "path"> </ script></li>
  <li>The special attributes async and defer are used so that while the external script is loaded - the browser shows the rest (next to it) of the page. Without them, this does not happen.</li>
  <li>The difference between async and defer: the defer attribute preserves the relative sequence of scripts, but async does not. In addition, defer is always waiting for the entire HTML document to be ready, but async is not.</li>
</ul>

<h2>Description-13-11-2018</h2>

<h4>User interaction: notifications, prompt, confirm</h4>

<ul>
  <li>alert - displays a window with a message and pauses the execution of the script until the user clicks "OK". The mini-window with the message is called a modal window. The word “modal” means that the visitor can’t interact with the rest of the page, press other buttons etc, until they have dealt with the window. In this case – until they press “OK”.</li>
  <li>Function prompt accepts two arguments:

    result = prompt(title, default);
    
  <ul>
    <li>It shows a modal window with a text message, an input field for the visitor and buttons OK/CANCEL.</li>
    <li>title - the text to show to the visitor.</li>
    <li>default - an optional second parameter, the initial value for the input field.</li>
    <li>The visitor may type something in the prompt input field and press OK. Or they can cancel the input by pressing the CANCEL button or hitting the Esc key.</li>
  </ul>
  </li>
  <li></li>
</ul>

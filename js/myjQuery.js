$(document).ready(function () {
  //Your jquery code here
  console.log("We are using jQuery");
  // jQuery Syntax looks like this
  // $('selector').action()

  //clicks on all the p elements.
  // $('p').click(); //click on p
  // $('p').click(function () {
  //     console.log('you clicked on p', this);
  //     //  $('#id').hide();
  //     //  $('.class').hide();
  // }); //do this when we click on p

  // $('p').dblclick(function () {
  //     console.log('you double clicked on p', this);
  //     //  $('#id').hide();
  //     //  $('.class').hide();
  // });

  // $("p").mouseenter(function () {
  //   console.log("You entered ", this);
  // });

  /* mouse hove take two function as argument  */
  // $("p").hover(
  //   function () {
  //     console.log("you hoverd on: ", this);
  //     //  $('#id').hide();
  //     //  $('.class').hide();
  //   },
  //   function () {
  //     console.log("Thanks for coming");
  //   }
  // );

  // there are three main types of selectors in jQuery
  // 1. element selector
  // 2. id selector
  // 3. class selector

  // 1. Element selector -  This is an example of element selector which clicks on all p
  // $('p').click();

  // 2. Id selector - this is an example of id selector
  // $('#second').click();

  // 3. Class selector - this is an example of id selector
  // $('.odd').click();

  // other selectors
  // $('*').click() // clicks on all the elements
  // $('p.odd').click() // clicks on all the elements
  // $('p:first').click() // clicks on all the elements

  // Events in jQuery
  // Mouse events = click, dblclick, mouseenter, mouseleave
  // KeyboardEvent = keypress, keydown, MediaKeyStatusMap
  // form events = submit, change, focus, blur
  // document/window events = load, resize, scroll, unload

  /* on methods */
  /* $("p").on("click", function () {
    console.log("Thank for clicking me");
  }); */

  // attaching multiple element with one selector
  // $("p").on({
  //   click: function () {
  //     console.log("Thanks for clicking", this);
  //   },
  //   mouseleave: function () {
  //     console.log("Mouse leave event", this);
  //   },
  // });
});

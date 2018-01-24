var tour = new Tour({
  name: "tour",
  steps: [{
      element: "#coin-header",
      title: "Title of my step",
      content: "Content of my step"
  }],
  template: `<div class='popover tour'>
  <div class='arrow'></div>
  <h3 class='popover-title'></h3>
  <div class='popover-content'></div>
  <div class='popover-navigation'>
      <button class='btn btn-default' data-role='prev'>« Prev</button>
      <span data-role='separator'>|</span>
      <button class='btn btn-default' data-role='next'>Next »</button>
  </div>
  <button class='btn btn-default' data-role='end'>End tour</button>
</div>`
});

tour.init();
tour.start();
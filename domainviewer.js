domainviewer = {}

domainviewer.create = function(el, props, state) {
  var svg = d3.select(el).append('svg')
      .attr('class', 'd3')
      .attr('width', props.width)
      .attr('height', props.height);

  svg.append('g')
      .attr('class', 'sequence');

  this.update(el, state);
};

domainviewer.update = function(el, state) {
  this._draw(el);
};

domainviewer.destroy = function(el) {
  // Any clean-up would go here
  // in this example there is nothing to do
};

domainviewer._draw = function(el){
  var seq = svg.append("line")          // attach a line
    .style("stroke", "black")  // colour the line
    .attr("x1", 0)     // x position of the first end of the line
    .attr("y1", 50)      // y position of the first end of the line
    .attr("x2", 300)     // x position of the second end of the line
    .attr("y2", 50)
};
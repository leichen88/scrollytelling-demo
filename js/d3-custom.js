// set the dimensions and margins of the graph
const margin = {top: 50, right: 50, bottom: 50, left: 50};
const width = 800 - margin.left - margin.right;
const height = 700 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#dataviz")
  .append("svg")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("viewBox", "0 0 800 700")
    // .attr("preserveAspectRatio", "xMinYMin")
  .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

var jsonData;
var xScale, yScale;
var xAxis, yAxis;

d3.json("/data/demoData.json").then(function(data){
  jsonData = data;

  // X scale and Axis
  xScale = d3.scaleLinear()
  .domain([0,d3.max(jsonData, d => +d.x3)]).nice()
  .range([0, width]); 
  xAxis = svg
  .append('g')
  .style("color", "#ffffff")
  .style("font-size",16)
  .attr("class", "Xaxis")
  .style("opacity", 0)
  .attr("transform", `translate(0, ${height})`)
  .call(d3.axisBottom(xScale).ticks(5).tickPadding(8))

  // Y scale and Axis
  yScale = d3.scaleLinear()
  .domain([0, d3.max(jsonData, d => +d.y3)]).nice()
  .range([height, 0]);
  yAxis = svg
  .append('g')
  .style("font-size",16)
  .style("color", "#ffffff")
  .attr("class", "Xaxis")
  .style("opacity", 0)
  .call(d3.axisLeft(yScale).ticks(6).tickPadding(4));

  // Initial visualization
  svg
  .selectAll("circle")
  .data(jsonData)
  .enter()
  .append("circle")
    .transition()
    .duration(1000)
    .attr("cx", d => d.x2)
    .attr("cy", d => d.y2)
    .attr("r", 10)
    .style("fill", "#ffffff")
    .style("stroke", "#ffffff")
});

function stepOne() {
svg
  .selectAll("circle")
  .data(jsonData)
  .transition()
  .duration(1000)
  .attr("cx", d => d.x2)
  .attr("cy", d => d.y2)
  .attr("r", 10)
  .style("fill", "#ffffff")
}

function stepTwo(){
svg
    .selectAll("circle")
    .data(jsonData)
    .transition()
    .duration(1000)
    .style("fill", "#ffffff")
    .attr("r", 10)
    .attr("cx", d => xScale(d.x3))
    .attr("cy", d => yScale(d.y3))
}

function stepThree(){
  svg
    .selectAll("circle")
    .data(jsonData)
    .transition()
    .duration(1000)
    .style("fill", d => d.color)
    .attr("cx", d => xScale(d.x3))
    .attr("cy", d => yScale(d.y3))
}

function stepFour(){
  xScale.domain([0,d3.max(jsonData, d => +d.x3)]);
  xAxis.transition().duration(1000).attr("opacity", 1).call(d3.axisBottom(xScale));
  yScale.domain([0,d3.max(jsonData, d => +d.y3)]);
  yAxis.transition().duration(1000).attr("opacity", 1).call(d3.axisLeft(yScale));
    svg
    .selectAll("circle")
    .data(jsonData)
    .transition()
    .duration(1000)
    .style("fill", d => d.color)
    .attr("r", d => d.size)
    .attr("cx", d => xScale(d.x3))
    .attr("cy", d => yScale(d.y3))
}

function stepFive(){

  xScale.domain([0,d3.max(jsonData, d => +d.x4)]);
  xAxis.transition().duration(1000).attr("opacity", 1).call(d3.axisBottom(xScale));
  yScale.domain([0,d3.max(jsonData, d => +d.y4)]);
  yAxis.transition().duration(1000).attr("opacity", 1).call(d3.axisLeft(yScale));

 svg
    .selectAll("circle")
    .data(jsonData)
    .transition()
    .duration(1000)
    .attr("cx", d => xScale(d.x4))
    .attr("cy", d => yScale(d.y4))
}

function stepSix(){
 svg
    .selectAll("circle")
    .data(jsonData)
    .transition()
    .duration(1000)
    .style("fill", d => d.color)
    .attr("r", d => d.size)
    .attr("cx", d => d.x5)
    .attr("cy", d => d.y5)
}

function stepSeven(){
 svg
    .selectAll("circle")
    .data(jsonData)
    .transition()
    .duration(1000)
    .style("fill", "#ffffff")
    .attr("r", 10)
    .attr("cx", d => d.x1)
    .attr("cy", d => d.y1)
}

function toggleAxesOpacity(toggleX, toggleY, opacity){
  if(toggleX){
    xAxis
      .transition()
      .duration(1000)
          .style("opacity", opacity)
  }
  if(toggleY){
    yAxis
      .transition()
      .duration(1000)
          .style("opacity", opacity)
  }
}


 

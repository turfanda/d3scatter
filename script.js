var d3;
      
var svg = d3.select("svg");
      var margin = 100;
      var width = svg.attr("width") - margin;
      var height = svg.attr("height") - margin;
    
      var xScale = d3.scaleLinear().range ([0, width]);
      var yScale = d3.scaleLinear().range ([height, 0]);

      var g = svg.append("g").attr("transform", "translate(" + 50+"," + 50+ ")");

d3.json("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/cyclist-data.json",function(err,data){

   if(err) throw err;
  
console.log(data[0].Place);
  
  xScale.domain([210,0]);
  yScale.domain([ 35,1]);
  
  g.append("g").attr("transform", "translate(0," + height + ")").call(d3.axisBottom(xScale));
  g.append("g").call(d3.axisLeft(yScale).tickFormat(function(d){
             return d;
         }).ticks(5));
  

});

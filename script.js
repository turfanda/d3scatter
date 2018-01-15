var d3;
      
var svg = d3.select("svg");
      var margin = 100;
      var width = svg.attr("width") - margin;
      var height = svg.attr("height") - margin;
    
      var xScale = d3.scaleTime().range ([0, width]);
      var yScale = d3.scaleLinear().range ([height, 0]);

      var g = svg.append("g").attr("transform", "translate(" + 50+"," + 50+ ")");

d3.json("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/cyclist-data.json",function(err,data){

   if(err) throw err;
  
  console.log(data);

  
  xScale.domain([210,0]);
  yScale.domain([ data[data.length-1].Place, data[0].Place]);

  var xValue = function(d){return (data[0].Seconds -d.Seconds)}
});

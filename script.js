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

          var barWidth = Math.ceil(width / data.data.length);
        
        xScale.domain([minDate,maxDate]);
        yScale.domain([ 0, d3.max(data.data, function(d) { return d[1]; })]);

});

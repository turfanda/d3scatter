var d3;
      
var svg = d3.select("svg");
      var margin = 100;
      var width = svg.attr("width") - margin;
      var height = svg.attr("height") - margin;
    
      var xScale = d3.scaleLinear().range ([0, width]);
      var yScale = d3.scaleLinear().range ([height, 0]);

      var g = svg.append("g").attr("transform", "translate(" + 30+"," + 50+ ")");

d3.json("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/cyclist-data.json",function(err,data){

   if(err) throw err;
  
  xScale.domain([210,0]);
  yScale.domain([ 36,1]);
  
  g.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(xScale).tickFormat(function (d){if (d<60) return d ; else return parseInt(d/60)+":"+d%60;}));
  
  g.append("g")
    .call(d3.axisLeft(yScale).tickFormat(function(d){return d;}).ticks(5));
  
   g.selectAll(".text")
    .data(data)
    .enter()
   .append("text")
   .text(function(d){return d.Name})
     .attr("x",function(d){return xScale(parseInt(d.Seconds)-2210)+15;})
   .attr("y",function(d){return yScale(d.Place)+5;});

   
  
  g.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("class","dot")
    .attr("r",5)
    .attr("cx",function(d){return xScale(parseInt(d.Seconds)-2210);})
    .attr("cy",function(d){return yScale(d.Place);})
    .on("mouseover", function(d) {
        var rect = d3.select(this);
        rect.attr("class", "mousein");
        var currentDateTime = new Date(d[0]);
        var year = currentDateTime.getFullYear();
        var month = currentDateTime.getMonth();
        var dollars = d[1];
        div.transition()
          .duration(50)
          .style("opacity", 0.9);
        div.html("<span class='insideInfo'>" + moneyFormat(dollars) + "&nbsp;Billion </span><br><span class='insideInfo'>" + year+ "-"+currentDateTime.toString().slice(3, 7)+"</span>")
          .style("left", (d3.event.pageX + 5) + "px")
          .style("top", (d3.event.pageY - 50) + "px");
      })
        .on("mouseout", function() {
        var rect = d3.select(this);
        rect.attr("class", "mouseout");
        div.transition()
          .duration(100)
          .style("opacity", 0);
      });



  

});
   /* */
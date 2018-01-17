var d3;

var svg = d3.select("svg");
var margin = 100;
var width = svg.attr("width") - margin;
var height = svg.attr("height") - margin;

var xScale = d3.scaleLinear().range([0, width]);
var yScale = d3.scaleLinear().range([height, 0]);

var g = svg.append("g").attr("transform", "translate(" + 30 + "," + 50 + ")");

d3.json("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/cyclist-data.json", function(err, data) {

    if (err) throw err;

    xScale.domain([210, 0]);
    yScale.domain([36, 1]);

  

    g.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xScale).tickFormat(function(d) {
            if (d < 60) return d;
            else return parseInt(d / 60) + ":" + d % 60;
        })).append("text")
  .attr("x", 400)
  .attr("y", 35)
  .attr("dy", ".35em")
    .style("fill","red")
  .style("font-size","15px")
  .style("text-anchor", "middle")
  .text("Minutes Behind Fastest Time");

    g.append("g")
        .call(d3.axisLeft(yScale).tickFormat(function(d) {
            return d;
        }).ticks(5)).append("text")
  .attr("x", 0)
  .attr("y", -25)
  .attr("dy", ".5em")
  .style("text-anchor", "end")
  .style("fill","red")
  .style("font-size","15px")
  .attr("transform", "rotate(-90)")
  .text("Ranking");
  
  svg.append("circle")
  .attr("cx", function(d) {
    return xScale(10);
  })
  .attr("cy", function(d) {
    return yScale(20);
  })
  .attr("r", 5)
  .attr("fill", "blue");
   
svg.append("text")
  .attr("x", function(d) {
    return xScale(7);
  })
  .attr("y", function(d) {
    return yScale(20)+4;
  })
  .attr("text-anchor", "left")
  .attr("class", "legend")
  .text("No doping allegations");

//red circle 
svg.append("circle")
  .attr("cx", function(d) {
    return xScale(10);
  })
  .attr("cy", function(d) {
    return yScale(23);
  })
  .attr("r", 5)
  .attr("fill", "red");
 
svg.append("text")
  .attr("x", function(d) {
    return xScale(7);
  })
  .attr("y", function(d) {
    return yScale(23)+4;
  })
  .attr("text-anchor", "left")
  .attr("class", "legend")
  .text("Riders with doping allegations");

    g.selectAll(".text")
        .data(data)
        .enter()
        .append("text")
        .text(function(d) {
            return d.Name
        })
        .attr("x", function(d) {
            return xScale(parseInt(d.Seconds) - 2210) + 15;
        })
        .attr("y", function(d) {
            return yScale(d.Place) + 5;
        });


    var div = d3.select(".def");
  
          svg.append("text")
       .attr("transform", "translate(100,0)")
       .attr("x", 150)
       .attr("y", 50)
        .attr("class", "title")
       .text("Doping in Professional Bicycle Racing");

  
          svg.append("text")
       .attr("transform", "translate(100,0)")
       .attr("x", 200)
       .attr("y", 80)
        .attr("class", "title1")
       .text("35 Fastest times up Alpe dHuez");
  
          svg.append("text")
       .attr("transform", "translate(100,0)")
       .attr("x", 240)
       .attr("y", 100)
        .attr("class", "title2")
       .text("Normalized to 13.8km distance");

    g.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("class", "dot")
        .attr("r", 5)
        .attr("cx", function(d) {
            return xScale(parseInt(d.Seconds) - 2210);
        })
        .attr("cy", function(d) {
            return yScale(d.Place);
        }).style("fill", function(d) {
            if (d.Doping === "")
                return "blue";
            else
                return "red";

        })
        .on("mouseover", function(d) {
            div.transition()
                .duration(100)
                .style("opacity", 0.5);
            div.html("<span class='insideInfo'>" + d.Name + ":" + d.Nationality + "</span><br><span class='insideInfo'>Year :" + d.Year + ", Time:" + d.Time + "</span><br><span class='insideInfo'>" + d.Doping + "</span>")

        })
        .on("mouseout", function() {
            div.transition()
                .duration(100)
                .style("opacity", 0);
        });
});

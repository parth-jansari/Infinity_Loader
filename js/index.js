var select = function(s) {
    return document.querySelector(s);
  },
  selectAll = function(s) {
    return document.querySelectorAll(s);
  },  
    allLines = select('#lines') 

var tl = new TimelineMax({repeat:-1});
  tl.set(allLines, {
  drawSVG:'0 0%'
})
  .to(allLines, 0.1, {
  drawSVG:'0% 5%',
  ease:Linear.easeNone
})
    .to(allLines, 0.1, {
  drawSVG:'5% 15%',
  ease:Linear.easeNone
})
      .to(allLines, 0.5, {
  drawSVG:'15% 35%',
  ease:Linear.easeNone
})
    .to(allLines, 0.5, {
  drawSVG:'25% 60%',
  ease:Linear.easeNone
})
  
    .to(allLines, 0.5, {
  drawSVG:'60% 85%',
  ease:Linear.easeNone
})

        .to(allLines, 0.1, {
  drawSVG:'85% 95%',
  ease:Linear.easeNone
})

      .to(allLines, 0.1, {
  drawSVG:'100% 100%',
  ease:Linear.easeNone
})
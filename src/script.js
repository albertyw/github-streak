console.log($);
console.log('asdf');

var html = '<div class="contrib-column contrib-column-first table-column">' +
'  <span class="text-muted">Year of contributions</span>' +
'  <span class="contrib-number">3091 total</span>' +
'  <span class="text-muted">May 21, 2015 - May 21, 2016</span>' +
'</div>' +
'' +
'<div class="contrib-column table-column">' +
'  <span class="text-muted">Longest streak</span>' +
'  <span class="contrib-number">1195 days</span>' +
'  <span class="text-muted">' +
'    February 12 –' +
'    May 21' +
'  </span>' +
'</div>' +
'' +
'<div class="contrib-column table-column">' +
'  <span class="text-muted">Current streak</span>' +
'  <span class="contrib-number">1195 days</span>' +
'  <span class="text-muted">February 12 – May 21 Place</span>' +
'</div>';

$("#contributions-calendar").append(html);
var lastYear = '<span id="last-year" class="boxed-group-inner"></span>';
var longestStreak = '<span id="longest-streak" class="boxed-group-inner"></span>';
var currentStreak = '<span id="current-streak" class="boxed-group-inner"></span>';
$("#contributions-streak");

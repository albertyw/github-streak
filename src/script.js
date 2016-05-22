var html = '<div class="contrib-column contrib-column-first table-column">' +
'  <span class="text-muted">Year of contributions</span>' +
'  <span class="contrib-number">YEAR_OF_CONTRIBUTIONS total</span>' +
'  <span class="text-muted">YEAR_OF_CONTRIBUTIONS_START - YEAR_OF_CONTRIBUTIONS_END</span>' +
'</div>' +
'' +
'<div class="contrib-column table-column">' +
'  <span class="text-muted">Longest streak</span>' +
'  <span class="contrib-number">LONGEST_STREAK days</span>' +
'  <span class="text-muted">' +
'    LONGEST_STREAK_START –' +
'    LONGEST_STREAK_END' +
'  </span>' +
'</div>' +
'' +
'<div class="contrib-column table-column">' +
'  <span class="text-muted">Current streak</span>' +
'  <span class="contrib-number">CURRENT_STREAK days</span>' +
'  <span class="text-muted">CURRENT_STREAK_START – CURRENT_STREAK_END</span>' +
'</div>';

var data = {
    'YEAR_OF_CONTRIBUTIONS': 3092,
    'YEAR_OF_CONTRIBUTIONS_START': 'May 21, 2015',
    'YEAR_OF_CONTRIBUTIONS_END': 'May 21, 2016',
    'LONGEST_STREAK':  1195,
    'LONGEST_STREAK_START': 'February 12, 2013',
    'LONGEST_STREAK_END': 'May 21, 2016',
    'CURRENT_STREAK': '1195',
    'CURRENT_STREAK_START': 'February 12, 2013',
    'CURRENT_STREAK_END': 'May 21, 2016',
};

Object.keys(data).forEach(function (key) {
    html = html.replace(key, data[key]);
});

$("#contributions-calendar").append(html);

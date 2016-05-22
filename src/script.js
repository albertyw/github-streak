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
    'YEAR_OF_CONTRIBUTIONS_START': undefined,
    'YEAR_OF_CONTRIBUTIONS_END': undefined,
    'LONGEST_STREAK':  undefined,
    'LONGEST_STREAK_START': undefined,
    'LONGEST_STREAK_END': undefined,
    'CURRENT_STREAK': undefined,
    'CURRENT_STREAK_START': undefined,
    'CURRENT_STREAK_END': undefined,
};

// TODO: data needs to be updated
var today = moment();
data.YEAR_OF_CONTRIBUTIONS_START = moment().subtract(1, 'year');
data.YEAR_OF_CONTRIBUTIONS_END = today;
data.LONGEST_STREAK_START = moment('2013-02-12');
data.LONGEST_STREAK_END = today;
data.LONGEST_STREAK = data.LONGEST_STREAK_END.diff(data.LONGEST_STREAK_START, 'days');
data.CURRENT_STREAK_START = moment('2013-02-12');
data.CURRENT_STREAK_END = today;
data.CURRENT_STREAK = data.CURRENT_STREAK_END.diff(data.CURRENT_STREAK_START, 'days');

function formatDate(date) {
    return date.format('MMMM D, YYYY');
}

Object.keys(data).forEach(function (key) {
    var replacement = data[key];
    if (typeof replacement === 'object' && typeof replacement.format === 'function') {
        replacement = formatDate(replacement);
    }
    html = html.replace(key, replacement);
});

$("#contributions-calendar").append(html);

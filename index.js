var reporter = require('./lib/reporter');

function generateReport(options) {
    console.log('Generate Report - Function');
    return reporter.generate(options);
}

module.exports = {
    generate: generateReport
};

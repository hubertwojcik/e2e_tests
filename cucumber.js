const cucumberArguments = [
  '--require-module @babel/register',
  'e2e/features/*/*.feature',
  '--format json:e2e/.tmp/cucumber-json-report-$RANDOM.json',
].join(' ');

module.exports = {
  default: cucumberArguments,
};

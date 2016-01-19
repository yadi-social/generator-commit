module.exports = [ {
    message: 'Choose type of your commit',
    name: 'type',
    type: 'list',
    choices: [ {
        name: 'new feature',
        value: 'feat'
    }, {
        name: 'bug fix',
        value: 'fix'
    }, {
        name: 'changes to documentation',
        value: 'docs'
    }, {
        name: 'formatting, missing semi colons, etc; no code change',
        value: 'style'
    }, {
        name: 'refactoring production code',
        value: 'refactor'
    }, {
        name: 'adding missing tests, refactoring tests; no production code change',
        value: 'test'
    }, {
        name: 'no production code change',
        value: 'chore'
    } ]
}, {
    message: 'Choose type of your improvements',
    name: 'funtip',
    type: 'checkbox',
    choices: [ {
        name: 'improving the format/structure of the code',
        value: ':art:',
        checked: false
    }, {
        name: 'improving performance',
        value: ':racehorse:',
        checked: false
    }, {
        name: 'plugging memory leaks',
        value: ':non-potable_water:',
        checked: false
    }, {
        name: 'writing docs',
        value: ':memo:',
        checked: false
    }, {
        name: 'fixing something on Linux',
        value: ':penguin:',
        checked: false
    }, {
        name: 'fixing something on OS X',
        value: ':apple:',
        checked: false
    }, {
        name: 'fixing something on Windows',
        value: ':checkered_flag:',
        checked: false
    }, {
        name: 'fixing a bug',
        value: ':bug:',
        checked: false
    }, {
        name: 'removing code or files',
        value: ':fire:',
        checked: false
    }, {
        name: 'fixing the CI build',
        value: ':green_heart:',
        checked: false
    }, {
        name: 'adding tests',
        value: ':white_check_mark:',
        checked: false
    }, {
        name: 'dealing with security',
        value: ':lock:',
        checked: false
    }, {
        name: 'upgrading dependencies',
        value: ':arrow_up:',
        checked: false
    }, {
        name: 'downgrading dependencies',
        value: ':arrow_down:',
        checked: false
    }, {
        name: 'removing linter warnings',
        value: ':shirt:',
        checked: false
    } ]
}, {
    message: 'An imperative tone is also helpful in conveying what a commit does, rather than what it did',
    name: 'subject',
    validate: function( str ) {
        return str.trim().length > 2;
    }
}, {
    message: 'Commit body message',
    name: 'body',
    default: ''
}, {
    message: function() {
        var string = 'Commit footer message: For example:\n';
        string += '  References #1, #4, and #2.\n';
        string += '  Fix #1. note this marks the item as accepted in Sprintly\n';
        string += '  Closes #1 and #2. note this marks the item as accepted in Sprintly\n';
        return string;
    },
    name: 'footer',
    default: ''
} ];

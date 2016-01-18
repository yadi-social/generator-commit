var updateNotifier = require( 'update-notifier' );
var pkg = require( '../package.json' );
module.exports = function updater() {
    var notifier = updateNotifier( {
        // Check per 1 day
        updateCheckInterval: 1000 * 60 * 60 * 24,
        pkg: pkg
    } );
    if ( notifier.update ) {
        notifier.notify();
    }
};

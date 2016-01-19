var exec = require( 'child_process' ).exec;
var generators = require( 'yeoman-generator' );
var util = require( './util/' );
var prompts = require( './prompts' );
// Check outdated dependences
util.updater();
// Create exported module
module.exports = generators.Base.extend( {
    initializing: function() {
        // Show out custom banner
        util.banner();
    },
    prompting: function() {
        var done = this.async();
        // Update config
        this.prompt( prompts, ( function fn( answers ) {
            for ( var key in answers ) {
                if ( answers.hasOwnProperty( key ) && ( answers[ key ] != null ) ) {
                    this.options[ key ] = answers[ key ];
                }
            }
            done();
        } ).bind( this ) );
    },
    git: function(){
        var done = this.async();
        var string = '';
        if ( this.options.add ) {
            string += 'git add -A && ';
        }
        string += 'git commit -m "' + this.options.funtip.join( ' ' ) + ' ' + this.options.type + ': ' + this.options.subject + '" -m "' + this.options.body + '" -m "' + this.options.footer + '"';
        exec( string, function( err, stdout ) {
            console.log( 'Commited!\n', stdout );
        } );
        done();
    }
} );

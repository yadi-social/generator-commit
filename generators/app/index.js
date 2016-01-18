var exec = require( 'child_process' ).exec;
var generators = require( 'yeoman-generator' );
var util = require( '../../util' );
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
        if ( this.options.add ) {
            this.config.set( 'add', this.options.add );
        }
        // Update config
        this.prompt( prompts, ( function fn( answers ) {
            for ( var key in answers ) {
                if ( answers.hasOwnProperty( key ) && ( answers[ key ] != null ) ) {
                    this.config.set( key, answers[ key ] );
                }
            }
            done();
        } ).bind( this ) );
    },
    git: function(){
        var done = this.async();
        if ( this.config.get( 'add' ) ) {
            console.log( 'yes' );

            exec( 'git add -A', function( err, stdout ) {
                console.log( 'Added all files to git staging area\n', stdout );
            } );
        }
        exec( 'git commit -m "' + this.config.get( 'funtip' ).join( ' ' ) + ' ' + this.config.get( 'type' ) + ': ' + this.config.get( 'subject' ) + '" -m "' + this.config.get( 'body' ) + '" -m "' + this.config.get( 'footer' ) + '"', function( err, stdout ) {
            console.log( 'Commited!\n', stdout );
        } );
        done();
    },
    end: function() {
    }
} );

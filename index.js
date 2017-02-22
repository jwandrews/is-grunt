'use strict';

const __hasTaskRunner__ = require( 'has-task-runner' );

const isGrunt = path => {
  return new Promise(( resolve, reject ) => {
    if ( path === '' ) {
      reject( new Error( 'No path specified.' ));
    }

    __hasTaskRunner__( 'grunt', { path })
      .then(({ runnerExists }) => {
        resolve( runnerExists );
      });
  });
};

module.exports = { isGrunt };

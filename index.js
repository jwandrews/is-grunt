'use strict';

const __hasTaskRunner__ = require( 'has-task-runner' );

const isGrunt = path => {
  if ( path === '' ) {
    throw new Error( 'No path specified.' );
  }

  return __hasTaskRunner__( 'grunt', { path })
    .then(({ runnerExists }) => {
      return runnerExists;
    });
};

module.exports = { isGrunt };

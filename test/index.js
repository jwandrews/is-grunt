'use strict';

import { resolve } from 'path';
import test from 'ava';
import { isGrunt } from '../index.js';

test( 'empty path given', t => {
  t.plan( 1 );
  return isGrunt( '' )
    .catch( e => {
      t.is( e.message, 'No path specified.' );
    });
});

test( 'gruntfile found', t => {
  return isGrunt( resolve( __dirname, 'fixtures/gruntfile' ))
    .then( gruntfileExists => {
      t.true( gruntfileExists );
    });
});

test( 'no gruntfile found', t => {
  return isGrunt( resolve( __dirname, 'fixtures/no-gruntfile' ))
    .then( gruntfileExists => {
      t.false( gruntfileExists );
    });
});

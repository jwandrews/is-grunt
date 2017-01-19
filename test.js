import path from 'path';
import test from 'ava';
import { isGrunt } from './index.js';

test( 'empty path given', async t => {
  const error = await t.throws(
    () => {
      isGrunt( '' );
    },
    Error
  );

  t.is( error.message, 'No path specified.' );
});

test( 'gruntfile found', async t => {
  t.true( await isGrunt( path.resolve( 'fixtures/gruntfile' )));
});

test( 'no gruntfile found', async t => {
  t.false( await isGrunt( path.resolve( 'fixtures/no-gruntfile' )));
});

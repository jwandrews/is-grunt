"use strict";

const { resolve } = require("path");
const test = require("ava");
const { isGrunt } = require("../");

test("empty path given", async t => {
  t.plan(1);
  return isGrunt("").catch(e => {
    t.is(e.message, "No path specified.");
  });
});

test("gruntfile found", async t => {
  return isGrunt(resolve(__dirname, "fixtures/gruntfile")).then(
    gruntfileExists => {
      t.true(gruntfileExists);
    }
  );
});

test("no gruntfile found", async t => {
  return isGrunt(resolve(__dirname, "fixtures/no-gruntfile")).then(
    gruntfileExists => {
      t.false(gruntfileExists);
    }
  );
});

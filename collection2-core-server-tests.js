// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by collection2-core-server.js.
import { name as packageName } from "meteor/orcprogramming:collection2-core-server";

// Write your tests here!
// Here is an example.
Tinytest.add('collection2-core-server - example', function (test) {
  test.equal(packageName, "collection2-core-server");
});

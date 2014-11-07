angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { "id": 0, "name": "November 5  " +
        " - 5 miles" },
      { "id": 0, "name": "November 4 " +
          " - 10 miles" },
      { "id": 0, "name": "November 3 " +
          " - 2.2 miles" },
      { "id": 0, "name": "November 2 " +
          " - 1.4 miles" },
      { "id": 0, "name": "November 1 " +
          " - 6 miles" },
      { "id": 0, "name": "October 30 " +
          " - 8 miles" },
      { "id": 0, "name": "October 29 " +
          " - 2.3 miles" },
      { "id": 0, "name": "October 28 " +
          " - 4.7 miles" },
      { "id": 0, "name": "October 26 " +
          " - 1 miles" },
      { "id": 0, "name": "October 22 " +
          " - 1.3 miles" },
      { "id": 0, "name": "October 21 " +
          " - 4 miles" },
      { "id": 0, "name": "October 20 " +
          " - 3 miles" },
      { "id": 0, "name": "October 19 " +
          " - 9 miles" },
      { "id": 0, "name": "October 17 " +
          " - 5 miles" },
      { "id": 0, "name": "October 15 " +
          " - 7.6 miles" },
      { "id": 0, "name": "October 14 " +
          " - 2 miles" },
      { "id": 0, "name": "October 13 " +
          " - 2.5 miles" },
      { "id": 0, "name": "October 12 " +
          " - 4.3 miles" }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
});


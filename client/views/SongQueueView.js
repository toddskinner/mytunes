// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  event : {
    'ended': function() {
      this.model.ended();
    }
  },

  initialize: function() {

  },

  render: function() {
    return this.$el;
  }

});

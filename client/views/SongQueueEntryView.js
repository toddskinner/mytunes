// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  template: _.template('<div class="artist"<%= artist %>"> \
                       <div class="title"><%= title %></div> \
                       </div>'),

  events: {
    'click' : 'enqueue',
    'play' : 'dequeue',
  },

  enqueue : function() {
    this.model.enqueue();
    // this.add
  },

  render: function() {
    this.$el.html(this.template(this.model));
  },

  dequeue: function() {
    this.model.dequeue();
  }


});

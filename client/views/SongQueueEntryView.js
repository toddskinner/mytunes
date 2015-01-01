// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  template: _.template('<div class="artist"<%= artist %>"> \
                       <div class="title"><%= title %></div> \
                       </div>'),

  events: {
    enqueue : function() {
      this.model.enqueue();
    },
    dequeue: function() {
      this.model.dequeue();
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  },
});

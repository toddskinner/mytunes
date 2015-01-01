// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  template: _.template('<div class="artist"<%= artist %>"> \
                       <div class="title"><%= title %></div> \
                       </div>'),

  event : {
    'click' : 'enqueue'
  },

  enqueue : function() {
    this.model.enqueue();
  },

  render: function() {
    this.$el.html(this.template(this.model));
  }


});

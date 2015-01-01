// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  // event: {
  //   'ended': function() {
  //     this.model.ended();
  //   }
  // },

  initialize: function() {
    this.render();
    setInterval(this.render.bind(this), 5000);
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
    // return this.$el;
  }
});

// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  // event: {
  //   'ended': function() {
  //     this.model.ended();
  //   }
  // },

  initialize: function() {
    this.render();
  },

  render: function() {
    // this.$el.children().detach();

    this.$el.html('<th>Library</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
    // return this.$el;
  }

});

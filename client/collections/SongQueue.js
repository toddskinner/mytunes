// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function(){
      if(this.length === 1){
        this.playFirst();
      }
    });
  },

  playFirst: function(){
    this.at(0).play();
  },

  dequeue: function(){
    this.at(0).remove();
  }

});

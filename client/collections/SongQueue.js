// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  //object.on(event, callback, [context]) Alias: bind

  initialize: function() {
    this.on('add', function(){
      if(this.length === 1){
        this.playFirst();
      }
    });

    this.on('ended', function(){
      this.shift();
      if(this.length > 0){
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(){
      this.remove();
    }, this);
  },

  playFirst: function(){
    this.at(0).play();
  },


});

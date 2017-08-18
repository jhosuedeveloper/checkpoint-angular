"use strict";

// (function(){
  angular.module("musingsApp", [])
  .factory('musings', [musingService])
  .controller('musingsController', ['musings', musingsControllerFunction])




  function musingService(){

    const musings = [
      {title: "", content:"", author: ""},
      {title: "", content:"", author: ""},
      {title: "", content:"", author: ""}
    ]


    return {
      all: all,
      create: create,
      remove: remove
    }

    function all () {
      return musings
    }

    function create(newMusing){
      musings.push({title: newMusing.title, content: newMusing.content, author: newMusing.author })
    }

    function remove (museindex){
    delete  musings[museindex]
    }

  }//END musings Service function





  function musingsControllerFunction (musings) {
    this.musings = musings.all()
    this.newMusing = {
      title: "", content: "", author: ""
    }

    function createMusing(newMusing){
      musings.create (newMusing)
    }


    function removeMusing(museindex){
      musings.remove(museindex)
    }



  }










// })();//end of function

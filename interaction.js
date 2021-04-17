
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
  // Définir ici les attributs de la 'classe'
  var initial_x = 0
  var initial_y = 0
  var final_x = 0
  var final_y = 0
  var hasPress = false

  // Developper les 3 fonctions gérant les événements
  DnD.prototype.pression = function (e) {
    hasPress = true
    interactor.onInteractionStart(this);
    var pos = getMousePosition(canvas, e)
    console.log("pression")
    console.log(pos)
    initial_x = pos.x
    initial_y = pos.y
  }

  DnD.prototype.deplacement = function (e) {
    if(hasPress) {
      interactor.onInteractionUpdate(this);
      pos = getMousePosition(canvas, e)
      console.log("deplacement")
      console.log(initial_x)
      console.log(initial_y)
      console.log(pos)
      final_x = pos.x
      final_y = pos.y
    }
  }

  DnD.prototype.relachement = function (e) {
    if(hasPress) {
      interactor.onInteractionEnd(this);
      console.log("relachement")
      console.log(initial_x)
      console.log(initial_y)
      console.log(final_y)
      console.log(final_y)
      initial_x = 0
      initial_y = 0
      final_x = 0
      final_y = 0
      hasPress = false
    }
  }

  // Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.pression, false);
  canvas.addEventListener('mousemove', this.deplacement, false);
  canvas.addEventListener('mouseup', this.relachement, false);

};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};






var currentScene = 1;
var maxScenes = 5;

$(document).on('ready', function() {

$('.scene').each(function(_index, _el) {

    var item = $(_el);

    $('.change-scene-btn', item).on('click', function(_e) {
        var itemScene = $(_e.currentTarget).parents('.scene').data('scene');

        if (itemScene === currentScene) {
            addAnimationClasses(item);
        }
    })

    $('.add-more', item).on('click', function(_e) {
        $('.image-container', $(this).parent()).append('<img class="animation-img" src="img/swimmer.gif" alt=""/>');
    })

});

});




function addAnimationClasses( _scene ){
  // console.log("CURRENT SCENE ", currentScene);

  _scene.addClass('position-animation current-scene');
  $('.transition-layer', _scene).addClass('rotation-animation');
  $('.scene-content-container', _scene).addClass('scale-animation');
  
  currentScene++;
  if( currentScene > maxScenes ){
    currentScene = 1;
  }

  // console.log("NEXT SCENE ", currentScene);
  displayNextScene();

  window.setTimeout( 
    function(){ cleanupAnimationClasses(_scene)},
    2000
    )
}

function displayNextScene(){
  $('.scene').each(function(_index, _el){
    var item = $(_el);
    if( item.data('scene') == currentScene ){
      item.removeClass('hidden');
    }
  });
}

function cleanupAnimationClasses( _scene ){
  _scene.removeClass('position-animation current-scene');
  $('.transition-layer', _scene).removeClass('rotation-animation');
  $('.scene-content-container', _scene).removeClass('scale-animation');
  _scene.addClass('hidden');
}

// setInterval(function() {
//   // animiate something
// }, 1000/60

// attempting to load a spritesheet

var $inspireObjects = $('.inspire-object');
$inspireObjects.hide();

setInterval(function(){
  console.log("hello")
  $inspireObjects.hide();
  totalObjects = $inspireObjects.size();
  randomNumber = Math.floor((Math.random() * totalObjects));
  $('.inspire-object').eq(randomNumber).show();
}, 2500)









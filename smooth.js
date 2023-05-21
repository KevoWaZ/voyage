var scrolling = false;
var scrollPos = 0;
var scrollVelocity = 0;
var inertiaInterval;

window.addEventListener('wheel', function(event) {
  event.preventDefault();

  var deltaY = event.deltaY;

  if (!scrolling) {
    scrolling = true;
    scrollPos = window.scrollY;
    scrollVelocity = 0;
    cancelAnimationFrame(inertiaInterval);
  }

  scrollVelocity += deltaY * 0.1; // Ajustez le facteur de vitesse ici (0.1)

  inertiaInterval = requestAnimationFrame(function() {
    scrollPos += scrollVelocity;

    window.scrollTo(0, scrollPos);

    scrollVelocity *= 0.95; // Ajustez le facteur de décélération ici (0.95)

    // Ajouter un effet d'inertie en continuant le défilement légèrement après avoir relâché
    if (Math.abs(scrollVelocity) < 0.1) {
      scrolling = false;
      cancelAnimationFrame(inertiaInterval);

      // Ajouter un intervalle pour continuer le défilement légèrement pendant une durée définie
      var inertiaDuration = 300; // Durée de l'inertie (en millisecondes)
      var startTime = performance.now();

      function inertiaScroll() {
        var elapsed = performance.now() - startTime;
        var progress = elapsed / inertiaDuration;

        if (progress < 1) {
          var inertiaDelta = interpolate(0, scrollVelocity * 0.1, progress); // Ajustez le facteur d'inertie ici (0.1)
          scrollPos += inertiaDelta;

          window.scrollTo(0, scrollPos);

          inertiaInterval = requestAnimationFrame(inertiaScroll);
        }
      }

      inertiaScroll();
    } else {
      inertiaInterval = requestAnimationFrame(arguments.callee);
    }
  });
});

function interpolate(start, end, factor) {
  return start + (end - start) * factor;
}

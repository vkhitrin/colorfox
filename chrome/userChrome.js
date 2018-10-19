statuspanel = document.getElementById("statuspanel");
stopreloadbutton = document.getElementById("stop-reload-button");
var mutationObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        statuspanel.removeAttribute("mirror");
        stopreloadbutton.removeAttribute("animate");
    });
  });

mutationObserver.observe(statuspanel, {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
  attributeOldValue: true,
  characterDataOldValue: true
});

mutationObserver.observe(stopreloadbutton, {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
  attributeOldValue: true,
  characterDataOldValue: true
});
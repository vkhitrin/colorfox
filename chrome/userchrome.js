statuspanel = document.getElementById("statuspanel");
var mutationObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        statuspanel.removeAttribute("mirror");
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
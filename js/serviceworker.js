var sw = null;

// only use service worker if Chrome or Firefox -- Safari is problematic
if (navigator.userAgent.search("Chrome") >= 0 || navigator.userAgent.search("Firefox") >= 0) {

  // register a service worker
  if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js')
    .then(function(reg) {
      console.log("service worker registered!");
    }).catch(function(error) {
      console.log("service worker NOT registered!");
    });
  }
}

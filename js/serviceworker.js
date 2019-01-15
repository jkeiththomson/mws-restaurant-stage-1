var sw = null;

// register a service worker
if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/sw.js')
  .then(function(reg) {
    console.log("service worker registered!");
  }).catch(function(error) {
    console.log("service worker NO Tregistered!");
  });
}


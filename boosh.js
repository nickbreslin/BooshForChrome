document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.query({
      active: true,
    }, function(tabs) {
      var tab = tabs[0];
      d = document;




      var f = d.createElement('form');
      f.action = 'http://review.booshlin.com/results.php?view=mini';
      f.method = 'post';
      var i = d.createElement('input');
      i.type = 'hidden';
      i.name = 'website';
      i.value = tab.url;
      f.appendChild(i);
      d.body.appendChild(f);
      f.submit();
    });
  }, false);
}, false);
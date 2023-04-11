setInterval(function() {
    location.reload();
  }, 10000);
  
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  var siraNo = urlParams.get('siraNo');
  var ad = urlParams.get('ad');
  var soyad = urlParams.get('soyad');
  var siraNoCell = document.querySelector('.sira-no');
  siraNoCell.textContent = siraNo;
  var adCell = document.querySelector('.ad');
  adCell.textContent = ad;
  var soyadCell = document.querySelector('.soyad');
  soyadCell.textContent = soyad;
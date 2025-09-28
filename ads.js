(function () {
  const ad = document.createElement('div');
  ad.style = 'padding:10px; background:#f1f1f1; border:1px solid #ccc; margin:10px 0;';
  ad.innerHTML = `<a href="https://your-affiliate-link.com" target="_blank" style="text-decoration:none; color:#333;">
    👉 Truy cập Wifi tốc độ cao tại đây!
  </a>`;

  // Chèn vào cuối body
  document.addEventListener("DOMContentLoaded", function () {
    document.body.appendChild(ad);
  });
})();

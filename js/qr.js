function domReady(fn) {
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    setTimeout(fn, 1000);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

domReady(function () {
  function onScanSuccess(decodeText, decodeResult) {
    // Redirect to the decoded URL
    window.location.href = decodeText;
  }

  const htmlScanner = new Html5QrcodeScanner("qr-reader", {
    fps: 10,
    qrbos: 250,
  });

  htmlScanner.render(onScanSuccess);
});

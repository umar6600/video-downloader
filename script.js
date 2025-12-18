function download() {
  let url = document.getElementById("url").value;
  let result = document.getElementById("result");

  // TikTok
  if (url.includes("tiktok.com")) {
    result.innerHTML = "Processing TikTok...";

    fetch("https://www.tikwm.com/api/?url=" + encodeURIComponent(url))
      .then(res => res.json())
      .then(data => {
        result.innerHTML = `
          <a href="${data.data.play}" target="_blank">
            👉 Download TikTok Video
          </a>
        `;
      })
      .catch(() => {
        result.innerHTML = "❌ TikTok error";
      });
  }

  // Instagram
  else if (url.includes("instagram.com")) {
    window.open(
      "https://en.savefrom.net/7/?url=" + encodeURIComponent(url),
      "_blank"
    );
  }

  else {
    result.innerHTML = "❌ Invalid link";
  }
}

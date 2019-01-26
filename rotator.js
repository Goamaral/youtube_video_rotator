(function() {
  if (location.host == "www.youtube.com") {
    switch (location.pathname) {
      case "/playlist":
        document.querySelector("#content > a").click()
        break

      case "/watch":
        if (location.search.includes("list")) {
          let one_second = 1000
          let one_minute = 60 * one_second
          let ten_minutes = 10 * one_minute
          let done = false

          setTimeout(() => {
            document.querySelector("#movie_player > div.ytp-chrome-bottom"
             + " > div.ytp-chrome-controls"
             + " > div.ytp-left-controls"
             + " > a.ytp-next-button.ytp-button"
            ).click()
          }, ten_minutes)
        } else {
          window.alert("Go to a playlist")
        }
        break
    }
  }
})()
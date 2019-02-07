(function() {
  if (location.host == "www.youtube.com") {
    let timeout = parseInt(localStorage.getItem('timeout'))
    if (timeout) clearTimeout(timeout)

    switch (location.pathname) {
      case "/playlist":
        if (this.confirmed) return
        let use = confirm("Use youtube rotator?")
        this.confirmed = true

        localStorage.setItem('rotator', use)
        if (!use) return

        document.querySelector("#content > a").click()
        break

      case "/watch":
        this.confirmed = undefined

        if (location.search.includes("list")) {
          if (localStorage.getItem('rotator') != 'true') return

          let one_second = 1000
          let one_minute = 60 * one_second
          let ten_minutes = 10 * one_minute

          let time_to_wait = ten_minutes

          let timeout = setTimeout(() => {
            if (localStorage.getItem('rotator') == 'true') {
              document.querySelector("#movie_player > div.ytp-chrome-bottom"
              + " > div.ytp-chrome-controls"
              + " > div.ytp-left-controls"
              + " > a.ytp-next-button.ytp-button"
              ).click()
            }
          }, time_to_wait)

          localStorage.setItem('timeout', timeout)
        }
        break

      default:
        this.confirmed = undefined
        break
    }
  }
})()
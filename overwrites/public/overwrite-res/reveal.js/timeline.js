(() => {
  const search = {}
  window.location.search.substr(1).split('&').forEach(pair => {
    const [key, value] = pair.split('=')
    if(key.length > 0) {
      search[key] = value !== undefined ? value : ''
    }
  })

  console.info("timeline: type '~' to set timeline time")
  document.addEventListener('keypress', ({ key }) => {
    if(key === '~') {
      const minutes = parseFloat(prompt('How long is this session? (in minutes)'))
      let start_time = (new Date(
        prompt('when will the session start? (ISO date format, empty to start from now)')
      )).getTime()
      if(isNaN(start_time)) {
        start_time = (new Date()).getTime()
      }

      search.minutes = minutes.toString()
      search.start = (new Date(start_time)).toISOString()

      window.location.search = Object.entries(search).map(pair => pair.join('=')).join('&')
    }
  })

  const timeline = document.getElementById('timeline')
  if(search.minutes && search.start && timeline) {
    const start = new Date(search.start)
    const length = search.minutes * 60000

    setInterval(() => {
      const percent = (new Date() - start) * 100 / length
      if(percent >= -5 && percent <= 105) {
        timeline.style.cssText = `left: ${percent}%;`
      }
    }, 1000)

    console.info("timeline: activated")
    console.info("  start:", start)
    console.info("  length:", length, "millisecond")
  }
})();

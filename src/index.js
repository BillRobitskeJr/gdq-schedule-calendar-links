(function() {
  let date = '',
      game = '',
      category = '',
      startTime = null,
      endTime = null,
      firstRow = null;
  const year = document.querySelector('h1').textContent.match(/GDQ(\d{4})/)[1];
  Array.from(document.querySelectorAll('#runTable tbody tr')).forEach(row => {
    if (row.classList.contains('day-split')) {
      const matches = row.textContent.match(/\,\s(\w+)\s(\d+)/);
      date = `${matches[1]} ${matches[2]}, ${year}`;
    } else if (!row.classList.contains('second-row')) {
      firstRow = row;
      const time = row.children[0].textContent.trim();
      startTime = new Date(`${date} ${time}`);
      game = row.children[1].textContent.trim();
    } else {
      const matches = row.children[0].textContent.trim().match(/(\d+)\:(\d+)\:(\d+)/);
      const duration = parseInt(matches[1]) * 3600 + parseInt(matches[2]) * 60 + parseInt(matches[3]);
      endTime = new Date(startTime);
      endTime.setSeconds(startTime.getSeconds() + duration);
      category = row.children[1].textContent.trim();
      if (startTime.getTime() > Date.now()) {
        const summary = `${game} (${category})`,
              start = startTime.toISOString().replace(/[\-\:]/g, '').replace(/\.\d{3}/g, ''),
              end = endTime.toISOString().replace(/[\-\:]/g, '').replace(/\.\d{3}/g, '');
        const vCal = [
          'BEGIN:VCALENDAR',
          'VERSION:2.0',
          'PRODID:-//hacksw/handcal//NONSGML v1.0//EN',
          'BEGIN:VEVENT',
          `UID:${start}@gamesdonequick.com`,
          `DTSTAMP:${start}`,
          `DTSTART:${start}`,
          `DTEND:${end}`,
          `SUMMARY:${summary}`,
          'END:VEVENT',
          'END:VCALENDAR'
        ].join('\r\n');
        const link = document.createElement('a');
        link.innerHTML = game;
        link.setAttribute('href', 'data:text/calendar;charset=utf-8,' + encodeURIComponent(vCal));
        link.setAttribute('download', 'run.ics');

        firstRow.children[1].innerHTML = '';
        firstRow.children[1].appendChild(link);
      }
    }
  });
})();

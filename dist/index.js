"use strict";!function(){var s="",u="",h="",m=null,D=null,E=null,N=document.querySelector("h1").textContent.match(/GDQ(\d{4})/)[1];Array.from(document.querySelectorAll("#runTable tbody tr")).forEach(function(t){if(t.classList.contains("day-split")){var e=t.textContent.match(/\,\s(\w+)\s(\d+)/);s="".concat(e[1]," ").concat(e[2],", ").concat(N)}else if(t.classList.contains("second-row")){var n=t.children[0].textContent.trim().match(/(\d+)\:(\d+)\:(\d+)/),c=3600*parseInt(n[1])+60*parseInt(n[2])+parseInt(n[3]);if((D=new Date(m)).setSeconds(m.getSeconds()+c),h=t.children[1].textContent.trim(),m.getTime()>Date.now()){var a="".concat(u," (").concat(h,")"),r=m.toISOString().replace(/[\-\:]/g,"").replace(/\.\d{3}/g,""),o=D.toISOString().replace(/[\-\:]/g,"").replace(/\.\d{3}/g,""),i=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//hacksw/handcal//NONSGML v1.0//EN","BEGIN:VEVENT","UID:".concat(r,"@gamesdonequick.com"),"DTSTAMP:".concat(r),"DTSTART:".concat(r),"DTEND:".concat(o),"SUMMARY:".concat(a),"END:VEVENT","END:VCALENDAR"].join("\r\n"),l=document.createElement("a");l.innerHTML=u,l.setAttribute("href","data:text/calendar;charset=utf-8,"+encodeURIComponent(i)),l.setAttribute("download","run.ics"),E.children[1].innerHTML="",E.children[1].appendChild(l)}}else{var d=(E=t).children[0].textContent.trim();m=new Date("".concat(s," ").concat(d)),u=t.children[1].textContent.trim()}})}();
function to_form(){$('html, body').animate({scrollTop:$('#form-block').offset().top},800);}document.addEventListener("DOMContentLoaded",Datee);function Datee(){var msInDay=86400000,counterLength=90,months,countryName='ru',isAbbreviated=false,localDate=new Date();switch(countryName){case'it':months=['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];break;case'es':months=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];break;case'fr':months=['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];break;case'pt':months=['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];break;case'de':months=['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'];break;case'bg':months=['Януари','Февруари','Март','Април','Май','Юни','Юли','Август','Септември','Октомври','Ноември','Декември'];break;case'pl':months=['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'];break;case'ro':months=['Ianuarie','Februarie','Martie','Aprilie','Mai','Iunie','Iulie','August','Septembrie','Octombrie','Noiembrie','Decembrie'];break;case'hu':months=['Január','Február','Március','Április','Május','Június','Július','Augusztus','Szeptember','Október','November','December'];break;case'gr':case'cy':months=['Ιανουάριος','Φεβρουάριος','Μάρτιος','Απρίλιος','Μάιος','Ιούνιος','Ιούλιος','Αύγουστος','Σεπτέμβριος','Οκτώβριος','Νοέμβριος','Δεκέμβριος'];break;case'ru':months=['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'];break;}if(isAbbreviated){for(var i=0;i<months.length;i++){months[i]=months[i].slice(0,3).toLowerCase();}}for(var counter=0;counter<counterLength;counter++){var dateClass="date-"+counter,nodeList=document.getElementsByClassName(dateClass),date=new Date(localDate.getTime()-counter*msInDay),timeCounter=0;timeArray=time(nodeList);timeArray=timeFormat(timeArray);for(var i=0;i<nodeList.length;i++){var data=nodeList[i].dataset;if(data.format){nodeList[i].innerHTML=format(date,data.format);}else{nodeList[i].innerHTML=format(date);}if(/\btime\b/.test(nodeList[i].className)){nodeList[i].innerHTML+=" "+timeArray[timeCounter];timeCounter++;}}}for(var counter=0;counter<counterLength;counter++){var dateClass="date"+counter,nodeList=document.getElementsByClassName(dateClass),date=new Date(localDate.getTime()+counter*msInDay),timeCounter=0;timeArray=time(nodeList);timeArray=timeFormat(timeArray);for(var i=0;i<nodeList.length;i++){var data=nodeList[i].dataset;if(data.format){nodeList[i].innerHTML=format(date,data.format);}else{nodeList[i].innerHTML=format(date);}}}function time(nodeList,reverse){var timeArray=[];for(var i=0;i<nodeList.length;i++){if(nodeList[i].className.match(/\btime\b/)){timeArray.push(timeRandom());}}if(reverse)timeArray.sort(function(a,b){return b-a;});else timeArray.sort(function(a,b){return a-b;});return timeArray;}function timeRandom(){return Math.round(0+Math.random()*1440);}function timeFormat(timearray){var array=[];for(var i=0;i<timearray.length;i++){var htemp=Math.floor(timearray[i]/60),mtemp=timearray[i]%60,hours=htemp<10?"0"+htemp:htemp,minutes=mtemp<10?"0"+mtemp:mtemp;array.push(hours+":"+minutes);}return array;}function format(date,formatstring){var innerDate="",day=date.getDate(),year=date.getFullYear(),month=date.getMonth()+1,fo=formatstring||true;switch(fo){case"mm.dd.yyyy":innerDate+=(month<10)?("0"+month):month;innerDate+=".";innerDate+=(day<10)?("0"+day):day;innerDate+="."+year;return innerDate;case"dd month yyyy":innerDate+=(day<10)?("0"+day):day;innerDate+=" ";innerDate+=months[month-1];innerDate+=" "+year;return innerDate;case"day dd, month yyyy":var days=["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];innerDate+=days[new Date(year,month-1,day).getDay()];innerDate+=" ";innerDate+=(day<10)?("0"+day):day;innerDate+=" ";innerDate+=months[month-1];innerDate+=" "+year;return innerDate;case"dd/mm/yyyy":innerDate+=(day<10)?("0"+day):day;innerDate+="/";innerDate+=(month<10)?("0"+month):month;innerDate+="/"+year;return innerDate;case"dd-mm-yyyy":innerDate+=(day<10)?("0"+day):day;innerDate+="-";innerDate+=(month<10)?("0"+month):month;innerDate+="-"+year;return innerDate;default:innerDate+=(day<10)?("0"+day):day;innerDate+=" ";innerDate+=months[month-1];return innerDate;}}}var popupBuild=true;(function(){function initiate(){function init(){var desktopPopup=document.querySelector('#cloneThis'),mobilePopup=document.querySelector('#cloneMobileThis');var h=document.querySelector('.hours'),m=document.querySelector('.minutes'),s=document.querySelector('.seconds');if(h&&m&&s){initializeTimer();}}document.addEventListener('DOMContentLoaded',init);function initializeTimer(){if(!localStorage.getItem("heytimer")){var time={hours:0,minutes:27,seconds:0},different=false;time=time.hours*3600+time.minutes*60+time.seconds;localStorage.setItem("time",time);localStorage.setItem("heytimer",true);localStorage.setItem("different",different);}timerSettings();}function timerSettings(){var time=localStorage.getItem('time'),different=localStorage.getItem('different')==="true",hours=parseInt(time/3600,10),minutes=parseInt((time-hours*3600)/60,10),seconds=parseInt(time%60,10);minutes=minutes<10?"0"+minutes:""+minutes;seconds=seconds<10?"0"+seconds:""+seconds;hours=hours<10?"0"+hours:""+hours;var hoursHTML=document.getElementsByClassName("hours");var minutesHTML=document.getElementsByClassName("minutes");var secondsHTML=document.getElementsByClassName("seconds");if(--time<0){localStorage.removeItem("heytimer");return;}if(different){seconds=seconds.split("");minutes=minutes.split("");hours=hours.split("");doubleFilling(hoursHTML,hours);doubleFilling(minutesHTML,minutes);doubleFilling(secondsHTML,seconds);}else{filling(hoursHTML,hours);filling(minutesHTML,minutes);filling(secondsHTML,seconds);}localStorage.setItem("time",time);setTimeout(timerSettings,1000);}function filling(obj,value){for(var i=0;i<obj.length;i++){obj[i].innerHTML=value;}}function doubleFilling(obj,value){for(var i=0;i<obj.length;i++){obj[i].innerHTML=value[i%2];}}}initiate();})();
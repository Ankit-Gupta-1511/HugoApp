// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});

////////////////////////////////////////////////////////////////////

//////////////  calculator feature  /////////////////////////////////////

var calender = $('table')
var j=0;
var i=1;
var d = new Date();
var date = d.getDate();
var month = d.getMonth()+1;
var day = d.getDay();

var dayDiff = 7-day;

date = date + dayDiff+7;
var week=$('.week');
for(i=1;i<=28;i++)
 {
   if(i%7 === 1 )
      {
        if(i === 1)
        {var week=$('.week').first();}
        else
        {var week=week.next();}
      }

    var td = "<td onclick = \"showDate(this)\">"+date+"</td>";
    if(month%2 == 0)
    {
      if(date == 30)
        {
          date = 1;

        }
        else{
          date++;
        }
      if(month == 2)
      {
        if(date==28)
          {
            date = 1;

          }
          else{
            date++;
          }
      }
    }

    else
    {
      if(date == 31)
        {
          date = 1;

        }
        else{
          date++;
        }
    }

   week.append(td);
 }


function showDate(evt)
{
  var repayDate=$('.repayDate');
  var $d = $('td');
  var i = -1;
  var d = $('td').index(evt);
  var day;
  var sysDate = new Date();
  var month;
  var mi = sysDate.getMonth();
  var m = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  var d1 = d%7;
  if(d1>7)
    d1-=7;
  switch(d1)
  {
    case 0 : day = "Sun";
             break;
    case 1 : day = "Mon";
             break;
    case 2 : day = "Tue";
             break;
    case 3 : day = "Wed";
             break;
    case 4 : day = "Thu";
             break;
    case 5 : day = "Fri";
             break;
    case 6 : day = "Sat";
             break;
  }

  do{
    i++;
    $d = $d.next();
  }while($d.html() != 1);

  if(d > i)
  {
      mi++;
  }
  month = m[mi];

  date=evt.textContent;
  repayDate.text(month +' '+ day + ', ' +date);

  var dayDiff = $('#dayDiff');
  var diff = date-sysDate.getDate();
  if(diff<=0)
    {
      if((mi)%2==0)
        {
          diff+=30;
        }
        else
        {
          diff+=31;
        }
    }
  dayDiff.text(diff);
}


function amountToggle(slider)
{

  var amount=$('.amount');
  var interest=$('#interest');
  var totalAmount = $('#totalAmount');
  var rate = 17.60+(slider.value-100)/10*1.76;
  var interestRate = rate.toPrecision(4);
  var total = parseInt(slider.value) + rate;
  amount.text('$ '+slider.value);
  interest.text('$ '+interestRate);
  totalAmount.text('$ '+total);
}

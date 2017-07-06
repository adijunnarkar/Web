/*Copyright © Adi Junnarkar
Written By Adi Junnarkar*/



function browsercheck()
{ 
	var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
	var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    // At least Safari 3+: "[object HTMLElementConstructor]"
	var isChrome = !!window.chrome && !isOpera;              // Chrome 1+
    var isIpad = /iPad/i.test(navigator.userAgent);
	
    if (isFirefox){
        document.getElementById("heading").style.outlineStyle="none";
        document.getElementById("heading").style.boxShadow="0px 0px 15px purple";
        document.getElementById("heading").style.borderBottomStyle="darkBlue";  
        document.getElementById("card").style.outlineStyle="none";
        document.getElementById("card").style.boxShadow="0px 0px 10px purple";    
	   
	   }
	
	else if(isChrome||isSafari||isIpad)
	{
         //document.getElementById("dubai").style.top="1390px";
        // document.getElementById("toronto").style.top="1540px";  
         	
	}

   if(isIpad)
  {
  	  document.getElementById("dubai").style.left="1000px";
	 // document.getElementById("toronto").style.left="1000px";  
	  document.getElementById("coop").style.left="1000px";  
          document.getElementById("coop").style.top="600px";
  }

}


var prev_id="null";
function imghoverto(id)
{
         document.getElementById(id).style.color="#000000";
	 document.getElementById(id).style.textDecoration="underline";
	 document.getElementById(id).style.fontWeight="bold";
     
	 }
function imghoveraway(id)
{
        document.getElementById(id).style.color="#2D2D2D";
        document.getElementById(id).style.fontWeight="normal";
        document.getElementById(id).style.position="relative";
        document.getElementById(id).style.width="160px";
        document.getElementById(id).style.top="20px";
        document.getElementById(id).style.margin="2px";
}
function homepage()
{
        document.getElementById("Apage").innerHTML='<div title="Adi\'s Personal Page" id="heading" class="row">\
   <div class="col-xs-12">\
   <h1 class="name">ADITYA JUNNARKAR\'s PERSONAL WEBPAGE<noscript>(Please enable Javascript!!)</noscript></h1>\
   <h2 class="name">Mechatronics Engineer, BASc, University of Waterloo</h2>\
   </div>\
   </div><div class="row">\
        <div class="home col-xs-12" style="position:relative">\
        <div class="trans" >\
        <p>Welcome to my page!!! I am a UWaterloo Alumnus graduated from the Mechatronics Engineering Cooperative Program.</p>\
        </div>\
        </div>\
        </div>';
        document.getElementById('Home').style.color="white";
        document.getElementById('Home').style.background="blue";
        document.getElementById('Home').style.boxShadow="0px 0px 55px #3300FF"; 
	
	if(prev_id!="null" && prev_id!="Home"){
            document.getElementById(prev_id).style.background="#33CCCC";
            document.getElementById(prev_id).style.color="blue";
            document.getElementById(prev_id).style.boxShadow="none";
         }

	prev_id="Home";
	
}



function aboutpage()
{
  document.getElementById("Apage").innerHTML='<div class="author row"><div class="row">\
  <div class="col-xs-12">\
  <h2 id="about" style="color:#101010"><u><b>ABOUT ME</b></u></h2>\
  </div>\
  </div>\
  <div class="row">\
  <div class="col-xs-12">\
  <p><span class="para"> I </span> graduated with Bachelor of Applied Science(B.A.Sc) degree in,\
   Mechatronics Engineering (Co-op) from University Of Waterloo, Ontario Canada in 2017.\
   I was born in India on 28th April, 1994 and immigrated to Dubai with \
   my family when I was 6. I studied in Our Own High School Al Warqa\'a(previously called "Our Own \
   English High School, Dubai") a school based on the Central Board Of Secondry Education(CBSE) \
   Curriculum. Due to my avid interest in Science, I took the Science with Computer Science stream after \
completing my grade 10 and finished my grade 12 in the same school with an aggregate score of 94.4% \
with a 96% in Physics, Chemistry and Maths(PCM). During this time my passion for programming started \
developing as I was learning object oriented C++ in my computer science course. Shortly after, I moved to\
 Canada and have been here since.</p>\
 </div>\
  </div>\
  <div class="row">\
  <div class="col-xs-12">\
  <p>University Of Waterloo has the largest co-op program in the world\
 and all engineering students are enrolled in co-op. Being a 4-stream student, we have to alternatively work \
and study every 4 months while 8-stream students alternatively study for 8 months then work for 4 months. \
Students have to complete minimum 5 co-op work terms to get their co-op credit. This means by the time I \
graduate I shall have two years of relevant work experience!!</p>\
</div>\
 </div>\
  <div class="row">\
  <div class="col-xs-12">\<h3 style="color:#101010"><b><u>MY INTERESTS</b></u></h3><p>I love reading \
books to imbibe knowledge, interacting with people, programming, web-designing and building robots. \
I have a passion for learning new things and solving challenging problems.  Apart from that, I love\
 watching movies, am a huge fan of cricket, like hanging out with friends, enjoy playing ping pong \
and tennis. I also enjoy tourism, having toured over 16 countries.  </p>\
<h3 style="color:#101010"><b><u>MY BELIEF</u></b></h3>\
<p>I have one strong belief which I live by: Whenever you want to achieve something in life and are willing \
to do whatever it takes to reach your goal, the entire universe will support you in achieving it. Setbacks \
in life should not make you weaker, only much stronger.. </p>\
</div>\
  </div>\
  <div class="row">\
  <div class="col-xs-12">\
  <h3 style="color:#101010"><b><u>MY CAREER GOALS</u></b></h3><p>Being a mechatronics \
engineer, having gained hands-on experience in a variety of different fields related to software,\
 hardware, electrical  and mechanical engineering, I have realized my passion for embedded systems, image processing, hardware designing and software development.</p>\
 </div>\
  </div>\</div>\
  ';
  document.getElementById('Home').style.color="white";
  document.getElementById('Home').style.background="blue";
  document.getElementById('Home').style.boxShadow="0px 0px 55px #3300FF";
 
    if(prev_id!="null"&&prev_id!="Home") {
        document.getElementById(prev_id).style.background="#33CCCC";
        document.getElementById(prev_id).style.color="blue";  
        document.getElementById(prev_id).style.boxShadow="none";
    }

    prev_id="Home";
 } 

function blogpage()
{
 
 $('#Apage').html('\
<div class="blog row">\
<div class="row">\
<div class="col-xs-12">\
<div id="blog"></div>\
<div name="Adis_Blog" id="AdiBlog">\
</div>\
</div>\
</div>\
<!--div class="container-fluid"-->\
<div class="row">\
<div class="col-xs-6">\
<div class="post">\
<h3><b>Reliving O-week, this time as a leader!</b></h3>\
<h5><i>Sept 9th, 2014</i></h5>\
<p>Engineering orientation week\' 14 just got over! This was the first time I was involved with leadership during the week when incoming first years get a taste of campus life and feel welcomed into a new environment.\
 We as leaders try to make them feel comfortable in the new environment, interacting with them and ensuring they are having fun and aren\'t feeling too homesick. We also have a lot of activities during the week to keep them entertained.\
  I personally feel being an orientation leader has been a very rewarding experience! My role specifically was that of a \'Big\'! We are the frontline leaders who are spend most of our time ensuring the safety and happiness of the first years, making sure no one feels left out.\
 We also earn a green hard hat! </p><p>University starts tomorrow and I\'m all pumped for 2B! :)   \
</p></div>\
</div>\
<div class="col-xs-6">\
<div class= "oweekleader" id="oweekleader" style="/*position:relative; float: right;*/ padding: 3px; /*top:-370px;*/"></div><!--img class="oweekleader" id="oweekleader" src="images/Orientation_2.jpg" height="300px" width="400px"--><div style="color: white; text-align:center;">Engineering Orienation leader family photo</div>\
</div>\
</div>\
<div class="row">\
<div class="col-xs-6">\
<div class="post">\
<h3><b>Summer finally!</b></h3>\
<h5><i>June 5th, 2014</i></h5>\
<p>I have been working in Waterloo this beautiful summer term and it has been great! I\'m working on building a financial trading simulator, which will simulate\
 the transaction of stocks in the real world. It \'s always good to know how stock markets work. This is a pretty challenging project as I am building this from scratch following\
  certain technical and functional requirements and UML class diagrams. I have become involved with a lot more things on campus too since I\'m living in Waterloo. I signed up for dancing and gave a dance performance at Victoria \
Park in Kitchener a couple of days back. It was a very enriching experience as this was my first performance in Canada. I also joined the UW Hardware ASIC student design team and learned a good amount of VHDL and Verilog! I recently ordered a Texas\
 Instrument Tiva C series launchpad microcontroller based on the ARM Cortex M4 architecture. The coolest thing I\'ve got the microcontroller to do is blink the RGB Led! It\'s gonna be another great term!\
</p></div>\
</div>\
<div class="col-xs-6">\
<div class="kwmf" style="/*position:relative; float: right;*/ padding: 3px; /*top: -370px;*/"></div><!--img class="kwmf" id="kwmf" src="images/KWMFDance.jpg" height="300px" width="400px"--><div style="color: white; text-align:center;">KWMF Dance team</div>\
</div>\
</div>\
<div class="row">\
<div class="col-xs-6">\
<div class="post">\
<h3><b>Winter in Loo!!</b></h3>\
<h5><i>February 27th, 2014</i></h5>\
<p>I\'ve started my second year in mechatronics engineering. Winter has been the most brutal so far \
with temperatures dropping to -40 degrees celsius on some days. It\'s the first time I\'m living with my class mates so it\'s going to be a fun term apart from all the\
 workload. Long weekend just got over and the coolest thing I did was learning to ski! It definitely is not easy and I did fall down far too much. That being said, I absolutely enjoyed skiing \
 and cannot wait to ski again sometime. It definitely provides a very unique experience, one that should not be missed. Coming to academics, the most interesting project we will be doing is building a wooden truss bridge using balsa wood sticks and  hardwood dowels. We will have to analyze the various\
  failure modes associated with our design and then further optimise it. This design will be used in a competition where each design will be subjected to incremental loads \
  and the one with the highest load to mass ratio will be declared the winner. Can\'t wait to start building!\
</p></div>\
</div>\
<div class="col-xs-6">\
<div class="tiva" style="/*position:relative; float: right; */padding: 3px; margin:auto;/* left: 400px*/"></div><!--img class="tiva" id="tiva" src="images/TITiva.jpg" height="200px" width="300px"--><div style="color: white; text-align:center;">Programming the TI launchpad microcontroller</div>\
</div>\
</div>\
<div class="row">\
<div class="col-xs-6">\
<div class="post">\
<h3><b>And that\'s a wrap!!</b></h3>\
<h5><i>December 20th, 2013</i></h5>\
<p>Time flies, and all good things end. Just had my last day at Save.ca. Mixed emotions, but am glad to have met such a wonderful group of people.\
 This co-op term has truly been a lot of fun and at the same time gained vast knowledge in the field of web development.\
 Work aside, highlights include visiting the Snakes & Latte\'s board game cafe with a bunch of friends, Nuit Blanche festival,\
 Distillery district, Casa Loma, biking around in Toronto Island and exploring the picturesque St. Clair trails. The only one thing\
 I\'m not happy with is winter. It has come too early and has already started wrecking havoc on the roadways and sidewalks. Ice storm expected this weekend,\n\
 the weekend I\'m flying to Dubai. I\'m glad to get away from this cold for a couple of weeks before University starts again.\n\
 Looking forward to meeting old friends and reuniting with family after a year!\
</p></div>\
</div>\
</div>\
<div class="row">\
<div class="col-xs-6">\
<div class="post">\
<h3><b>Back in North York for second co-op</b></h3>\
<h5><i>October 9th, 2013</i></h5>\
<p>Talking about my new job, I\'m loving it as it provides me new challenges every day and the opportunity to learn something new.\
 Commute to Markham is pretty good, takes like 35-40 mins, not as good as last co-op when I had to only walk for 10 minutes to get to work.\
 Weekends are spent exploring downtown, or some fun outdoor activities. I have also regained my fascination for trekking, walking along the beautiful trails but its getting cold.. sigh! Winter is coming..\
</p></div>\
</div>\
</div>\
<div class="row">\
<div class="col-xs-6">\
<div class="post">\
<h3><b>The Bay area, Montreal and Quebec City trip!!</b></h3>\
<h5><i>September 1st, 2013</i></h5>\
<p>The past few weeks went at a whirlwind pace and I got to visit California, Montreal and Quebec City. Talking about California, my uncle lives in Palo Alto, CA.\
 I had two weeks there and he showed me around the place whenever he could, visiting the Golden Gate Bridge, an engineering marvel, Stanford University, Googleplex, Facebook head office,the famous Mystery Spot, Apple, Oracle HQ and a drive along Monterey Bay. All in \
all a worthwhile, enriching experience. I also visited a lot of places there by myself like the California Academy Of Science, Fisherman\'s wharf and rode the famous San Francisco cable cars. Also, had a great time with my cousins there.</p><p> Once I landed \
back in Toronto, the next day I went to explore the French province of Quebec with my aunt and her family. As we drove into the french city of Montreal, we were amazed by such a beautiful and cultured city. We visited one of the main attractions there, the Biodome as well as the planetorium and the Montreal Botanical Garden.\
There was the Mosaic International Festival going on in the botanical garden which was a horticultural art display from different countries. We got to see some really innovative grass sculptures there. Our next destination was Old Montreal, a historic part of Montreal which reminded me of the streets of Paris, with the Notre Dame Basilica there too.\
 Once we had grabbed the famous Montreal bagel, we left for Quebec City, the capital city of Quebec province.\
 One of the main attractions in Quebec City is the world famous Fairmont Le Chateau Frontenac, a grand hotel which dominates\
the skyline of the city. We also visited the largest museum there, the Museum De Civilisation, which was really good, having a Game Museum inside too. Well, holidays have ended and first day of work tomorrow So excited! :)\
</p></div>\
</div>\
</div>\
<div class="row">\
<div class="col-xs-6">\
<div class="post">\
<h3><b>Exciting fall ahead!!</b></h3>\
<h5><i>August 16, 2013</i></h3>\
<p>Yeaahh Final exams just got over yesterday! Certainly were harder than midterms. Looking forward to the much needed vacation and then the fall work term. This work term I\'ll be working with Save.ca, a company under Metroland Media Group which specializes in digital flyers and coupons,\
 as a software developer. Really excited as I\'ll be working with backend as well as front end web development. Before that I shall be visiting California as well as Montreal and Quebec City!!\
 Flight to San Francisco tomorrow to visit my uncle and his family! Havent seen them in ages! So much happening, hopefully I\'ll get time to catch up on sleep in the flight.\
</p></div>\
</div>\
</div>\
<div class="row">\
<div class="col-xs-6">\
<div class="post">\
<h3><b>Surprise, Surprise, Surprise!!</b></h3>\
<h5><i>July 15, 2013</i></h3>\
<p>It\'s pretty hard to study in summer. While most other university students enjoy vacations, we Waterloo students have to study..sad feeling.\
 On a brighter note, this term was pretty fun because we did do a lot of fun stuff outside school or whenever we had some time in the weekends like \
Gokarting, canoeing, basketball and frisbee. We had a lot of b\'days this term and planned surprises for most friends. Lol, I guess most of my friends who have a b\'day coming up are thinking\
-\'How do these guys plan to surprise me now??Hmmmm..\'. I must have tried most of the cake favours in Williams now.\
</div>\
</div>\
</div>\
<div class="row">\
<div class="col-xs-6">\
<div class="post">\
<h3><b>Back to University Life</b></h3>\
<h5><i>May 5, 2013</i></h3>\
<p>The dormant winter days seem to be over as bright sunshine falls on the UWaterloo campus.\
Yeah, I\'m back in Waterloo with fellow trons, all set for another kick-ass study term. Back to jobmine, \n\
interviews and studies. All set for the challenges of 1B ,excited about the new subjects to be taught and making new friends.</p>\
</div>\
</div>\
</div>\
<div class="row">\
<div class="col-xs-6">\
<div class = "post">\
<h3><b>The Co-op Experience</b></h3>\
<h5><i>April 22, 2013</i></h5>\
<p>As my mom puts it, we co-ops play two roles in life, one being a university going student and the other being a working professional. It was back in Dubai when \
I first heard this word \'Co-op\', in the month of Oct \'11 from my good friend Sunaal. He told me he had \n\
applied for University of Waterloo and also a bit about the co-op program. I went home and researched about it. It sounded very interesting as a student can apply what he learns in university at the workplace. I discussed this with my parents and I applied for University of Waterloo. There were a lot of things we had to consider as initially my parents had plans to send me to India for further studies. It\'s not easy for parents when their son is 7000 miles away from them, also the fees are quite high and the Canadian winter..better not talk about it. Considering it an investment, we decided to apply and I soon received a letter of acceptance by April\'12. It has been exactly a year since then. So much has changed.</p>\n\
<p>My first study term flew by very fast. Though it was very hectic it was well worth it. We got to do so many awesome things, program lego robots, arduino micro controllers,\n\
 assemble fuel cell car, design a keychain in the university machine shop.\n\
 With that we had to manage academics, interviews and apply for jobs.</p>\n\
<p>I got my first co-op job at NexJ Systems Inc. as a software QA analyst in their health department.\
 Waking up at 7:15 every morning, ironing formals and walking to office, such a different feeling!! \
After coming home, there was no tension of studies or exams. Listening to some music and doing some\
 coding to spend the time, everyday learning something new. </p>\n\
</div>\
</div>\
<div class="col-xs-6">\
<div class="coop" style="/*position:absolute; top: 3450px; right: 10px;*/ padding: 3px;"></div><!--img class="coop" id="coop" src="http://www.edgeip.com/fckupload/Image/SIC/Spring%202012/Waterloo%20-%20co-op%20interviews.jpg" height="400px" width="400px"--><div style="color: white; text-align:center">The Tatham Centre building where job interviews are held in UW</div>\
</div>\
</div>\
<div class="row">\
<div class="col-xs-6">\
<div class = "post">\
<h3><b>Why Mechatronics?</b></h4>\n\
<h5><i>April 19, 2013</i></h5><p>I always knew I wanted to program high-level machines and mechatronics was the preferred choice. It gives me exposure to electrical, computer, software and mechanical side of engineering thus \n\
widening my choice of specialization in later stages. Also mechatronics sounds pretty cool.Haha,\n\
 whenever I tell any elder I\'m learning mechatronics engineering they\'re like \'What is that supposed\n\
 to be?\' as this term is relatively new.</p></div>\n\
</div>\
</div>\
<div class="row">\
<div class="col-xs-6">\
<div class="post">\
<h3><b>From Dubai to Canada..</b></h3>\n\
<h5><i>April 17, 2013</i></h5>\n\
<p>Being brought up in Dubai and having lived there for 12 years, it was not easy leaving it. I miss my family, the fancy malls and buildings and all my friends back there but I make\n\
 it a point to remember to stay in touch with them. Both these countries have their own distinguished beauty. In Canada we get to truly experience the best of all four seasons-spring, summer , fall and winter\n\
. This is not the case in a middle-eastern country like UAE where we have mostly summer and some winter in November-February. \n\
It\'s not easy when you are so used to temperatures between 20-45 degrees and then you start experiencing negative temperatures in Canada.\n\
 I certainly did get a very good taste of Canadian winter. I remember the beautiful walk to office on the \n\
day of the snowstorm. There was a huge traffic jam that morning and most people who usually use the bus were \n\
now forced to walk to the subway. Walking in the snowstorm was definitely a once-in-a-lifetime moment for me\n\
 then, was not used to seeing SO much snow around and the irritating voices of police sirens, ambulances,\n\
 tractors..whoa!!</p></div>\
</div>\
<div class="contain col-xs-6">\
<div class="dubai" style="padding:3px"></div><!--img class="dubai" id="dubai" src="images/collage.jpg" height="300px" width="400px" style="float:right;"/-->\
<div style="color:white; text-align:center">From Dubai to Canada</div></div>\
</div>\
<div class="row">\
<div class="col-xs-6">\
<div class="post">\n\
<h3><b>The reason I made this site</b></h3>\
<h5><i>April 15, 2013</i></h5>\
<p>I always wanted to make a webpage from scratch, didn\'t want to use any third-party template to \
create a personal page. I know that there are plenty of resources like Wix or Word Press available to\
 build a site but I wanted to enhance my scripting and web designing skills. I\'m happy I can make an entire \
webpage by myself using HTML, CSS and Javascript which I have learned in about 2 months. Doing something \
productive after work hours always gives one a good feeling deep within. A blog is an essential part of a\
 personal website, it is a beautiful way to capture every moment of your life. Life is short and one needs\
 to make every moment count.</p>\n\
</div>\
</div>\
</div>\
<br/><br/>\n\
</div></div></div>');	 
 
 document.getElementById('Blog').style.color="white";
 document.getElementById('Blog').style.background="blue";
 document.getElementById('Blog').style.boxShadow="0px 0px 55px #3300FF";
 
 if(prev_id!="null"&&prev_id!="Blog")
 {document.getElementById(prev_id).style.background="#33CCCC";
  document.getElementById(prev_id).style.color="blue";
  document.getElementById(prev_id).style.boxShadow="none";
       }
 
 prev_id="Blog";          
 browsercheck();		  
		   }
	  

function imagegallpage()
{

   document.getElementById('Apage').innerHTML='<div class="Img_gall row">\
   <div class="row">\
   <div class="col-md-12">\
   <div id="ImgGallery">IMAGE GALLERY</div>\
   </div></div>\
   <div class="row">\
   <div class="col-md-12">\
   <p>Here are a couple of images during my first visit to Canada. Shall definitely add more!!</p>\
   </div></div>\
   <div class="row">\
   <div class="col-md-12">\
   <h3>&bull;<u>US/Canada Summer Visit</u></h3>\
    </div></div>\
   <div class="row">\
   <div class="col-md-12">\
   <p>Hover over image to view it and click to view in full size.</p>\
   </div></div>\
   <div class="row">\
   <div class="col-md-3">\
   <div class="img"><a target="_blank" href="images/MackenzieKingVillage.JPG" class="image" id="a">\
   <div class="square"><img  src="images/MackenzieKingVillage.JPG" alt="mkv" width="110" height="100" onMouseover="imghoverto(\'1\');" onMouseout="imghoveraway(\'1\');"></div></a>\
   <div class="desc" id="1" onMouseover="imghoverto(\'1\');" onMouseout="imghoveraway(\'1\');">My first Waterloo residence-MacKenzie King Village</div></div>\
   </div>\
   <div class="col-md-3">\
   <div class="img"><a target="_blank" href="images/Mississauga_night.JPG" class="image">\
   <div class="square"><img src="images/Mississauga_night.JPG" alt="mississauga" width="110" height="100" onMouseover="imghoverto(\'2\');" onMouseout="imghoveraway(\'2\');"/></div></a>\
   <div class="desc" id="2" onMouseover="imghoverto(\'2\');" onMouseout="imghoveraway(\'2\');">Mississauga, Ontario at night</div></div>\
   </div>\
   <div class="col-md-3">\
   <div class="img"><a target="_blank" href="images/Rogers_Centre.JPG" class="image">\
   <div class="square"><img src="images/Rogers_Centre.JPG" alt="Rogers Centre" width="110" height="100" onMouseover="imghoverto(\'3\');" onMouseout="imghoveraway(\'3\');"></div></a>\
   <div class="desc" id="3" onMouseover="imghoverto(\'3\');" onMouseout="imghoveraway(\'3\');">Rogers Centre, Toronto</div></div>\
   </div>\
   <div class="col-md-3">\
   <div class="img"> <a target="_blank" href="images/Flycatchers_in_backyard.JPG" class="image">\
   <div class="square"><img  src="images/Flycatchers_in_backyard.JPG" alt="Birds" width="110" height="100" onMouseover="imghoverto(\'4\');" onMouseout="imghoveraway(\'4\');"></div></a>\
   <div class="desc" id="4" onMouseover="imghoverto(\'4\');" onMouseout="imghoveraway(\'4\');">Yellow bellied Flycatchers found in my uncle\'s backyard</div></div>\
   </div>\
   </div>\
   <div class="row">\
   <div class="col-md-3">\
   <div class="img"> <a target="_blank" href="images/villa.JPG" class="image">\
   <div class="square"><img  src="images/villa.JPG" alt="Villa" width="110" height="100" onMouseover="imghoverto(\'5\');" onMouseout="imghoveraway(\'5\');"></div></a>\
   <div class="desc" id="5" onMouseover="imghoverto(\'5\');" onMouseout="imghoveraway(\'5\');">Aunty\'s beautiful villa in Albany, US</div></div>\
   </div>\
   <div class="col-md-3">\
   <div class="img"><a target="_blank" href="images/Brooklyn_Bridge.JPG" class="image">\
   <div class="square"><img  src="images/Brooklyn_Bridge.JPG"  alt="Brooklyn Bridge" width="110" height="100" onMouseover="imghoverto(\'6\');" onMouseout="imghoveraway(\'6\');"></div></a>\
   <div class="desc" id="6" onMouseover="imghoverto(\'6\');" onMouseout="imghoveraway(\'6\');">The great Brooklyn Bridge in NYC which connects Manhattan and Brooklyn</div> </div>\
   </div>\
   <div class="col-md-3">\
   <div class="img"><a target="_blank" href="images/Statue_of_Liberty_background.JPG" class="image">\
   <div class="square"><img  src="images/Statue_of_Liberty_background.JPG" alt="Statue of Liberty, NYC" width="110" height="100" onMouseover="imghoverto(\'7\');" onMouseout="imghoveraway(\'7\');"></div></a>\
   <div class="desc" id="7" onMouseover="imghoverto(\'7\');" onMouseout="imghoveraway(\'7\');">Me with the Statue of Liberty in the background</div></div>\
   </div>\
   <div class="col-md-3">\
   <div class="img"><a target="_blank" href="images/Times_Square.JPG" class="image">\
   <div class="square"><img  src="images/Times_Square.JPG" alt="NYC" width="110" height="100" onMouseover="imghoverto(\'8\');" onMouseout="imghoveraway(\'8\');"></div></a>\
   <div class="desc" id="8" onMouseover="imghoverto(\'8\');" onMouseout="imghoveraway(\'8\');">Crowded Times Square</div></div>\
   </div>\
   </div>\
   <div class="row">\
   <div class="col-md-3">\
   <div class="img"><a target="_blank" href="images/Times_square_night.JPG" class="image">\
   <div class="square"><img  src="images/Times_square_night.JPG" alt="Times Square night" width="110" height="100" onMouseover="imghoverto(\'9\');" onMouseout="imghoveraway(\'9\');"></div></a>\
   <div class="desc" id="9" onMouseover="imghoverto(\'9\');" onMouseout="imghoveraway(\'9\');">Times Square at night</div></div>\
   </div>\
   <div class="col-md-3">\
   <div class="img"><a target="_blank" href="images/Empire_State_background.JPG" class="image">\
   <div class="square"><img  src="images/Empire_State_background.JPG"  alt="Empire State" width="110" height="100" onMouseover="imghoverto(\'10\');" onMouseout="imghoveraway(\'10\');"></div></a>\
   <div class="desc" id="10" onMouseover="imghoverto(\'10\');" onMouseout="imghoveraway(\'10\');">The Empire State Building in the background</div></div>\
   </div>\
   <div class="col-md-3">\
   <div class="img"><a target="_blank" href="images/Statue_Of_Liberty.JPG" class="image">\
   <div class="square"><img  src="images/Statue_Of_Liberty.JPG" alt="Statue of Liberty" width="110" height="100" onMouseover="imghoverto(\'11\');" onMouseout="imghoveraway(\'11\');"></div></a>\
   <div class="desc" id="11" onMouseover="imghoverto(\'11\');" onMouseout="imghoveraway(\'11\');">Statue Of Liberty, Statten Island NY</div></div>\
   </div>\
   <div class="col-md-3">\
   <div class="img"><a target="_blank" href="images/View_from_Rockfeller.JPG" class="image">\
   <div class="square"><img  src="images/View_from_Rockfeller.JPG" alt="NYC" width="110" height="100" onMouseover="imghoverto(\'12\');" onMouseout="imghoveraway(\'12\');"></div></a>\
   <div class="desc" id="12" onMouseover="imghoverto(\'12\');" onMouseout="imghoveraway(\'12\');">View of Manhattan from Rockfeller Centre</div></div>\
   </div>\
   </div>\
   <div class="row">\
   <div class="col-md-3">\
   <div class="img"><a target="_blank" href="images/Ducks.JPG" class="image">\
   <div class="square"><img  src="images/Ducks.JPG" alt="Ducks" width="110" height="100" onMouseover="imghoverto(\'13\');" onMouseout="imghoveraway(\'13\');"></div></a>\
   <div class="desc" id="13" onMouseover="imghoverto(\'13\');" onMouseout="imghoveraway(\'13\');">Cute ducks swimming in Cooperstown, US</div></div>\
   </div>\
   <div class="col-md-3">\
   <div class="img"><a target="_blank" href="images/niagara_falls_night.JPG" class="image">\
   <div class="square"><img  src="images/niagara_falls_night.JPG" alt="Niagara Falls at night" width="110" height="100" onMouseover="imghoverto(\'14\');" onMouseout="imghoveraway(\'14\');"></div></a>\
   <div class="desc" id="14" onMouseover="imghoverto(\'14\');" onMouseout="imghoveraway(\'14\');">Niagara Falls at night</div></div>\
    </div>\
   <div class="col-md-3">\
   <div class="img"><a target="_blank" href="images/View_from_CN_Tower.JPG" class="image">\
   <div class="square"><img  src="images/View_from_CN_Tower.JPG" width="110" height="100" onMouseover="imghoverto(\'15\');" onMouseout="imghoveraway(\'15\');"></div></a>\
   <div class="desc" id="15" onMouseover="imghoverto(\'15\');" onMouseout="imghoveraway(\'15\');">View from CN Tower</div></div>\
    </div>\
   <div class="col-md-3">\
   <div class="img"><a target="_blank" href="images/Toronto_Skyline.JPG" class="image">\
   <div class="square"><img  src="images/Toronto_Skyline.JPG" alt="Toronto Skyline" width="110" height="100" onMouseover="imghoverto(\'16\');" onMouseout="imghoveraway(\'16\');"></div></a>\
   <div class="desc" id="16" onMouseover="imghoverto(\'16\');" onMouseout="imghoveraway(\'16\');">Toronto Skyline</div>\
   </div></div></div></div>';
	 document.getElementById('ImageGall').style.color="white";
     document.getElementById('ImageGall').style.background="blue";
	 document.getElementById('ImageGall').style.boxShadow="0px 0px 55px #3300FF";
	 
if(prev_id!="null"&&prev_id!="ImageGall")	
	{
	 document.getElementById(prev_id).style.background="#33CCCC";
     document.getElementById(prev_id).style.color="blue"; 
     document.getElementById(prev_id).style.boxShadow="none";      
	                                }
	 
	 prev_id="ImageGall"; 
}  

function projectpage()
{
	
	document.getElementById('Apage').innerHTML='<div class="Projects row">\
	<div class="row">\
	<div class="col-xs-12">\
	<div id="MyProjects">MY PROJECTS</div>\
	</div>\
	</div>\
    <div class="row">\
	<div class="col-xs-12">\
    <p class="Projects">Hey! This section gives a brief overview of\
    some of my projects. I\'ll start by talking about my very first real project back in\
    Grade 9. I along with my friend Ram had modelled the Imperial College of London using \
    thermocol, which we displayed at the social studies exhibition held at my school. \
    From then on, my interest in modelling and designing grew. In grade 11 and 12, I partnered \
    with my friend Nikhil to make a medical diagnosis program and an Airline reservation program\
    using the programming language C++. </p><p>In my first term at waterloo, we designed a robot\
    which retrieves the requested drink. You can read more about it by checking the dropdown\
    menu. We also assembled a fuel cell car and presented a report about the various safety \
    risks and environmental concerns associated with fuel cell cars and alternative clean ways\
    to produce hydrogen using peer-reviewed references following standard IEEE guidelines. \
    I\'ve been self-learning web designing during my work term and have designed a Student/ Business\
    contact card generator based on information entered in a form using a bit of HTML5, CSS3, javascript and PHP. Client side validation\
    validates email address, SIN number and also date of birth. It will not allow you to enter a future date of birth or\
    enter any invalid date. It also validates required fields on form submission. Once form\
    is submitted successfully, a contact student/ business card is generated using the POST data. I\'ve added \
    the project to this website.</p><p>During my 1B term at Waterloo, I worked with a team to design the most cost\
    efficient bridge following required design constraints and objectives. In my 2A term, we built a\
    wooden truss bridge using basal wood and dowels. This had to be done after intial designing and analysis of various failure modes such as buckling,\
    tensile rupture, tearing, bending etc. We then had to subject this bridge to incremental loads at the final competition. The team with the highest load to mass ratio after the bridge fails was the winner.\
    Our bridge had a load to mass ratio of around 300 after failure which was pretty good. Last summer, I bought a Texas Instruments Tiva C Series launchpad microcontroller based on the ARM Cortex M4 architecture. I used the IAR Embedded\
    Workbench IDE to program the microcontroller, analysing the ARM assembly code generated in the debugging view. The coolest thing I\'ve got the launchpad to do is blinking the RGB led! Yeah!</p><p>2B had the most projects. We used Matlab to simulate the behaviour of safety net after a man falls on it using finite Element Analysis.\
	We also built a line following robot and did some cool digital signal processing with music files. In 3A, I learnt to interface with an embedded audio system using different synchronization techniques. During my 3A co-op I worked on a Raspeberry Pi\
	infra-red motion sensor system. Pictures can be found under the mechatronics section!</p><p>Well, this is only the beginning, there is a long way to\
    go and lots of projects to work on. Will keep this page updated with new projects.</p>\
    </div>\
	</div></div>';

   document.getElementById('Projects').style.color="white";
   document.getElementById('Projects').style.background="blue";
   document.getElementById('Projects').style.boxShadow="0px 0px 55px #3300FF";
  
    if(prev_id!="null"&&prev_id!="Projects")  {
        document.getElementById(prev_id).style.background="#33CCCC";
        document.getElementById(prev_id).style.color="blue";   
        document.getElementById(prev_id).style.boxShadow="none";
    }
    prev_id="Projects";	
	
}
function tronpage()
{
    document.getElementById('Apage').innerHTML= '<div class="Tron_Projects row">\
	<div class="row">\
	<div class="col-xs-12">\
	<h2 id="Tron_Projects"><u>MECHATRONICS PROJECT</u></h2>\
	</div>\
	</div>\
	<div class="row">\
	<div class="col-xs-12">\
	<h3 class="VBot">VendBot</h3>\
    </div>\
	</div>\
	<div class="row">\
	<div class="col-xs-12">\
	<p class="vendbot"><span class="vendbot">D</span>uring my first term at university of waterloo, my team and me built and programmed an electro-mechanical robot \
	called VendBot using lego Mindstorms technology. The programming language used was robot-c. We intend to use it in hospitals, clinics, old age homes to aid those \
	in need such as elderly citizens, hospitalized patients and disabilized individuals. It was designed to retrieve drinks but can be used to retrieve medication,\
	food and other items. The robot allows the user to select a drink from given choices and it then follows a path while searching for the requested drink using color \
	sensors. Once found it grabs it with its mechanical arm and brings it to the user.</p>\
	</div>\
	</div>\
	<div class="row">\
	<div class="col-md-3">\
	<div class="Vimg"><a target="_blank" href="images/Final_model.JPG" class="image">\
	<img class="vbot" src="images/Final_model.JPG" height="200px" width="200px"/></a><div class="Vdesc">Vendbot final model</div>\
	</div></div>\
	<div class="col-md-3">\
	<div class="Vimg"><a target="_blank"\
	href="images/Black_line_follow.JPG" class="image"><img class="vbot" src="images/Black_line_follow.JPG" height="200px" width="200px"/></a><div class="Vdesc">Following the\
	black line</div></div>\
	</div>\
	<div class="col-md-3">\
	<div class="Vimg"><a target="_blank" href=images/Color_sensor.JPG" class="image"><img class="vbot" src="images/Color_sensor.JPG" height="200px"\
	width="200px"/></a><div class="Vdesc">Color-sensor to detect the right path</div></div>\
	</div>\
	<div class="col-md-3">\
	 <div class="Vimg"><a target="_blank" href="images/mechanical_arm.JPG" class="image">\
	 <img class="vbot" src="images/mechanical_arm.JPG" height="200px" width="200px"/></a><div class="Vdesc">Close-up of its mechanical arm</div>\
	</div>\
	</div></div>\
	<div class="row">\
	<div class="col-xs-12">\
	<h3 class="VBot">Raspberry Pi Infrared Motion Sensor System</h3>\
    </div>\
</div>\
<div class="row">\
	<div class="col-xs-12">\
	<p class="vendbot"><span class="vendbot">T</span>his is one of the personal projects I worked on to get more electronics experience. I built an electronic circuit\
	to interface with a raspberry Pi. I also bought a raspberry Pi camera module and attached it to the raspberry Pi. The electronic circuit has an emmiter and detector pair\
	which senses if there is any object in front. Once the sensor detects the object, LED lights up and the raspberry Pi camera captures the image. I just used a breadboard\
	to build the circuit. I would like to solder the components together on a PCB in the future.</p>\
	</div>\
</div>\
<div class="row">\
	<div class="col-md-3">\
	<div class="Vimg"><a target="_blank" href="images/RaspPi.jpg" class="image">\
	<img class="vbot" src="images/RaspPi.jpg" height="200px" width="200px"/></a><div class="Vdesc">Infrared Motion Sensor System</div>\
	</div>\
	</div>\
	<div class="col-md-3">\
	<div class="Vimg"><a target="_blank"\
	href="images/Electronic_Circuit.jpg" class="image"><img class="vbot" src="images/Electronic_Circuit.jpg" height="200px" width="200px"/></a><div class="Vdesc">Closer look at the circuit</div></div>\
	</div>\
</div>\
<div class="row">\
	<div class="col-xs-12">\
	<h3 class="VBot">Altera Embedded Systems Interfacing</h3>\
    </div>\
</div>\
<div class="row">\
	<div class="col-xs-12">\
	<p class="vendbot"><span class="vendbot">D</span>uring my 3A term, I got to interface with the Altera embedded micro-controller, design the hardware schematics and then program the software.\
	I had to interface the processor with an SD card, speakers through the audio codec, LCD display, 7 segment display, pushbuttons and switches.\
	The microcontroller was programmed to read .wav files stored in the SD card and different modes of audio playback were implemented such as fast speed, slow speed\
	 reverse and delay. For the delay mode, there was a delay implemented between the channels for the left speaker and right speaker.\
</p>\
	</div>\
</div>\
<div class="row">\
	<div class="col-md-3">\
	<div class="Vimg"><a target="_blank"\
	href="images/Altera.jpg" class="image"><img class="vbot" src="images/Altera.jpg" height="200px" width="200px"/></a><div class="Vdesc">Altera Nios II </div></div>\
	</div>\
</div></div> ';
    document.getElementById('Projects').style.color="white";
    document.getElementById('Projects').style.background="blue";
    document.getElementById('Projects').style.boxShadow="0px 0px 55px #3300FF";
  
    if(prev_id!="null"&&prev_id!="Projects")  {  
        document.getElementById(prev_id).style.background="#33CCCC";
        document.getElementById(prev_id).style.color="blue";   
        document.getElementById(prev_id).style.boxShadow="none";
    }
    prev_id="Projects";
}
	  
function contactpage()
{
    document.getElementById('Apage').innerHTML='<div class="Contact row">\
	<div class="row">\
	<div class="col-xs-12">\
    <div id="ContactMe">Contact Me</div>\
    </div>\
    </div>\
	<div class="row">\
	<div class="col-xs-12">\
    </h2><div class="card" id="card"><p><span style="text-align:right; color:grey">\
Name: </span>Aditya Junnarkar</p><p><span style="text-align:right; color:grey">\
Education: </span>Mechatronics Engineer, B.A.Sc University Of Waterloo, ON</p>\
<p><span style="text-align:right; color:grey">Mobile Number:</span> +1 226&shy;-600-3433\
</p>\
<p><span style="text-align:right; color:grey">Residence:</span> 339 King St N, Waterloo, ON</p>\n\
<div class="linkedin" style="display:inline-block;">\
<a href="http://ca.linkedin.com/pub/aditya-junnarkar/52/308/4a4" target="_blank"\
 title="Click to go to my LinkedIn profile"><div>Connect Via  </div>\
<img src="http://www.itworldcanada.com/slideshows/LinkedIn/slides/slides_img_01.jpg" \
width= "55px" height="55px" title="LinkedIn" style="vertical-align:middle; padding:4px;\
 border:none; position:relative; left:7px;"/></a>\
 </div>\
 <div class="waterlooemail" style="display:inline-block;"><a href="mailto:ajunnark@uwaterloo.ca" ><div>Email Me &#64;</div>\
<img src="http://upload.wikimedia.org/wikipedia/en/thumb/0/03/Uwaterloo_seal.gif/170px-Uwaterloo_seal.gif" width= "55px" height="55px" title="UWaterloo Email" style="vertical-align:middle; padding:4px; border:none;"/></a>\
 </div></div>\
 </div></div>';
	
    document.getElementById('Contact').style.color="white";
    document.getElementById('Contact').style.background="blue";
    document.getElementById('Contact').style.boxShadow="0px 0px 55px #3300FF";
	
    if(prev_id!="null"&&prev_id!="Contact") {
        document.getElementById(prev_id).style.background="#33CCCC";
        document.getElementById(prev_id).style.color="blue";
	document.getElementById(prev_id).style.boxShadow="none";
    }
	
    prev_id="Contact";
    browsercheck();

}	
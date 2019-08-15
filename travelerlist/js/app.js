/*!
 * Contact-List v0.0.1
 * This is a contact list app
 * (c) 2019 David Walters
 * MIT License
 * http://link-to-your-git-repo.com
 */

/*jshint esversion: 6 */

$(document).ready((function(){
    $.ajax({
    url: 'https://randomuser.me/api/?results=10',
    dataType: 'json',
    success: function(data) {
      // console.log(data);
      for ( var i = 0; i < data.results.length; i++ ) {
        $(".accordion").append(`<div class="accordion__item traveler"> 
        <a><div class="traveler__image"> 
          <img src="` + data.results[i].picture.medium + `" class="rounded-circle"> 
          </div> 
          <div class="traveler__name-location"> 
            <p class="traveler__name"><span>` + data.results[i].name.first + `</span> <span>` + data.results[i].name.last + `</span></p>
            <p class="traveler__location"><span>` + data.results[i].location.city + `</span>, <span>` + data.results[i].location.state + `</span></p>
          </div> 
        </a> 
        <div class="content traveler__contact"> 
            <div class="traveler__phone"> 
                <p class="traveler__phone--label">Phone</p> 
                <p class="traveler__phone--number">` + data.results[i].phone + `</p>
            </div> 
            <div class="traveler__email"> 
                <p class="traveler__email--label">Email</p> 
                <p class="traveler__email--address">`  + data.results[i].email + `</p> 
            </div> 
        </div> 
      </div>`);
      }

      const accordionItems = document.querySelectorAll('.accordion__item a');

      function toggleAccordion () {
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('active');
      }

      accordionItems.forEach(item => item.addEventListener('click', toggleAccordion));
    }
  });
}));

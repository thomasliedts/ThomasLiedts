import { Component, OnInit } from '@angular/core';

declare var $ :any;

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {



  constructor() { }

  ngOnInit() {
    $(document).ready(function($){
      // Votre code ici avec les appels à la fonction $()
$('.contain').hide();

      $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 50) {
             $('.contain').fadeIn('slow');
        } else {
             $('.contain').fadeOut('slow');
        }
    });
   });
  }

}

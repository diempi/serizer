/* Serizer
 * Application de gestion planning de séries
 * Codé par Didier Gabiam
 */

/*jslint regexp: true, vars: true, white: true, browser: true */
/*jshint nonstandard: true, browser: true, boss: true */
/*global jQuery */

( function ( $ ) {
	"use strict";

	// -- globals
  var aEpisode = new Array(),
      iNbSeasons,
      iNbSeries,
      iNbEpiVu = 0,
      sPlanning,
      sSearch,
      sUrl,
      sSerie,
      sSerieId,
      iS =0,
      i,
      j,
      iNbEpisodes =0;  
      
      //sSearch = $("#serie").val();
	// -- methods


		// -- onload routines
  $(document).bind("mobileinit", function(){
      $.mobile.ajaxEnabled = true;//Active Ajax dans l'application
      $.mobile.loadingMessageTextVisible = true;
      $.mobile.loadingMessage = 'Serizing...';
      $.mobile.loader.prototype.options.theme = "b";
      $('select').slider();
    });
  $( function (e) {
    // Splash Screen
    $(function() {
      setTimeout(hideSplash, 3000);
      });

    function hideSplash() {
      $.mobile.changePage("#planning", "fade");    
    }

    //Planning des séries

    $("#planning").click(function(){
      sPlanning = 'http://api.betaseries.com/planning/incoming.json?key=3FA361125EC3';

      $.ajax({
              url:sPlanning,
              dataType: 'jsonp',
              success: function(data){
                console.log(data.root.planning);
            }
          });
      })
    //Lors de l'envoi de la recherche on affiche le résultat
    $("#check").submit(
      function(){
        $.mobile.showPageLoadingMsg();
          sSearch = $("#serie").val();
          sUrl = 'http://api.betaseries.com/shows/search.json?key=3FA361125EC3&title='+sSearch;

             $.ajax({
              url:sUrl,
              dataType: 'jsonp',
              success: function(data){
              /*  console.log(data);
                if(data.root.shows.length === 0)
                {
                  if(data.root.errors.error.code  === '4001'){
                    $("#result").append('<h2>Aucune série ne correspond à cette recherche</h2>');
                  }
                }
                else
                {

                */
                // on récupère le nombre de séries trouvées
                iNbSeries = data.root.shows.length;

                // On fait un boucle pour insérer les séries dans une liste
                  for(i=0; i <iNbSeries; i++)
                  {
                    $("#result").fadeIn("slow").append('<li class="select-serie"><a href="#'+data.root.shows[i].url+'" title="'+data.root.shows[i].title+'">'+data.root.shows[i].title+'</a></li>');
                    $("#result").listview("refresh");
                  }
                  $.mobile.hidePageLoadingMsg();
                  // Récupération du nom de la série au click
                  $(".select-serie a").on("click",function(){
                      var sTr = $(this).context.hash,
                          sSeri = (sTr.substring(1));
                    $("#result").fadeToggle("fast");
                      // affichage des infos de la série 
                      $.mobile.showPageLoadingMsg();
                      sSerie = 'http://api.betaseries.com/shows/episodes/'+sSeri+'.json?key=3FA361125EC3';
                             $.ajax({
                              url:sSerie,
                              dataType: 'jsonp',
                              success: function(data){
                                $("#serieinfos").append('<li class="title">'+data.root.seasons[0].episodes[0].show)+'</li>';                                
                                $("#serieinfos").append("<li><img src="+data.root.seasons[0].episodes[0].screen+" /></li>");
                                $("#serieinfos").append('<li class="desc">'+data.root.seasons[0].episodes[0].description+"</li>");
                                iNbSeasons = data.root.seasons.length;
                                //(data.root.seasons.length)
                                // bouton d'ajout'
                                $("#newserie #top").append('<a href="" data-role="button" id="follow" data-icon="check">Ajouter</a>');

                                //On récupère les saisons
                                for(i=0; i<iNbSeasons; i++)
                                {
                                  $("#serieinfos").append('<li><ul class="seas" data-role="collapsible-set" id="saison'+(i+1)+'">Saison'+(i+1)+'</ul></li>');
                                  //on récupère le nombre d'épisodes de cette saison
                                  iNbEpisodes =data.root.seasons[i].episodes.length;
                                  for(j=0; j<iNbEpisodes; j++)
                                  {
                                    // On ajoute les épisodes à la saison
                                    $('#serieinfos #saison'+(i+1)+'').append('<li class="episod">Episode'+(j+1)+': '+(data.root.seasons[i].episodes[j].title)+'</li>');
                                    // On sauvegarde dans un tableau
                                    aEpisode[j] = data.root.seasons[i].episodes[j].title;
                                    console.log('Episode'+j+': '+aEpisode[j]);
                                  }
                                }  
                                $.mobile.hidePageLoadingMsg();
                                $("#serieinfos").listview("refresh");                             
                                
                                // Sauve garde en localStorage
                                $("#follow").click(function(){
                                    if (localStorage){
                                             // Le navigateur supporte le localStorage
                                          // On ajoute la nouvelle série en local storage
                                          var aMaSerie = {
                                              'Titre': data.root.seasons[0].episodes[0].show,
                                              'Episodes': aEpisode,
                                              'Episodes vus': iNbEpiVu
                                            },
                                          aSerie = new Array();
                                          aSerie ={
                                            'ID de la série': iS,
                                            'Infos Série': aMaSerie
                                          };
                                          localStorage.setItem('maserie', JSON.stringify(aSerie)); 
                                          var res = JSON.parse(localStorage.getItem('maserie'));
                                          iS++;
                                          // On ajoute la série à la liste
                                          $("#new").append('<li>'+data.root.seasons[0].episodes[0].show+'</li>');
                                          //$("#new").listview("refresh");
                                     $("#follow").fadeOut("slow");
                                     $(".seas").fadeOut("slow");
                                     $(".desc").fadeOut("slow");
                                     $("#confirm").append("<h2>Votre série a bien été ajoutée.</h2>").css("color","red").fadeIn("slow");
                                    } 
                                    else {
                                            // localStorage non supporté
                                            alert("le localStorage n'est pas supporté");
                                    }
                                });  
                      }
                    }); // fin d'ajout de sinformations de la série  
                 
                  });    
                /*}*/
              }
              });
             $("#check").fadeOut("slow");
               
          return false;
        }
      );            
	} );

}( jQuery ) );

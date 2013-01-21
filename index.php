<!DOCTYPE HTML>
<html lang="fr_BE">
	<head>
		<meta charset="UTF-8" />
		<meta name='viewport' content='width=device-width, initial-scale=1'>
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<title>Serizer - Gestion de séries</title>
        <script src='http://cdnjs.cloudflare.com/ajax/libs/modernizr/2.0.6/modernizr.min.js' type='text/javascript'></script>
		<script type='text/javascript'>
  			window.Modernizr || document.write('<script src="js/modernizr.js">\x3C/script>')
		</script>		
		<link rel="stylesheet" href="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.css" type="text/css" />
		<link rel="stylesheet" href="styles/styles.css" type="text/css" /> 

		<!--[if lt IE 9]>
			<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->

	</head>
	<body>
	<div id="planning" data-role="page">
		<section id="top" data-role="header" data-theme="b" data-position="fixed">
			<h1>Serizer</h1>
		</section><!-- header -->

		<section data-role="content">
			<h1>Bienvenue sur Serizer votre application de gestion de séries</h1>
		</section><!-- Contenu principal -->

		<section id="bottom" data-role="footer" data-theme="b" data-position="fixed" data-id="foot">
			<nav data-role="navbar">
				<ul>
					<li><a class="ui-btn-active ui-state-persist" href="#planning" title="Mon planning" data-role="button" data-transition="slide">Mon planning</a></li>
					<li><a href="#series" title="Mes séries" data-role="button" data-transition="slide">Mes séries</a></li>
					<li><a href="#newserie" title="Ajouter une nouvelle série" data-role="button" data-transition="slide">Ajouter une série</a></li>					
				</ul>
			</nav>
		</section><!-- Pied de page -->
	</div><!-- Planning -->

	<div id="series" data-role="page">
		<section id="top" data-role="header" data-position="fixed" data-theme="b">
			<h1>Serizer</h1>
		</section><!-- header -->

		<section data-role="content">
			<ul id="new"  data-role="listview" >
			</ul>
		</section><!-- Mes séries favorites -->

		<section id="bottom" data-role="footer" data-theme="b" data-position="fixed" data-id="foot">
			<nav data-role="navbar">
				<ul>
					<li><a href="#planning" title="Mon planning" data-role="button" data-transition="slide">Mon planning</a></li>
					<li><a class="ui-btn-active ui-state-persist" href="#series" title="Mes séries" data-role="button" data-transition="slide">Mes séries</a></li>
					<li><a href="#newserie" title="Ajouter une nouvelle série" data-role="button" data-transition="slide">Ajouter une série</a></li>					
				</ul>
			</nav>
		</section><!-- Pied de page -->
	</div><!-- Mes séries -->

	<div id="newserie" data-role="page">
		<section id="top" data-role="header" data-position="fixed" data-theme="b">
			<h1>Serizer</h1>
		</section><!-- header -->

		<section data-role="content">
			<form id="check" method="POST">
				<label for="serie_search"><input type="search" placeholder="Rechercher une série" id="serie" name="serie_search"></label>
				<input type="submit" value="Envoyer">
			</form>
			<ul id="result" data-role="listview">

			</ul>
		</section>
		<section data-role="content">		
			<ul id="serieinfos" data-role="listview">
			</ul>

		</section><!-- Ajouter une série -->

		<section id="bottom" data-role="footer" data-theme="b" data-position="fixed" data-id="foot">
			<nav data-role="navbar">
				<ul>
					<li><a href="#planning" title="Mon planning" data-role="button" data-transition="slide">Mon planning</a></li>
					<li><a href="#series" title="Mes séries" data-role="button" data-transition="slide">Mes séries</a></li>
					<li><a class="ui-btn-active ui-state-persist" href="#newserie" title="Ajouter une nouvelle série" data-role="button" data-transition="slide">Ajouter une série</a></li>					
				</ul>
			</nav>
		</section><!-- Pied de page -->
	</div><!-- Ajouter une nouvelle série -->
		
	<div id="account" data-role="page">
		<section id="top" data-role="header" data-theme="b" data-position="fixed">
			<h1>Serizer</h1>
		</section><!-- header -->

		<section data-role="content">

		</section><!-- Mon compte -->

		<section id="bottom" data-role="footer" data-theme="b" data-position="fixed" data-id="foot">
			<nav data-role="navbar">
				<ul>
					<li><a href="#planning" title="Mon planning" data-role="button" data-transition="slide">Mon planning</a></li>
					<li><a href="#series" title="Mes séries" data-role="button" data-transition="slide">Mes séries</a></li>
					<li><a href="#newserie" title="Ajouter une nouvelle série" data-role="button" data-transition="slide">Ajouter une série</a></li>					
				</ul>
			</nav>
		</section><!-- Pied de page -->
	</div>



		<!-- Scripts -->
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/jquery.js"><\/script>')</script>		
		<script src="js/script.js"></script>
		<script src="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.js"></script>		
	</body>
</html>

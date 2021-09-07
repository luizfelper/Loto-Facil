
		function clicando01(e) {

			if($('.radiobuttons').is(':checked')) {
				//
			} else {
				//
			}

		};

		function maisque10 () {
		    // controla se tem mínimo 10 escolhidos
		    $('form').on("click", 'input[type="checkbox"]', function (e) {
		        if ($("form input:checkbox:checked").length >= 10) {
		            alert("Voce selecionou 10 numeros");
		        }
		    });
		}
		maisque10();

		function limpar() {
			if ($('.radiobuttons').prop('checked', true)) {
				$('.radiobuttons').prop('checked', false);
				$(bgradio).removeClass('bgradiochange');
				location.reload();
			}
		}


	function verificar() {
	 		$(".result_check").html("");
	 		$(".radiobuttons").each(function(){
	    	var valor = $(this).val(); //pega o valor dos radibuttons
	    	var situacao = $(this).prop("checked"); //pega a situacao dos radiobuttons
	    		if(valor > 0 && situacao == false){
	        		$(".result_check").append(valor+" "); // adiciona o resultado na div .result_check
	     		}else{}
	    	});

		// Verifica se existe input sem seleção
		if ($("form input:checkbox:checked").length == 0) {
			alert("Selecione algum número");
			document.getElementsByClassName("item-resultado").style.display = "none";
		}		    	
	};

		function maisque10 () {
		    // controla se tem mínimo 10 escolhidos
		    $('form').on("click", 'input[type="checkbox"]', function (e) {
		        if ($("form input:checkbox:checked").length >= 11) {
		            alert("Voce selecionou 10 números");
		            e.preventDefault();
		        }
		    });
		}
		maisque10();

		function limpar() {
		location.reload();
			}

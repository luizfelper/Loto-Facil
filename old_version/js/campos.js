//DEFININDO VARIÁVEIS GLOBAIS (SEM O "var")
		r1 = document.getElementById("myRadio01");
		r2 = document.getElementById("myRadio02");
		r3 = document.getElementById("myRadio03");
		r4 = document.getElementById("myRadio04");
		r5 = document.getElementById("myRadio05");
		r6 = document.getElementById("myRadio06");
		r7 = document.getElementById("myRadio07");
		r8 = document.getElementById("myRadio08");
		r9 = document.getElementById("myRadio09");
		r10 = document.getElementById("myRadio10");
		r11 = document.getElementById("myRadio11");
		r12 = document.getElementById("myRadio12");
		r13 = document.getElementById("myRadio13");
		r14 = document.getElementById("myRadio14");
		r15 = document.getElementById("myRadio15");
		r16 = document.getElementById("myRadio16");
		r17 = document.getElementById("myRadio17");
		r18 = document.getElementById("myRadio18");
		r19 = document.getElementById("myRadio19");
		r20 = document.getElementById("myRadio20");
		r21 = document.getElementById("myRadio21");
		r22 = document.getElementById("myRadio22");
		r23 = document.getElementById("myRadio23");
		r24 = document.getElementById("myRadio24");
		r25 = document.getElementById("myRadio25");
		bgradio = document.getElementsByClassName("bgradio");
		exiberesultado = document.getElementById("resultado");

	function verificar() {
		resultado01 = document.getElementById("resultado01");
		resultado02 = document.getElementById("resultado02");
		resultado03 = document.getElementById("resultado03");
		resultado04 = document.getElementById("resultado04");
		resultado05 = document.getElementById("resultado05");
		resultado06 = document.getElementById("resultado06");
		resultado07 = document.getElementById("resultado07");
		resultado08 = document.getElementById("resultado08");
		resultado09 = document.getElementById("resultado09");
		resultado10 = document.getElementById("resultado10");
		resultado11 = document.getElementById("resultado11");
		resultado12 = document.getElementById("resultado12");
		resultado13 = document.getElementById("resultado13");
		resultado14 = document.getElementById("resultado14");
		resultado15 = document.getElementById("resultado15");
		resultado16 = document.getElementById("resultado16");
		resultado17 = document.getElementById("resultado17");
		resultado18 = document.getElementById("resultado18");
		resultado19 = document.getElementById("resultado19");
		resultado20 = document.getElementById("resultado20");
		resultado21 = document.getElementById("resultado21");
		resultado22 = document.getElementById("resultado22");
		resultado23 = document.getElementById("resultado23");
		resultado24 = document.getElementById("resultado24");
		resultado25 = document.getElementById("resultado25");
		btnImprimir = document.getElementById("btnImprimir");

		// Verifica se não existe input selecionados
		if ($("form input:checkbox:checked").length == 0) {
			alert("Selecione algum número");
		document.getElementsByClassName("item-resultado").style.display = "none";
		}		    

		if (r1.checked == false) {resultado01.innerHTML = "01";}
		if (r2.checked == false) {resultado02.innerHTML = "02";}
		if (r3.checked == false) {resultado03.innerHTML = "03";}
		if (r4.checked == false) {resultado04.innerHTML = "04";}
		if (r5.checked == false) {resultado05.innerHTML = "05";}
		if (r6.checked == false) {resultado06.innerHTML = "06";}
		if (r7.checked == false) {resultado07.innerHTML = "07";}
		if (r8.checked == false) {resultado08.innerHTML = "08";}
		if (r9.checked == false) {resultado09.innerHTML = "09";}
		if (r10.checked == false) {resultado10.innerHTML = "10";}
		if (r11.checked == false) {resultado11.innerHTML = "11";}
		if (r12.checked == false) {resultado12.innerHTML = "12";}
		if (r13.checked == false) {resultado13.innerHTML = "13";}
		if (r14.checked == false) {resultado14.innerHTML = "14";}
		if (r15.checked == false) {resultado15.innerHTML = "15";}
		if (r16.checked == false) {resultado16.innerHTML = "16";}
		if (r17.checked == false) {resultado17.innerHTML = "17";}
		if (r18.checked == false) {resultado18.innerHTML = "18";}
		if (r19.checked == false) {resultado19.innerHTML = "19";}
		if (r20.checked == false) {resultado20.innerHTML = "20";}
		if (r21.checked == false) {resultado21.innerHTML = "21";}
		if (r22.checked == false) {resultado22.innerHTML = "22";}
		if (r23.checked == false) {resultado23.innerHTML = "23";}
		if (r24.checked == false) {resultado24.innerHTML = "24";}
		if (r25.checked == false) {resultado25.innerHTML = "25";}
		btnImprimir.style.display = "initial";
		};


/*function RadioHab() {
	var form = document.Teste;
	var msg="";
	var Radio=null;
	Radio = form.radioteste;
	for(var i=0;i<Radio.length;i++) {
		if(Radio[i].checked=false) {
			msg = "Selecionado: " + Radio[i].id;
		}
	}
	alert(msg);
}
if ($('.desligado').prop('checked', true)) {}
*/
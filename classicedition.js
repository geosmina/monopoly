function Square(name, pricetext, color, price, groupNumber, baserent, rent1, rent2, rent3, rent4, rent5) {
	this.name = name;
	this.pricetext = pricetext;
	this.color = color;
	this.owner = 0;
	this.mortgage = false;
	this.house = 0;
	this.hotel = 0;
	this.groupNumber = groupNumber || 0;
	this.price = (price || 0);
	this.baserent = (baserent || 0);
	this.rent1 = (rent1 || 0);
	this.rent2 = (rent2 || 0);
	this.rent3 = (rent3 || 0);
	this.rent4 = (rent4 || 0);
	this.rent5 = (rent5 || 0);
	this.landcount = 0;

	if (groupNumber === 3 || groupNumber === 4) {
		this.houseprice = 500;
	} else if (groupNumber === 5 || groupNumber === 6) {
		this.houseprice = 1000;
	} else if (groupNumber === 7 || groupNumber === 8) {
		this.houseprice = 1500;
	} else if (groupNumber === 9 || groupNumber === 10) {
		this.houseprice = 2000;
	} else {
		this.houseprice = 0;
	}
}

function Card(text, action) {
	this.text = text;
	this.action = action;
}

function corrections() {
	document.getElementById("cell1name").textContent = "Av. 9 de Julho";

	// Add images to enlarges.
	//document.getElementById("enlarge5token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; bottom: 20px;" />';
	//document.getElementById("enlarge15token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	//document.getElementById("enlarge25token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	//document.getElementById("enlarge35token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	//document.getElementById("enlarge12token").innerHTML += '<img src="images/electric_icon.png" height="60" width="48" alt="" style="position: relative; top: -20px;" />';
	//document.getElementById("enlarge28token").innerHTML += '<img src="images/water_icon.png" height="60" width="78" alt="" style="position: relative; top: -20px;" />';
}

function utiltext() {
	return '&nbsp;&nbsp;&nbsp;&nbsp;If one "Utility" is owned rent is 4 times amount shown on dice.<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;If both "Utilitys" are owned rent is 10 times amount shown on dice.';
}

function transtext() {
	return '<div style="font-size: 14px; line-height: 1.5;">Rent<span style="float: right;">$25.</span><br />If 2 Railroads are owned<span style="float: right;">50.</span><br />If 3 &nbsp; &nbsp; " &nbsp; &nbsp; " &nbsp; &nbsp; "<span style="float: right;">100.</span><br />If 4 &nbsp; &nbsp; " &nbsp; &nbsp; " &nbsp; &nbsp; "<span style="float: right;">200.</span></div>';
}

// function luxurytax() {
// 	addAlert(player[turn].name + " paid $100 for landing on Luxury Tax.");
// 	player[turn].pay(100, 0);

// 	$("#landed").show().text("You landed on Luxury Tax. Pay $100.");
// }

function receitaFederal() {
	addAlert(player[turn].name + ", pague $2.000 para a Receita Federal");
	player[turn].pay(2000, 0);

	$("#landed").show().text("Você caiu na fiscalização da Receita Federal. Pague $2.000.");
}

var square = [];

square[0] = new Square("INÍCIO", "Credite $2.000 em seu cartão ao passar nesta casa.", "#FFFFFF");
square[1] = new Square("Av. 9 de Julho", "$1.000", "#008000", 1000, 3, 60, 300, 900, 2700, 4000, 5000);
square[2] = new Square("Av. Brasil", "$750", "#008000", 750, 3, 40, 200, 600, 1800, 3200, 4500);
square[3] = new Square("Ações do Banco Itaú", "$2000", "#d9d9d9", 2000, 2);
square[4] = new Square("Av. Beira Mar", "$600", "#008000", 600, 3, 20, 100, 300, 900, 1600, 2500);
square[5] = new Square("Av. Rio Branco", "$2.400", "#FF0000", 2400, 5, 200, 1000, 3000, 7500, 9250, 11000);
square[6] = new Square("Notícias", "SIGA A INSTRUÇÃO NA CARTA", "#FFFFFF");
square[7] = new Square("Av. do Estado", "$2.200", "#FF0000", 2200, 5, 180, 900, 2500, 7000, 8750, 10500);
square[8] = new Square("Ações da TAM Viagens", "$2.000", "#d9d9d9", 2000, 2);
square[9] = new Square("Av. do Contorno", "$2.200", "#FF0000", 2200, 5, 180, 900, 2500, 7000, 8750, 10500);
square[10] = new Square("Visitas", "", "#FFFFFF");
square[11] = new Square("Notícias", "SIGA A INSTRUÇÃO NA CARTA", "#FFFFFF");
square[12] = new Square("Av. Rebouças", "$2.000", "#0D99C2", 2000, 6, 160, 800, 2200, 6000, 8000, 10000);
square[13] = new Square("Av. Santo Amaro", "$1.800", "#0D99C2", 1800, 6, 140, 700, 2000, 5500, 7500, 9500);
square[14] = new Square("Ações do Posto Ipiranga", "$2.000", "#d9d9d9", 2000, 2)
square[15] = new Square("Rua da Consolação", "$1.800", "#0D99C2", 1800, 6, 140, 700, 2000, 5500, 7500, 9500);
square[16] = new Square("Restituição de Imposto de Renda", "Receba $2.000", "#FFFFFF");
square[17] = new Square("Av. Morumbi", "$4.000", "#CE5AC3", 4000, 9, 500, 2000, 6000, 14000, 17000, 20000);
square[18] = new Square("Av. Higienópolis", "$3.500", "#CE5AC3", 3500, 9, 350, 1750, 500, 11000, 13000, 15000);
square[19] = new Square("Av. São João", "$1.200", "#A469BE", 1200, 4, 80, 400, 1000, 3000, 4500, 6000);
square[20] = new Square("Feriado", "", "#FFFFFF");
square[21] = new Square("Av. Ipiranga", "$1.000", "#A469BE", 1000, 4, 60, 300, 900, 2700, 4000, 5000);
square[22] = new Square("Ações da Nívea", "$2.000", "#d9d9d9", 2000, 2)
square[23] = new Square("Receita Federal", "Pague $2.000", "#FFFFFF");
square[24] = new Square("Notícias", "SIGA A INSTRUÇÃO NA CARTA", "#FFFFFF");
square[25] = new Square("Rua Brigadeiro Faria Lima", "$1.400", "#587D99", 1400, 8, 100, 500, 1500, 4500, 6250, 7500);
square[26] = new Square("Av. Paulista", "$1.600", "#587D99", 1600, 8, 120, 600, 1800, 5000, 7000, 9000);
square[27] = new Square("Notícias", "SIGA A INSTRUÇÃO NA CARTA", "#FFFFFF");
square[28] = new Square("Av. Recife", "$1.400", "#587D99", 1400, 8, 100, 500, 1500, 4500, 6250, 7500);
square[29] = new Square("Ações da Vivo", "$2.000", "#d9d9d9", 2000, 2)
square[30] = new Square("Vá para a Prisão", "Vá diretamente à prisão. Não passe pelo INÍCIO. Não credite seus $2.000.", "#FFFFFF");
square[31] = new Square("Av. Juscelino Kubitschek", "$3.200", "#EC8C33", 3200, 9, 280, 1500, 4500, 10000, 12000, 14000);
square[32] = new Square("Notícias", "SIGA A INSTRUÇÃO NA CARTA", "#FFFFFF");
square[33] = new Square("Rua Oscar Freire", "$3.000", "#EC8C33", 3000, 9, 260, 1300, 3900, 9000, 11000, 12750);
square[34] = new Square("Av. Ibirapuera", "$3.000", "#EC8C33", 3000, 9, 260, 1300, 3900, 9000, 11000, 12750);
square[35] = new Square("Av. Vieira Souto", "$2.800", "#E6D80C", 2800, 7, 260, 1300, 3600, 8500, 10250, 12000);
square[36] = new Square("Ações da FIAT", "$2.000", "#d9d9d9", 2000, 2)
square[37] = new Square("Av. Presidente Vargas", "$2.600", "#E6D80C", 2600, 7, 220, 1100, 3300, 8000, 9750, 11500);
square[38] = new Square("Notícias", "SIGA A INSTRUÇÃO NA CARTA", "#FFFFFF");
square[39] = new Square("Av. Niemeyer", "$2.600", "#E6D80C", 2600, 7, 220, 1100, 3300, 8000, 9750, 11500);

var communityChestCards = [];
var chanceCards = [];

communityChestCards[0] = new Card("Get out of Jail, Free. This card may be kept until needed or sold.", function(p) { p.communityChestJailCard = true; updateOwned();});
communityChestCards[1] = new Card("You have won second prize in a beauty contest. Collect $10.", function() { addamount(10, 'Community Chest');});
communityChestCards[2] = new Card("From sale of stock, you get $50.", function() { addamount(50, 'Community Chest');});
communityChestCards[3] = new Card("Life insurance matures. Collect $100.", function() { addamount(100, 'Community Chest');});
communityChestCards[4] = new Card("Income tax refund. Collect $20.", function() { addamount(20, 'Community Chest');});
communityChestCards[5] = new Card("Holiday fund matures. Receive $100.", function() { addamount(100, 'Community Chest');});
communityChestCards[6] = new Card("You inherit $100.", function() { addamount(100, 'Community Chest');});
communityChestCards[7] = new Card("Receive $25 consultancy fee.", function() { addamount(25, 'Community Chest');});
communityChestCards[8] = new Card("Pay hospital fees of $100.", function() { subtractamount(100, 'Community Chest');});
communityChestCards[9] = new Card("Bank error in your favor. Collect $200.", function() { addamount(200, 'Community Chest');});
communityChestCards[10] = new Card("Pay school fees of $50.", function() { subtractamount(50, 'Community Chest');});
communityChestCards[11] = new Card("Doctor's fee. Pay $50.", function() { subtractamount(50, 'Community Chest');});
communityChestCards[12] = new Card("It is your birthday. Collect $10 from every player.", function() { collectfromeachplayer(10, 'Community Chest');});
communityChestCards[13] = new Card("Advance to \"GO\" (Collect $200).", function() { advance(0);});
communityChestCards[14] = new Card("You are assessed for street repairs. $40 per house. $115 per hotel.", function() { streetrepairs(40, 115);});
communityChestCards[15] = new Card("Go to Jail. Go directly to Jail. Do not pass \"GO\". Do not collect $200.", function() { gotojail();});


chanceCards[0] = new Card("GET OUT OF JAIL FREE. This card may be kept until needed or traded.", function(p) { p.chanceJailCard=true; updateOwned();});
chanceCards[1] = new Card("Make General Repairs on All Your Property. For each house pay $25. For each hotel $100.", function() { streetrepairs(25, 100);});
chanceCards[2] = new Card("Speeding fine $15.", function() { subtractamount(15, 'Chance');});
chanceCards[3] = new Card("You have been elected chairman of the board. Pay each player $50.", function() { payeachplayer(50, 'Chance');});
chanceCards[4] = new Card("Go back three spaces.", function() { gobackthreespaces();});
chanceCards[5] = new Card("ADVANCE TO THE NEAREST UTILITY. IF UNOWNED, you may buy it from the Bank. IF OWNED, throw dice and pay owner a total ten times the amount thrown.", function() { advanceToNearestUtility();});
chanceCards[6] = new Card("Bank pays you dividend of $50.", function() { addamount(50, 'Chance');});
chanceCards[7] = new Card("ADVANCE TO THE NEAREST RAILROAD. If UNOWNED, you may buy it from the Bank. If OWNED, pay owner twice the rental to which they are otherwise entitled.", function() { advanceToNearestRailroad();});
chanceCards[8] = new Card("Pay poor tax of $15.", function() { subtractamount(15, 'Chance');});
chanceCards[9] = new Card("Take a trip to Reading Rail Road. If you pass \"GO\" collect $200.", function() { advance(5);});
chanceCards[10] = new Card("ADVANCE to Boardwalk.", function() { advance(39);});
chanceCards[11] = new Card("ADVANCE to Illinois Avenue. If you pass \"GO\" collect $200.", function() { advance(24);});
chanceCards[12] = new Card("Your building loan matures. Collect $150.", function() { addamount(150, 'Chance');});
chanceCards[13] = new Card("ADVANCE TO THE NEAREST RAILROAD. If UNOWNED, you may buy it from the Bank. If OWNED, pay owner twice the rental to which they are otherwise entitled.", function() { advanceToNearestRailroad();});
chanceCards[14] = new Card("ADVANCE to St. Charles Place. If you pass \"GO\" collect $200.", function() { advance(11);});
chanceCards[15] = new Card("Go to Jail. Go Directly to Jail. Do not pass \"GO\". Do not collect $200.", function() { gotojail();});

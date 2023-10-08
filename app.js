// Code runs on code.org's App Lab

var from = "Seattle";
var to = "New York";
var seats = 0;
var price = 0;
var id = 0;
var tickets = 0;

function readFlight(){
  readRecords("Flights", {from:from, to:to}, function(records){
    seats = records[0].seats;
    price = records[0].price;
    id = records[0].id;
 });
}

readFlight();

onEvent("dropdownF", "change", function( ) {
	from = getText("dropdownF");
	readFlight();
});

onEvent("dropdownT", "change", function( ) {
	to = getText("dropdownT");
	readFlight();
});

onEvent("buttonM", "click", function( ) {
	if (tickets > 0){
	  tickets--;
	  setText("label4", "Total: $" + price*tickets);
	  setText("label3", tickets);
	}
});

onEvent("buttonP", "click", function( ) {
  if(tickets>=seats){
    return;
  }
	tickets++;
	setText("label4", "Total: $" + price*tickets);	  
  setText("label3", tickets);
});

onEvent("button3", "click", function( ) {
  if(tickets<=0){
    return;
  }
  updateRecord("Flights", {id:id, from:from, to:to, seats:seats-tickets, price:price}, function(){});
	setScreen("screen2");
});


onEvent("button4", "click", function( ) {
	setScreen("screen1");
	tickets = 0;
	readFlight();
	setText("label3", "0");
	setText ("label4", "Total: $0");
});

var data = [
	{
		name: "Pol",
		age: 23,
		gender: "M"
	},
	{
		name: "Raul",
		age: 36,
		gender: "M"
	},
	{
		name: "Alex",
		age:33,
		gender: "M"
	},
	{
		name: "Marí",
		age:28,
		gender: "F"
	},
	{
		name: "Nadia",
		age:24,
		gender: "F"
	},
    	{
		name: "Violeta",
		age:26,
		gender: "F"
	}
];



$("input[name='filter'], select.filter").change(function() {
  var classes = [];
  var stateClass = ""

  $("input[name='filter']").each(function() {
    if ($(this).is(":checked")) {
      classes.push('.' + $(this).val());
    }
  });

  if (classes == "" && stateClass == "") {
    $("#StatusTable tbody tr").show();
  } else {
    
    $("#StatusTable tbody tr").hide();

    rows = $("#StatusTable tr" + stateClass).filter(classes.length ? classes.join(',') : '*');
    if (rows.size() > 0) {
      rows.show();
    }
  }

});



















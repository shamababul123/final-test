// Write all your Javascript here!
$.ajax({
	url: `https://techkaro-test.herokuapp.com/api/v1/getdata`,
	success: function (data) {
		console.log(data);
		document.querySelector(".image").innerHTML =
		`
		<img src="${data.imageURL}" height="300px" width="600px">
	`;
	document.querySelector(".card-subtitle").innerHTML =
	` 
	 <h5 class="card-title">${data.sale.heading}</h5>
	<h6 class="card-subtitle mb-2 text-muted">${data.sale.description}</h6>`


		document.querySelector(".group").innerHTML =
		`

		<li class="list-group-item">${data.info.description}</li>
		 
	`

	document.querySelector(".icon").innerHTML =
	`
	<li class="icon"class="list-group-item"><i class="fas fa-calendar-alt"></i>
${data.date}<i class="fas fa-user"><span>by</span> TechKaro Community</i>
</li>
	`
	},
	  error: function (err) {
      alert(data);
  }
})
// <li class="list-group-item">${data.info.description}</li>
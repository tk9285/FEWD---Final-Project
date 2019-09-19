const data = window.location.search
const item = data.split('&')[0].split('=')[1]
const quantity = data.split('&')[1].split('=')[1]
console.log(quantity)
console.log(item)

if (item === "Hard+Hat") {
    $("#item").val("Hard+Hat")
    $(".items").append('<img src="images/hard-hat.jpg"></img>')
    $('.item-description').append(`<h3>Construction Hard Hat</h3>

    <h4>Item Description:</h4>

    <ul>

        <li>Heavy-duty hard hats to wear on the job.</li>
        <li>Adjustable 4-point ratchet suspension for a custom fit.</li>
        <li>Includes washable sweatband.</li>

    </ul>`)
    $("#price").append("<h3>Price: $8.95</h3>")
    $('#quantity').val(quantity)
} else if (item === "Safety+Glasses") {
    $("#item").val("Safety+Glasses")
    $(".items").append('<img src="images/safetyglasses.jpg"></img>')
    $(".item-description").append(`<h3>Construction Safety Glasses</h3>
    
    <h4>Item Description:</h4>

    <ul>

        <li>Heavy-duty hard hats to wear on the job.</li>
        <li>Adjustable 4-point ratchet suspension for a custom fit.</li>
        <li>Includes washable sweatband.</li>

    </ul>`)
    $("#price").append("<h3>Price: $8.95</h3>")
    $('#quantity').val(quantity)
} else if (item === "Safety+Vest") {
    $("#item").val("Safety+Vest")
    $(".items").append('<img src="images/safetyvest.jpg"></img>')
    $(".item-description").append(`<h3>Safety Vest</h3>
    
    <h4>Item Description:</h4>

    <ul>

        <li>Heavy-duty hard hats to wear on the job.</li>
        <li>Adjustable 4-point ratchet suspension for a custom fit.</li>
        <li>Includes washable sweatband.</li>

    </ul>`)
    $("#price").append("<h3>Price: $8.95</h3>")
    $('#quantity').val(quantity)
} else if (item === "Earmuffs") {
    $("#item").val("Earmuffs")
    $(".items").append('<img src="images/earmuffs.jpg"></img>')
    $(".item-description").append(`<h3>Construction Earmuffs</h3>
    
    <h4>Item Description:</h4>

    <ul>

        <li>Heavy-duty hard hats to wear on the job.</li>
        <li>Adjustable 4-point ratchet suspension for a custom fit.</li>
        <li>Includes washable sweatband.</li>

    </ul>`)
    $("#price").append("<h3>Price: $8.95</h3>")
    $('#quantity').val(quantity)
} else if (item === "Safety+Gloves") {
    $("#item").val("Safety+Gloves")
    $(".items").append('<img src="images/gloves.jpg"></img>')
    $(".item-description").append(`<h3>Construction Gloves</h3>
    
    <h4>Item Description:</h4>

    <ul>

        <li>Heavy-duty hard hats to wear on the job.</li>
        <li>Adjustable 4-point ratchet suspension for a custom fit.</li>
        <li>Includes washable sweatband.</li>

    </ul>`)
    $("#price").append("<h3>Price: $8.95</h3>")
    $('#quantity').val(quantity)
}
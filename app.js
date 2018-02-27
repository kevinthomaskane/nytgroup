
var numberOfArticles 
console.log("hello")

function search(query, beginYear, endYear, number) {
    var nytUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + query + '&begin_date=' + beginYear + '0101&sort=newest&end_date=' + endYear + '0101&api-key=f1bb266b9dff4541b8d3d390a067ccbe';
    $.ajax({
        method: "GET",
        url: nytUrl
    }).done(function (data) {
        console.log(data);
        var results = data.response.docs;
        for (let i = 0; i < number; i++) {
            console.log(results[i])
            $(".panel-body").append(articleArea)
            var articleArea = $("<div class='panel panel-default'>")
            var articleHeader = $("<div class='panel-heading'>")
            articleHeader.append(`<a href="${results[i].web_url}" target='_blank'>${results[i].headline.main}</a>`)
            console.log(results[i].headline.main)
            articleArea.append(articleHeader);
            $(".main-body").append(articleArea)

        }


    })
}


$(document).on("click", "#submit", function () {
    $(".panel-body").empty();
    console.log("submit");
    var query = $("#search").val().trim();
    var beginYear = $("#beginYear").val()
    var endYear = $("#endYear").val()
    number = numberOfArticles;
    search(query, beginYear, endYear, number)

});


$("#clear").click(function () {
    $("#search").val("")
    $("#beginYear").val('')
    $("#endYear").val('')
    numberOfArticles;

})

$('.dropdown-toggle').dropdown()

$(document).on("click", ".number", function () {
    console.log("hello22")
    var newText = $(this).html()
    console.log(newText)
    numberOfArticles = parseInt($(this).html());
    console.log(numberOfArticles)
    $("#numberTitle").text(newText)
})

search("trump", 1999, 2018)


var numberOfArticles
console.log("hello")

function search(query, number, beginYear, endYear){
var nytUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + query + '&begin_date=' + beginYear + '0101&sort=newest&end_date=' + endYear + '0101&api-key=f1bb266b9dff4541b8d3d390a067ccbe';
$.ajax({
    method: "GET",
    url: nytUrl
}).done(function (data) {
    console.log(data);



})
}


$("button").click(function () {
    var query = $("#search").val().trim();
    var beginYear = $("#beginYear").val()
    var endYear = $("#endYear").val()
    number = $("#")
    search(query)



})

$("dropdown").click(function(){
    numberOfArticles = parseInt($(this).html());
})

search("trump")

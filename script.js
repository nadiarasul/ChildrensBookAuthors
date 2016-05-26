
// :)


// make the five ajax calls for the seperate authors

// need to get list of books, quote, birthday


// var authorId = {};


var childrenApp = {};
var idc= '';


// var ellis = {
//     authorId = 953
// }

// Deborah Ellis = 95863
// Kenneth Oppel = 88922
//  Vickie Grant = 611315
// Cybèle Young = 4625304
// Marie-Louise Gay = 80974

// book list, date of birth, hometown 

childrenApp.init = function(){
   

     $('.ellis').on('click', function (){
    	// e.preventDefault();
    	childrenApp.getAuthor('95863');

        // var bookTitle = $('<h4>').text(bookItem.title);


    });
    $('.oppel').on('click', function (){
    	// e.preventDefault();
    	childrenApp.getAuthor('88922');
    
    });
    $('.grant').on('click', function (){
    	// e.preventDefault();
    	childrenApp.getAuthor('611315');
    
    });
    $('.young').on('click', function (){
    	// e.preventDefault();
    	childrenApp.getAuthor('4625304');
    
    });
    $('.gay').on('click', function (){
    	// e.preventDefault();
    	childrenApp.getAuthor('80974');
        
    });
};





var apiKey ='0MVd0sx7a0AVeLLDN8lPXg';

childrenApp.getAuthor = function(authorId){
    $.ajax({
        url: 'http://proxy.hackeryou.com',
        dataType: 'json',
        method:'GET',
        data: {
            reqUrl: 'https://www.goodreads.com/author/show.xml' ,
            params: {
                key: apiKey,
                id: authorId,

            },
            xmlToJSON: true,   
        }
    }).then(function(res) {
        console.log(res);
        var bookReturn = res.GoodreadsResponse.author.books;
        bookReturn.book.forEach(function(bookItem){
            console.log(bookItem.title);
            console.log(bookItem.description);

        });
        var authorHometown = res.GoodreadsResponse.author.hometown;
        var birthday = res.GoodreadsResponse.author.born_at;
        console.log(birthday);
        console.log(bookReturn);
        console.log(authorHometown);
    }); 
};

var author = [
	{
		name: 'Deborah Ellis',
		id: '95863',
	},
	{
		name: 'Kenneth Oppel',
		id: '88922',
	},
   	{
		name: 'Vickie Grant ',
		id: '88922',
	},
	{
		name: 'Cybèle Young ',
		id: '4625304',
	},
	{
		name: 'Marie-Louise Gay',
		id: '80974', 
	},


]






$(document).ready(function(){
	childrenApp.init();
});





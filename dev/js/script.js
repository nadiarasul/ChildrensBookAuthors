
// :)


// make the five ajax calls for the seperate authors

// need to get list of books, quote, birthday


// var authorId = {};

var authors = [
{
    name: 'Deborah Ellis',
    id: '95863',
    dob: '1960/01/01',
    hometown: 'Cochrane, Ontario',        
    bio: '<p>A renowned author, feminist, and peace activist, Deborah Ellis frequently tackles issues of nationalism, poverty and sexism in her writings. The author of the international  best-selling The Breadwinner, Ellis has donated more than one million in royalties to Canadian Women for Women in Afghanistan, Street Kids International, the Children in Crisis Fund of IBBY (International Board on Books for Young People) and UNICEF.</p><p>She has won the Governor General’s Award, the Ruth Schwartz Award, the University of California’s Middle East Book Award, Sweden’s Peter Pan Prize, the Jane Addams Children’s Book Award, and the Vicky Metcalf Award for a Body of Work, and been named to the Order of Ontario.</p>'
},
{
    name: 'Kenneth Oppel',
    id: '88922',
    dob: '1967/08/31',
    hometown: 'Port Alberni, British Columbia',       
    bio: '<p>At the age of fifteen, Kenneth Oppel’s first book was recommended for publication by his favourite author, Roald Dahl. “I never had any direct correspondence with Dahl myself,” he said in 2013. “Though I do have a letter he wrote to our friend, referring to me as a “teenaged novelist genius” which really was very in keeping with his tendency for hyperbole.”</p><p>Since then, the Port Alberni, British Columbia native has gone on to collect the 2004 Governor General’s Literary Award for English language children’s literature as well as  numerous recognitions from the American Library Association. His Silverwing trilogy, about the adventures of a group of migrating bats, has sold over one million books across the world.</p><p>The author of nineteen books, Oppel currently lives in Toronto with his wife, and three children.</p> '
},
{
    name: 'Vickie Grant',
    id: '611315',
    dob: 'Not available',
    hometown: 'Halifax, Nova Scotia',        
    bio: '<p>Vicki Grant has been called “a superb storyteller” (Canadian Children’s Book News) with “a wonderful sense of comedy” (CM Magazine) and “one of the funniest writers working today” (Vancouver Sun).</p><p>The author of fourteen books, her works have been translated into seven languages, and shortlisted for numerous awards in both Canada and the United States. Grant has also written almost 100 episode of children’s television, and is set to begin work on her third documentary.</p><p>She lives in Halifax, Nova Scotia.</p>',

},
{
    name: 'Cybèle Young',
    id: '4625304',
    dob: 'Not available',
    hometown: 'Toronto Ontario',
    bio: '<p>A Toronto-based artist and author, Cybèle Young’s work draws heavily on her illustration and storytelling strengths. Since graduating from sculpture and printmaking at the Ontario College of Art and Design in 1995, Young\'s artwork has appeared in galleries around the world, such as New York, LA, Miami, London, Stockholm, Japan, Singapore, Korea and across Canada. Her 2011 release ‘Ten Birds’ won the Governor General’s Award for Illustration  in 2011.</p><p>"I fell in love with children’s books when I was pregnant,” she told Quill & Quire in 2012. “And as a parent, there’s nothing more heavenly than knowing your kid, who could be climbing the walls, will sit happily in your lap if you offer them a book, and you can both be transported to another world."</p>',
},
{
    name: 'Marie-Louise Gay',
    id: '80974', 
    dob: '1952/06/17',
    hometown: 'Quebec City, Quebec',
    bio:'<p>One of Canada’s most honoured authors and illustrators, Mary-Louise Gay has published numerous books in both French and English. Her famed Stella and Sam series has been published in more than twelve languages, and was recently developed into a 52-episode cartoon series. For her work, she has won numerous awards and prizes.</p><p>"Children are so open," Gay told the University of Manitoba in 1988, "and their link between fantasy and reality is so fragile. I\'m always amazed at what they will and won\'t believe. They have no problem accepting that a polar bear might come out of the refrigerator, but then they tell me that everyone knows that you don\'t keep bananas in the refrigerators."</p><p>Gay currently lives in Montreal.</p>',
},


]
var bookTitle;

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
    $('#main').hide();
    $('#content').show();
        // e.preventDefault();
     $('#main').hide();
    $('#content').show();
        childrenApp.getAuthor('95863');
        // var bookTitle = $('<h4>').text(bookItem.title);
    });
   $('.oppel').on('click', function (){
        // e.preventDefault();
    $('#main').hide();
    $('#content').show();        
        childrenApp.getAuthor('88922');

    });
   $('.grant').on('click', function (){
        // e.preventDefault();
     $('#main').hide();
    $('#content').show();       
        childrenApp.getAuthor('611315');

    });
   $('.young').on('click', function (){
        // e.preventDefault();
    $('#main').hide();
    $('#content').show();        
        childrenApp.getAuthor('4625304');

    });
   $('.gay').on('click', function (){
        // e.preventDefault();
     $('#main').hide();
    $('#content').show();       
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
        childrenApp.displayInfo(res.GoodreadsResponse.author);
    }); 
};
childrenApp.displayInfo = function (authorInfo){
    console.log(authorInfo);
            // var i = 0
            var bookReturn = authorInfo.books.book;
        // bookReturn.forEach(function(bookItem){
            var loopLength = 6;
            if(bookReturn.length < 6) {
                loopLength = bookReturn.length;
            }
            for (var i = 0; i < loopLength; i ++) {
                console.log(bookReturn[i].title);
            // console.log(bookReturn[i].)
            if(bookReturn[i].description.length !== undefined) {
                bookTitle = $('<h2>').html(bookReturn[i].title);
                var bookDescription = $('<p>').html(cleanup(bookReturn[i].description));
                var theDesc = cleanup(bookReturn[i].description);
                var bookImage = $('<img>').attr('src', bookReturn[i].image_url).data('desc', theDesc).data('name', bookTitle);
                // $.data(bookImage, 'desc', theDesc)

                // var pDescription = newBookDescription.replace(/&lt;br&gt;/ig," "); 
                // var bookDescription = $('<p>').html(cleanup(bookDescription));
                // var bookDiv = $('<div>').addClass()
                $('.bookName').html(bookTitle);
                $('.bookDescription').html(bookDescription);
                $('.bookGallery').append(bookImage);
                addImgListener();
                console.log($.data(bookImage))
            }
        }
        // });
        var authorHometown = authorInfo.hometown;
        console.log(authorHometown);
        var authorLink = authorInfo.link;
        console.log(authorLink);
        var authorBirthday = authorInfo.born_at;
        var authorName = authorInfo.name;
        var authorID = authorInfo.id;
        var authorBioMatch = authors.filter(function(author){
            return author.id === authorID
        });
        console.log(authorBioMatch); 
        // if (authorID === author.id) {
        //     $('.authorBio').html(author.bio);

        // }
        $('.readMore').attr('href', authorLink);
        $('.authorName').text(authorName);
        $('.birthday').text(authorBioMatch[0].dob);
        $('.hometown').text(authorBioMatch[0].hometown);
        // $('authorPhoto').attr('src', 'author.image');
        $('.authorBio').html(authorBioMatch[0].bio);
    }
    var cleanup=function(string){
        return string.replace(/&#40;/g,"(").replace(/&#41;/g,")").replace(/&#35;/g,"#").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/<br>/g,"").replace(/<\/em>/g,"").replace(/&apos;/g,"'").replace(/<em>/g,"").replace(/&quot;/g,"").replace(/<p>/g,"").replace(/<\/p>/g,"").replace(/<a href>/g,"").replace(/<\/a>/g,"").replace(/<blockquote>/g,"").replace(/<\/blockquote>/g,"").replace(/<strong>/g,"").replace(/<\/strong>/g,"").replace(/&amp;amp;/g,"&").replace(/&amp;/g,"&").replace(/\s\s\s\s\s\s\s\s/,' ');
    };

$('button').click(function() {
    var author = $(this).attr('class');
    $('button').removeClass('active');
    $('.bottomNames .'+author).addClass("active");
    $('.bookGallery').empty();
});

$('.home').click(function(){
    $('#content').hide();
    $('#main').show();
});


var addImgListener = function(){

    $('.bookGallery img').on('click', function(){
       var description = $(this).data('desc');
       var title = $(this).data('name');
       replaceDescription(title, description);
       $('.bookGallery img').removeClass('bookBorder');
       $(this).addClass('bookBorder');
    });
};

var replaceDescription = function(bookTitle, bookDescription) {
// code that empties and appends the book description
    $('.bookName').empty().append(bookTitle);
    $('.bookDescription').empty().append('<p>' + bookDescription + '</p>');
}

$(document).ready(function(){
   childrenApp.init();
});





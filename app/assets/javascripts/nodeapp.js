
var numone = 0;
var numtwo = 0;


function resetFields(){
  $('#ticker-one').text(0);
  $('#ticker-two').text(0);
  $('#first-hashtag-result').text(' ');
  $('#second-hashtag-result').text(' ');
};

function openStream(keyword, seconds, listSelector, tickerSelector){
  var query = 'keyword=' + keyword;
  var timeout = parseInt(seconds) * 1000
  var socket = io.connect('https://twitter-burst-node.herokuapp.com/', { query: query, 'forceNew': true })
  socket.on('stream', function(tweet){
      $(listSelector).text(tweet);
      num = $(tickerSelector).text();
      num ++;
      $(tickerSelector).text(num);
  });
  setTimeout(function () {
    socket.disconnect();
  }, timeout)
}

$('#start-button').click(function(){
  resetFields();
  var one = $('#first-hashtag-input').val();
  var two = $('#hash2').text();
  openStream(one, 30, '#first-hashtag-result', '#ticker-one');
  openStream(two, 30, '#second-hashtag-result', '#ticker-two');
});

// $('#start-button').on('click', function(){
//     resetFields();
//     var first_hashtag = $('#first-hashtag-input').val();
//     var second_hashtag = $('#hash2').text();
//     console.log(first_hashtag);
//     console.log(second_hashtag);

//     var query = 'first_hashtag='+ first_hashtag +'&second_hashtag='+ second_hashtag

//     var socket = io.connect('https://twitter-burst-node.herokuapp.com/', { query: query, 'forceNew':true });
//     socket.on('stream', function(tweet){
//         console.log(tweet);
//         setTimeout(function(){
//         if (tweet.search(first_hashtag) != -1){
//             console.log(tweet);
//             $('#first-hashtag-result').text(tweet);
//             numone = $('#ticker-one').text();
//             numone ++;
//             console.log(numone);
//             $('#ticker-one').text(numone);
//         }}, 0);
//         setTimeout(function(){
//         if (tweet.search(second_hashtag) != -1) {
//             console.log(tweet);
//             $('#second-hashtag-result').text(tweet);
//             numtwo = $('#ticker-two').text();
//             numtwo ++;
//             $('#ticker-two').text(numtwo);
//         }}, 0);
//     });
//     setTimeout(function () {
//       socket.disconnect();
//     }, 30000)
// });

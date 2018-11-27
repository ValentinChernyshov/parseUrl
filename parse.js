//let a = new URL('http://tutu.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo')

function parseUrl(url){
  var parsingUrl = new URL(url);
  return parsingUrl;
}

console.log(parseUrl('http://tutu.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo'));

// Вернет объект, в котором будут следующие свойства:
//console.log( a.href )
//console.log( a.href == "http://tutu.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo" )
//console.log( a.hash )
//console.log( a.hash == "#foo" )
//console.log( a.port )
//console.log( a.port == "8080" )
//console.log( a.host )
//console.log( a.host == "tutu.ru:8080" )
//console.log( a.protocol )
//console.log( a.protocol == "http:" )
//console.log( a.hostname ) 
//console.log( a.hostname == "tutu.ru" )
//console.log( a.pathname )
//console.log( a.pathname == "/do/any.php" )
//console.log( a.origin )
//console.log( a.origin == "http://tutu.ru:8080" )
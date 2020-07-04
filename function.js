function displaythis(data)
{
	document.getElementById("outvalue").value += data;
        return 1;
}
//respective functions for different tasks
function addme(m, b)
{
	return m + b;
}
function subme(m, b)
{
	return m - b;
}
function mulme(m, b)
{
	return m * b;
}
function divme(m, b)
{
	return m / b;
}
function percentme(m, b)
{
	return ( m * b ) / 100;
}
function absoluteme(b)
{
	return Math.abs(b);
}
function sqrtme(b)
{
	var a = Math.sqrt(b);
	if(parseInt(a)===Math.sqrt(b))
	{
	return a;
	}
	else
	{
	return a.toFixed(3);
	}
}
//this function is used to perform task
function task()
{
	var number1 = document.getElementById("outvalue").value;
	var number2;
	var pos;
	if((number1.indexOf('a'))!=-1)
	{
		pos = number1.indexOf('(');
		b = parseFloat(number1.slice(pos+1));
		number2 = absoluteme(b);
        }
	else if((number1.indexOf('s'))!=-1)
	{
		pos = number1.indexOf('(');
		b = parseFloat(number1.slice(pos+1));
		number2 = sqrtme(b);
        }
	else 
	{
		var m = parseFloat(number1);
	if((number1.indexOf('+'))!=-1)
	{	
		pos = number1.indexOf('+');
		b = parseFloat(number1.slice(pos+1));
		number2 = addme(m, b);
	}
	else if((number1.indexOf('-'))!=-1)
	{
		pos = number1.indexOf('-');
		b = parseFloat(number1.slice(pos+1));
		number2 = subme(m, b);
	}
	else if((number1.indexOf('*'))!=-1)
	{
		pos = number1.indexOf('*');
		b = parseFloat(number1.slice(pos+1));
		number2 = mulme(m, b);
	}
	else if((number1.indexOf('/'))!=-1)
	{
		pos = number1.indexOf('/');
		b = parseFloat(number1.slice(pos+1));
		number2 = divme(m, b);
	}
	else if((number1.indexOf('%'))!=-1)
	{
		pos = number1.indexOf('%');
		b = parseFloat(number1.slice(pos+1));
		number2 = percentme(m, b);
        }
	}
	document.getElementById("outvalue").value = number2;
        return 1;
}

	

//this function clears the screen
function deletes() 
{
	document.getElementById("outvalue").value = "";
        return 1;
}



//this function checks the valid field entry of form
function validateForm() {
   var name = document.forms["reg"]["name"];
   if(name.value == "" ) {
	alert("Name must be filled out!!");
 	return false;
	}
  	 var nameme = name.value;
      if((nameme.charAt(0)) >=0 && (nameme.charAt(0)) <=9 ) {
        alert("Name cannot take a number as a starting letter!!");
        return false;
       }
	var phone = document.forms["reg"]["phone"];
	if(phone.value == "" ) {
	alert("Phone number must be filled out!!");
 	return false;
	}
	var i;
	var myphone = phone.value;
	var len = myphone.length;
	for(i=0;i<len;i++){
		if(((myphone.charCodeAt(i)) >= 65 && (myphone.charCodeAt(i)) <= 90) ||  ((myphone.charCodeAt(i)) >= 97 && (myphone.charCodeAt(i)) <= 122)){
			alert("Phone number cannot contain alphabets!!");
			return false;
		}
	}	
	if(len!=10){
		alert("Phone number must contain 10 digits!!");
			return false;
	}
	var email = document.forms["reg"]["email"];
	if(email.value == "" ) {
	alert("E-mail must be filled out!!");
 	return false;
	}
	var j;
	var myemail = email.value;
	var leng = myemail.length;
		if((myemail.indexOf('@'))==-1 || (myemail.indexOf('.'))==-1) {
			alert("E-mail must have a '@' & '.' i.e enter a valid email id!!");
			return false;
		}
   return true;
}



function palin()
{
	var check = document.forms["palindrome"]["textname"];
	var checkme = check.value;
	var replaceme = /[^A-Za-z0-9]/g;
	var lowercheckme = checkme.toLowerCase().replace(replaceme, '');
	var reversecheckme = lowercheckme.split('').reverse().join('');
	if(reversecheckme === lowercheckme) {
		alert("Yay!!The string is palindrome.");
		return true;
	}
	else {
		alert("Alas!!The string is not palindrome.");
		return false;
	}
}
//checks whether the strings are anagrams or not by counting the occurrences of a alphabet. 
function anag()
{
	var check1 = document.forms["anagram"]["textname1"];
	var check2 = document.forms["anagram"]["textname2"];
	var check1me = check1.value;
	var check2me = check2.value;
	if( check1me === '' || check2me ==='') {
		alert("Two fields must be filled to check!!!");
		return false;
	}
	var replaceme = /[^A-Za-z]/g;
	var lowercheck1me = check1me.toLowerCase().replace(replaceme, '');
	var lowercheck2me = check2me.toLowerCase().replace(replaceme, '');
	var len1 = lowercheck1me.length;
	var len2 = lowercheck2me.length;
	
	if(len1!=len2) {
		alert("Alas!! Not anagrams.");
		return false;
	}
	else {
	var count = { };
	for (var i = 0; i < len1; i++) {
		var pos = lowercheck1me.charCodeAt(i)-97;
		count[pos] = ( count[pos] === 0 ) ? 1 : 2;
	
	}
	for (var i = 0; i < len1; i++) {
		var pos = lowercheck2me.charCodeAt(i)-97;
		if(!count[pos]--)
		{
			alert("Alas!! These are not anagrams.");
			return false;
		}
	}
		alert("Yay!! These are anagrams.");
		return true;
	}
}



function generateRandomNumbers() {
		var random1 = parseInt(Math.random()*1000);
		var random2 = parseInt(Math.random()*1000);

		document.getElementById("inp1").value = random1;
		document.getElementById("inp2").value = random2;
		
		mapme(random1, random2);
		return 1;
}
function mapme(x, y)
{
	var w = x;
	var v = y;
	var sum=0;
	
  	while(x != 0)
	{
		var r = x % 10;
		sum += r ;
 		x = parseInt(x/10);
	}
	x = sum;
	if(sum>9)
	{	sum = 0;
		while(x != 0)
	{
		var r = x % 10;
		sum += r ;
 		x = parseInt(x/10);
	}
	}
	var s1, s2;
	if(sum>=0 && sum<=3) {
	 	 s1 = 'Human';
	}
	else if(sum>=4 && sum<=6) {
		 s1 = 'Cockroach';
	}
	else {
		 s1 = 'Nuclear Bomb';
	}
	var sum1 = 0;
	while(y != 0)
	{
		var r = y % 10;
		sum1 += r ;
 		y = parseInt(y/10);
	}
	y = sum1;
	if(sum1>9)
	{	sum1 = 0;
		while(y != 0)
	{
		var r = y % 10;
		sum1 += r ;
 		y = parseInt(y/10);
	}
	}
	if(sum1>=0 && sum1<=3) {
	 	s2 = 'Human';
	}
	else if(sum1>=4 && sum1<=6) {
		s2 = 'Cockroach';
	}
	else {
		s2 = 'Nuclear Bomb';
	}
	if(s1==s2) {
		document.getElementById("demo").innerHTML = 'Tie';
		return 'Tie';
	}
	if((s1=='Human' && s2=='Cockroach') || (s1=='Cockroach' && s2=='Human')) {
		document.getElementById("demo").innerHTML = 'Human';
		return 'Human';
	}
		if((s1=='Human' && s2=='Nuclear Bomb') || (s1=='Nuclear Bomb' && s2=='Human')) {
		document.getElementById("demo").innerHTML = 'Nuclear Bomb';
		return 'Nuclear Bomb'; 
	}
	else {
		document.getElementById("demo").innerHTML = 'Cockroach';
		return 'Cockroach';
	}
}
	
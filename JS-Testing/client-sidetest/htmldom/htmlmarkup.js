var message = "Hello Jasmine";

function setMessage() {
    $('#txtmsg').val(message);
}

function clearMessage() {
    $('#txtmsg').val("");
}

// write the HTML DOM as string
// npm install --save-dev jasmine-jquery
// copy jquery.js and jasmine-jquery.js in
// lib sub-folder of jasmine-xxx-standalone folder
function setUpHtmlDomFixture() {
    setFixtures('<form id="frm" action="">'+
    '<div><input type="text" id="txtmsg"/></div></br>'+
    '<div><input type="button" value="set" id="btnset" onclick="setMessage()"/></div></br>'+
    '<div><input type="button" value="clear" id="btnclear" id="btnclear"'+ 'onclick="clearMessage()"/></div></form>');
}

function setspan(mess) {
    $('#span').append('<span>'+mess+'</span>');
}

function setUpHtmlSpanFixture() {
    setFixtures('<div id="span">'+
    '<div><input type="button" value="set" id="btnsetspan" onclick="setspan(mess)"/></div></br>'+
    '</div>');
}
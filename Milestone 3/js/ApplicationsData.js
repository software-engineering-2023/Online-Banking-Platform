var AppsNocard = 20;
var AppsNoloan = 4;
var replacementsAppNo = 9;

var clientIDs = [4763380,9474037,4763380,9474037,4763380
                ,9474037,4763380,9474037,4763380,4763380
                ,9474037,4763380,9474037,9474037,4763380
                ,9474037,4763380,9474037,9474037,4763380];

var dates = [ '2022/04/19 14:30', '2022/04/20 17:30', '2022/04/24 18:20', '2022/04/27 11:25','2022/04/28 12:35'
            , '2023/04/29 02:26', '2023/05/1 16:04', '2023/05/2 15:30', '2023/05/3 19:02','2023/05/6 13:04'
            , '2023/05/7 19:02', '2023/05/8 18:33', '2023/06/11 17:45', '2023/07/1 19:07','2023/08/3 20:12'
            , '2023/08/3 20:12', '2023/09/22 12:14', '2023/10/7 23:10', '2023/11/14 1:06','2023/12/16 14:56'];

var cardTypes = ['Visa','Visa','Mastercard','Visa','Visa'
                ,'Mastercard','Mastercard','Mastercard','Visa','Visa'
                ,'Mastercard','Visa','Visa','Mastercard','Visa'
                ,'Visa','Visa','Mastercard','Mastercard','Visa'];

var cardNums = ['4024007181477273', '4024629602922312',
                '5534690952786996', '4716634537150537',
                '4556013316504169', '5584697015902386',
'5522581498931853', '5306707433047404', '4716755619368323'];


var loanTypes = ['Personal','Mortage','Mortage','Personal'];

var showrow = [true,true,true,true,true
            ,true,true,true,true,true
            ,true,true,true,true,true
            ,true,true,true,true,true];


var replaceReasons = ["Lost:: I misplaced my credit card and can't find it anywhere. I need a replacement card to ensure my account's security.",
"Stolen:: Unfortunately, my credit card got stolen, and I'm worried about unauthorized charges. Please issue a new card for me.",
"Damaged:: My credit card got damaged, and it's no longer functional. I would appreciate a replacement card at your earliest convenience.",
"Expired:: I just realized that my credit card has expired. Could you kindly send me a new card with an updated expiration date?",
"Stolen:: I noticed some suspicious transactions on my credit card statement. For safety reasons, I'd like to replace my card and investigate these charges.",
"Expired:: I recently updated my address and contact information. It would be great if I could receive a new credit card with the updated details.",
"Expired:: I legally changed my name, and I need a new credit card that reflects my updated name. Please assist me with this request.",
"Stolen:: I'm concerned that there may have been a security breach involving my credit card information. As a precaution, I'd like to replace my card to ensure my financial safety."]

// function loadData(){
//     if (localStorage.getItem("AppsNocard") == null) {
//         return;
//     }
//     AppsNocard = localStorage.getItem("AppsNocard");
//     AppsNoloan = localStorage.getItem("AppsNoloan");
//     clientIDs = localStorage.getItem("clientIDs");
//     dates = localStorage.getItem("dates");
//     cardTypes = localStorage.getItem("cardTypes");
//     showrow = localStorage.getItem("showrow");
// }


// function saveData() {
//     localStorage.setItem("AppsNocard", AppsNocard);
//     localStorage.setItem("AppsNoloan", AppsNoloan);
//     localStorage.setItem("clientIDs", clientIDs);
//     localStorage.setItem("dates", dates);
//     localStorage.setItem("cardTypes", cardTypes);
//     localStorage.setItem("showrow", showrow);
// }
var OneTrust=OneTrust||{},containerName="langswitch",languageSwitcherFileName="4f992682-5fdd-47c9-bd38-16c30d3a7ee4.js",useDocumentLanguage="false",languageSwitcherFilePathPart=containerName+"/"+languageSwitcherFileName,languageSwitcherURL=getLanguageSwitcherScriptPath();
(function(){OneTrust.Languages={"de-de":"a8bfe5d6-64ed-4a91-be83-991da17e5080","default":"70c1a83e-5cf3-493a-bcfc-71f4b1842ebe","es-es":"2df469fa-436c-4a96-a351-662f7aa71a9c","fr-fr":"95cddc86-4ae6-4537-a313-3e2e3fae53e8","en-gb":"8a8077ff-bdf4-4b13-821e-7a3ddc04ea64","ja-jp":"ab4a308b-0e52-42b2-bb7e-7b7c6c7004c0"};var a;a="true"==useDocumentLanguage.toLowerCase()?document.documentElement.lang:navigator.languages?navigator.languages[0]:navigator.language||navigator.userLanguage;a=a.toLowerCase();
var b="";if(2==a.length){if(b=OneTrust.Languages[a+"-"+a]||OneTrust.Languages[a],!b)for(var c=0;c<Object.keys(OneTrust.Languages).length;c+=1)if(languageKey=Object.keys(OneTrust.Languages)[c],languageKey.substr(0,2)==a){b=OneTrust.Languages[languageKey];break}}else 2<a.length&&(b=OneTrust.Languages[a]||OneTrust.Languages[a.substr(0,2)]);b||(b=OneTrust.Languages["default"]);a=document.createElement("script");b=languageSwitcherURL.replace(languageSwitcherFilePathPart,"consent/"+b+".js");a.setAttribute("src",
b);a.setAttribute("charset","utf-8");a.async=!0;document.head.appendChild(a)})();function getLanguageSwitcherScriptPath(){for(var a=document.getElementsByTagName("script"),b="",c=0;c<a.length;++c)if(isLanguageSwitcherFile(a[c],languageSwitcherFilePathPart)){b=a[c].src;"true"===a[c].getAttribute("data-document-language")&&(useDocumentLanguage="true");break}return b}function isLanguageSwitcherFile(a,b){return a.getAttribute("src")?-1!==a.getAttribute("src").indexOf(b):!1};
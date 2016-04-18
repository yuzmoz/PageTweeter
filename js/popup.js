window.onload = function(){
    
    var tab;
    chrome.tabs.query({active:true}, function(tabs){
        tab = tabs[0];
        console.log(tab);
    }); //ここで読み込まないと他より先に読めない…
    
    document.getElementById("tweet").onclick=function(){
        chrome.tabs.sendMessage(
            tab.id,
            { area: "tweet", url: tab.url, title: tab.title },
            function(response){
                if(response === undefined){ alert("今は利用できません。");}
            }
        );
        window.close();
    };
    
    document.getElementById("copy").onclick=function(){
        chrome.tabs.sendMessage(
            tab.id,
            { area: "copy", url: tab.url, title: tab.title },
            function(response){
                if(response === undefined){ alert("今は利用できません。");}
            }
        );
        window.close();
    };
};
setShareLinks();

function socialWindowScreen(url){

    var left = (screen.width - 570)/2;
    var top = (screen.height - 570)/2;


    var params = "menubar=no,toolbar=no,status=no,width=570,height=570,top=" + top + ",left=" +left;

        window.open(url,"NewWindow",params);

}



function setShareLinks(){
    var pageUrl = encodeURIComponent(document.URL);
    var tweet = encodeURIComponent($("meta[property='og:description']").attr("content"));

    $(".socialshare.facebook").on("click",function(){
        url = "https://www.facebook.com/sharer.php?u=" +pageUrl;
        socialWindowScreen(url);
    })
    $(".socialshare.twitter").on("click",function(){
        url = "https://www.twitter.com/intent/tweet?url=" +pageUrl + "&text=" + tweet;
        socialWindowScreen(url);
    })
    $(".socialshare.linkedin").on("click",function(){
        url = "https://www.linkedin.com/shareArticle?mini=true&url=" +pageUrl;
        socialWindowScreen(url);
    })
    $(".socialshare.instagram").on("click",function(){
        url = "https://www.instagram.com/sharer.php?u=" +pageUrl;
        socialWindowScreen(url);
    })
}


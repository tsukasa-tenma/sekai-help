$(function () {
    window.onhashchange = function () {
        console.log("hash changed")
        loadPage();
    };
    loadPage();
});

async function loadPage() {
    // Load from hash
    let hash = window.location.hash.substr(1);
    console.log(hash);
    try {
        let contents = await $.ajax(`articles/${hash}.txt`);
        let articleContents = contents.split("===")[1];
        let converter = new showdown.Converter();
        let html = converter.makeHtml(articleContents);
        $("#contents").html(html);
        $("#contents").show();
        $("#default").hide();
    } catch (error) {
        console.log(error);
        $("#contents").hide();
        $("#default").show();
    }
}

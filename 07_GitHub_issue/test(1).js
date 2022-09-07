window.onload = function () {

    // 这里拿到页面的 url ，你可以在控制台上找个网站执行一下 window.location.href
    const href = window.location.href;

    if (href.includes('issueEdit')) {
        document.getElementById('新建issue区域id').style.display = 'none';
        const issueContent =  getIssueInfo();

        // 这里拿到了 issue 的内容，就可以将其中的文本内容显示到页面上去了
    }

    if (href.includes('issueCreate')) {
        document.getElementById('编辑issue区域id').style.display = 'none';
    }
}

function getIssueInfo () {
    // 这里调用获取 issue 内容的接口拿到 issue 的内容
    // return issueContent;
}
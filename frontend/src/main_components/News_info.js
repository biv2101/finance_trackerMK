let str;
await fetch("/news/coindesk").then((res) => res.text())
            .then((text) => {
                str = JSON.parse(text);
            });
export const NewsData=JSON.parse(str);
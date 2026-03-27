// (async () => {
    // let a = await fetch("https://randomuser.me/api/");
    // let res = await a.json();
    // console.log(res);
// })();

let abcd = async function c(link) {
    let fetchlink = await fetch(link);
    let result = await fetchlink.json();
    const {title, first, last } = result.results[0].name;
    console.log(`${title} ${first} ${last}`);
    
}

abcd("https://randomuser.me/api/");
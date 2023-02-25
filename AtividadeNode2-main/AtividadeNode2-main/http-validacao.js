import fetch from "node-fetch";

async function checaStatus(arrayURL){
    const arrayStatus = await Promise.all(arrayURL.map(async url => {
        const res = await fetch(url)
        return res.status;
    }))
    return arrayStatus;
}

function geraArrayDeURl(arrayLinks){
    return arrayLinks.map(ObjectLink =>Object.values(ObjectLink).join());
}

async function validaURL (arrayLinks){
    const links = geraArrayDeURl(arrayLinks);
    const statusLinks = await checaStatus(links);
    return statusLinks;
}

export default validaURL;

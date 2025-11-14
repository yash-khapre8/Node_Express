import { response } from "express";

function fetchpage(page) {
    return fetch(`https://jsonplaceholder.typicode.com/todos/1'`)
    .then(response => response.json());

}
async function runManyPages(totalPage) {
    try {
        for( let i=1;i<= totalPage; i++){
            const data = await fetchpage(i);
            console.log(`page ${i}: `,data);
            
        }
    } catch (err) {
        console.error("error fetching data:",err)
    }
}

runManyPages(10);

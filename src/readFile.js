import {readFile} from 'fs';

readFile('src/data.txt','utf8',(err,data)=>{
    if(err){
        console.error('Error reading file:', err);
        return;
    }
    console.log('File contents:', data);
})


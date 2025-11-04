try {
    const data = fstat.readFileSync('data.txt', 'utf8');
    console.log('File contents :', data);
} catch (err) {
    console.error('Error reading file:', err);
}

fstat.rename('data.txt', 'datatwo.txt', (err) => {
    if (err) {
        console.error('Error renaming file:', err);
        return;
    }
    console.log('File renamed successfully');
});

try {
    fstat.renameSync('datatwo.txt', 'newname.txt');
    console.log('File renamed successfully');
} catch (err) {
    console.error('Error renaming file:', err);
}
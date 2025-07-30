//condizione per visualizzare il parametro passato solo se esiste esiste
if (process.argv[2]) {
    console.log(process.argv[2]);

} else {
    console.log('Non hai iserito nessun parametro');
}
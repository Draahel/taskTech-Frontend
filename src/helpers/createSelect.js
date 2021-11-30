export const createSelect = ( data ) =>{
    const options = [];
    function Option(value, label) {
        this.value = value;
        this.label = label;
    }
    for (const key in data) {
        options.push( new Option( data[key]._id, data[key].name+" - "+data[key].nIdent ) )
    }
    return options;
}
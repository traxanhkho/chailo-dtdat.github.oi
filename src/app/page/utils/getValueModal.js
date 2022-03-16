
export const getValueModal = (products) => {

    const randomId = (products) => {
        if(products[0]){
            let i = 0;
        let id = Math.floor(Math.random() * 100 + 1);
        while (products[i]._id === id && i < products.length) {
            ++i;
            id = Math.floor(Math.random() * 100 + 1);
        }
        return id.toString();
        }
        return '01' ;
    }

    const value = {
        _id: randomId(products),
        title: document.querySelector('input[name="title"]').value,
        content: document.querySelector('input[name="content"]').value,
        // how to get value of the input field kind of type="file" ? 
        // image: document.querySelector('#image_input').value,
    }

    return value;
}
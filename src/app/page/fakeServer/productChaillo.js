import imgChailo1 from "./image-temp/image.png";
import imgChailo2 from "./image-temp/chailo2.png";
import imgChailo3 from "./image-temp/chailo3.png";
import imgChailo4 from "./image-temp/chailo4.png";

const products = [{
        _id: "e1815",
        img: imgChailo1,
        title: "HŨ ĐỰNG KEM CAO CẤP CHÂN KHÔNG 15GR,30GR,50GR",
        price : 3200 ,  
        content : "BHA Obagi Clenziderm MD Pore Therapy 148ml là dòng toner cao cấp dưỡng da, sản phẩm đến từ thương hiệu Obagi nổi tiếng của Mỹ. Toner BHA Obagi 148ml hỗ trợ làm sạch sâu, hỗ trợ thu nhỏ lỗ chân lông, hỗ trợ da khỏe mạnh và rạng rỡ hơn.",
    },
    {
        _id: "5b6",
        img: imgChailo2,
        title: "CHAI LƯỚI,HŨ LƯỚI CAO CẤP 20GR,30GR",
        price : 3200 ,  
        content : " Serum Dưỡng Da Goodndoc Hydra B5 30ml là dòng sản phẩm Serum dưỡng da cao cấp đến từ thương hiệu Goodndoc nổi tiếng. Với thành phần lành tính Goodndoc Hydra B5 hỗ trợ dưỡng da trẻ đẹp, rạng rỡ hơn.",
    },
    {
        _id: "53e7",
        img: imgChailo3,
        title: "HŨ KEM NHỰA CAO CẤP DÁNG VUÔNG NẮP MẠ VÀNG 20GR,30GR",
        price : 3200 ,  
        content : "  Serum Hỗ Trợ Giảm Nhăn, Mờ Đốm Nâu, Săn Mịn Lancôme Rénergie H.C.F. Triple Serum 50ml là dòng sản phẩm cao cấp đến từ thương hiệu Lancôme nổi tiếng. Với các thành phần lành tính Lancôme Rénergie H.C.F ",
    },
    {
        _id: "d479",
        img: imgChailo4,
        title: "CHAI NHỰA PET TRẮNG SỨ NẮP VÒI NHẤN CAO CẤP 100ML,150ML,200ML",
        price : 3200 ,  
        content : ", Cocoon rất vinh dự khi là thương hiệu mỹ phẩm Việt Nam đầu tiên được chấp thuận bởi chương trình Leaping Bunny của tổ chức Cruelty Free International trong việc cam kết không thử nghiệm trên động vậ ",
    },
    {
        _id: "581a",
        img: imgChailo1,
        title: "Chai xịt mũi có vòi dung tích 25ml",
        price : 3200 ,  
        content : " chai bi lăn, Chai c, Cocoon rất vinh dự khi là thương hiệu mỹ phẩm Việt Nam đầu tiên được chấp thuận bởi chương trình Leaping Bunny của tổ chức Cruelty Free International trong việc cam kết không thử nghiệm trên động vậ Chai lọ chiết mỹ phẩm, Chai lọ đựng mỹ phẩm, chai lọ mỹ phẩm, chai lọ nhôm đựng mỹ phẩm, chai lọ thủy tinh, chai nước hoa vai vuông, ",
    },
    {
        _id: "478b",
        img: imgChailo2,
        title: "CHAI TINH DẦU,SERUM THỦY TINH NÂU KHOEN BẠC MỜ,BẠC BÓNG 5ML,10ML,15ML,20ML,30ML,50ML,100ML",
        price : 3200 ,  
        content : " Kem Dưỡng Da Rau Má GoodnDoc Centella Repair Cream 50ml là dòng sản phẩm cao cấp đến từ thương hiệu Goodndoc nổi tiếng. Với thành phần lành tính GoodnDoc Centella Repair Cream hỗ trợ phục hồi dưỡng da sáng khỏe, tự nhiên hơn. ",
    },
    {
        _id: "181e",
        img: imgChailo3,
        title: "CHAI SERUM TINH DẦU THUỶ TINH TRẮNG TRONG NẮP XOÁY VÀNG 5ML,10ML,15ML,20ML,30ML,50ML,100ML",
        price : 3200 ,  
        content : " , Cocoon rất vinh dự khi là thương hiệu mỹ phẩm Việt Nam đầu tiên được chấp thuận bởi chương trình Leaping Bunny của tổ chức Cr ",

    },
    {
        _id: "5c1f",
        img: imgChailo4,
        title: "HŨ ĐỰNG YẾN THỦY TINH TRÒN NẮP THIẾT VÀNG,THIẾT ĐEN 75ML",
        price : 3200 ,  
        content : " Kem Dưỡng Da Rau Má GoodnDoc Centella Repair Cream 50ml là dòng sản phẩm cao cấp đến từ thương hiệu Goodndoc nổi tiếng. Với thành phần lành tính GoodnDoc Centella Repair Cream hỗ trợ phục hồi dưỡng da sáng khỏe, tự nhiên hơn. ",
    },
    {
        _id: "4721",
        img: imgChailo1,
        title: "CHAI LƯỚI,HŨ LƯỚI CAO CẤP 20GR,30GR",
        price : 3200 ,  
        content : " chai bi lăn, Chai chiết nước hoa, chai dầu gội sữa tắm, Chai đựng dầu gội sữa tắm, chai đựng nước hoa, chai đựng nước hoa cao cấp, chai đựng toner lotion, Chai lọ chiết mỹ phẩm, Chai lọ đựng mỹ phẩm, chai lọ mỹ phẩm, chai lọ nhôm đựng mỹ phẩm, chai lọ thủy tinh, chai nước hoa vai vuông, ",
    },
    {
        _id: "d48e",
        img: imgChailo2,
        title: "CHAI SERUM TINH DẦU THUỶ TINH TRẮNG TRONG NẮP XOÁY VÀNG 5ML,10ML,15ML,20ML,30ML,50ML,100ML",
        price : 3200 ,  
        content : " Serum Dưỡng Da Goodndoc Hydra B5 30ml là dòng sản phẩm Serum dưỡng da cao cấp đến từ thương hiệu Goodndoc nổi tiếng. Với thành phần lành tính Goodndoc Hydra B5 hỗ trợ dưỡng da trẻ đẹp, rạng rỡ hơn ",

    },
    {
        _id: "781f",
        img: imgChailo3,
        title: "HŨ ĐỰNG YẾN THỦY TINH TRÒN NẮP THIẾT VÀNG,THIẾT ĐEN 75ML",
        price : 3200 ,  
        content : " chai bi lăn, Chai chiết nước hoa, chai dầu gội sữa tắm, Chai đựng dầu gội sữa tắm, chai đựng nước hoa, chai đựng nước hoa cao cấp, chai đựng toner lotion, Chai lọ chiết mỹ phẩm, Chai lọ đựng mỹ phẩm, chai lọ mỹ phẩm, chai lọ nhôm đựng mỹ phẩm, chai lọ thủy tinh, chai nước hoa vai vuông, ",
    },
    {
        _id: "821t",
        img: imgChailo4,
        title: "CHAI LƯỚI,HŨ LƯỚI CAO CẤP 20GR,30GR",
        price : 3200 ,  
        content : " Serum Dưỡng Da Goodndoc Hydra B5 30ml là dòng sản phẩm Serum dưỡng da cao cấp đến từ thương hiệu Goodndoc nổi tiếng. Với thành phần lành tính Goodndoc Hydra B5 hỗ trợ dưỡng da trẻ đẹp, rạng rỡ hơn",
    }
];

export function getProducts() {
    return products;
}

export function saveProduct(product){
    let productInDb = products.find(p => p._id === product._id) || {} ; 
    productInDb.title = product.title ; 
    productInDb.content = product.content ; 

    if(!productInDb._id){
        productInDb._id = Date.now().toString() ; 
        products.push(productInDb) ; 
    }

    return productInDb ; 
}

const customers = [
    {
        _id : "cus13",
        name : "Lĩnh beautiful girl" , 
        number_phone : '0392312345' , 
        list_order : [] ,
        address : 'phuoc long - nha trang' , 
    },
    {
        _id : "cus1343",
        name : "users A" , 
        number_phone : '0392312345' , 
        list_order : [] ,
        address : 'phuoc long - nha trang' , 
    },
    {
        _id : "cus122343",
        name : "Tuyến Ok" , 
        number_phone : '0392312345' , 
        list_order : [] ,
        address : 'phuoc long - nha trang' , 
    },
    {
        _id : "cus823",
        name : "Dat G" , 
        number_phone : '0392312345' , 
        list_order : [] ,
        address : 'phuoc long - nha trang' , 
    },
    {
        _id : "cus923",
        name : "abcd" , 
        number_phone : '0392312345' , 
        list_order : [] ,
        address : 'phuoc long - nha trang' , 
    },
    {
        _id : "cus2923",
        name : "nothing 111" , 
        number_phone : '0392312345' , 
        list_order : [] ,
        address : 'phuoc long - nha trang' , 
    },
    {
        _id : "cus1993",
        name : "ten user" , 
        number_phone : '0392312345' , 
        list_order : [] ,// abstraction . 
        address : 'phuoc long - nha trang' , 
    },
] ; 

export function getCustomers () {
    return customers  ; 
}

const orders = [
    {
        _id: 'order1' , 
        customer : "customersID" ,
        products : "productsID" , 
        date : '1-2-2022 - 2h30' , 
        state : 'success'
    },
    {
        _id: 'order2' , 
        customer : "customersID" ,
        products : "productsID" , 
        date : '1-2-2022 - 2h30' , 
        state : "success"
    },
    {
        _id: 'order3' , 
        customer : "customersID" ,
        products : "productsID" , 
        date : '1-2-2022 - 2h30' , 
        state : "success"
    },
    {
        _id: 'order4' , 
        customer : "customersID" ,
        products : "productsID" , 
        date : '1-2-2022 - 2h30' , 
        state : "success"
    },
    {
        _id: 'order5' , 
        customer : "customersID" ,
        products : "productsID" , 
        date : '1-2-2022 - 2h30' , 
        state : "success"
    },
    {
        _id: 'order6' , 
        customer : "customersID" ,
        products : "productsID" , 
        date : '1-2-2022 - 2h30' , 
        state : "success"
    },
    {
        _id: 'order7' , 
        customer : "customersID" ,
        products : "productsID" , 
        date : '1-2-2022 - 2h30' , 
        state : "success"
    },
    {
        _id: 'order8' , 
        customer : "customersID" ,
        products : "productsID" , 
        date : '1-2-2022 - 2h30' , 
        state : "success"
    },
]

export function getOrders () {
    return orders  ; 
}

const forms = [{
        _id: '5fb5233v37',
        img: imgChailo1,
        name: 'Họ và tên',
        placeholder: 'Nhập họ và tên ...',
        type: 'name'
    },
    {
        _id: '5fb5233v36',
        img: imgChailo2,
        name: 'Số điện thoại',
        placeholder: 'Nhập số điện thoại',
        type: 'number'
    },
    {
        _id: '5fb5233v35',
        img: imgChailo3,
        name: 'Tỉnh/ Thành Phố',
        placeholder: 'chọn tỉnh/thành phố',
        type: 'address'
    },
    {
        _id: '5fb5233v34',
        img: imgChailo4,
        name: 'Quận/ Huyện',
        placeholder: 'Chọn Quận/huyện',
        type: 'address'
    },
    {
        _id: '5fb5233v33',
        img: imgChailo1,
        name: 'Xã/Phường',
        placeholder: 'chọn Xã/ phường',
        type: 'address'
    },
    {
        _id: '5fb5233v32',
        img: imgChailo2,
        name: 'địa chỉ cụ thể',
        placeholder: 'VD: 2a Lương Thế Vinh,Phước Long,Nha Trang,...',
        type: 'text'
    },
    {
        _id: '5fb5233v31',
        img: imgChailo3,
        name: 'Tên sản phẩm',
        placeholder: 'Nhập tên sản phẩm ...',
        type: 'text'
    },
    {
        _id: '5fb5233v30',
        img: imgChailo4,
        name: 'Số lượng',
        placeholder: 'Nhập số lượng ...',
        type: 'number'
    },
];

export function getForms() {
    return forms;
}
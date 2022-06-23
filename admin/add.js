var data = [];
function add(){





    let item_id = document.getElementById("id").value;
    let item_name = document.getElementById("name").value;
    let item_khachhang = document.getElementById("khachhang").value;
    let item_phone = document.getElementById("sdt").value;
    let item_address = document.getElementById("address").value;


    var item = { 
       Id:item_id,
       Name:item_name,
       Khachhang:item_khachhang,
       Phone:item_phone,
       Address:item_address
    }

    let index = data.findIndex((c) => c.Id == item.Id)

    if(index >= 0)
    {
        data.splice(index,1,item)
    }
    else
    {
        data.push(item)
    }

    render()
    clear()
}
    function render(){
        table = `<tr>
        <th>Mã Sản Phẩm</th>
        <th>Tên Sản Phẩm</th>
        <th>Tên Khách Hàng</th>
        <th>Số Điện Thoại</th>
        <th>Địa chỉ</th>
        <th>Chức Năng</th>
      </tr>`
      for(let i= 0;i<data.length;i++){
        table +=`<tr>
        <td>${data[i].Id}</td>
        <td>${data[i].Name}</td>
        <td>${data[i].Khachhang}</td>
        <td>${data[i].Phone}</td>
        <td>${data[i].Address}</td>


        <th> <button onclick = "DeleteItem(${data[i].Id})">Delete</button> </th>
        <th> <button onclick = "EditItem(${data[i].Id})">Edit</button> </th>

        
      </tr>`
      }
      document.getElementById("render").innerHTML = table;
    }


    function clear()
    {
        document.getElementById("id").value = ""
        document.getElementById("name").value = ""
        document.getElementById("khachhang").value = ""
        document.getElementById("sdt").value = ""
        document.getElementById("address").value = ""

        

    }
    function DeleteItem(x)
    {
        for(let i = 0;i<data.length;i++){
            if(data[i].Id == x){
                data.splice(i,1)
                render()
            }
                
        }
    }
    function EditItem(index)
    {
        for(let i = 0;i<data.length;i++){
            if(data[i].Id == index){
                document.getElementById("id").value = data[i].Id
               document.getElementById("name").value = data[i].Name
               document.getElementById("khachhang").value = data[i].Khachhang
               document.getElementById("sdt").value = data[i].Phone
               document.getElementById("address").value = data[i].Address

               
            }
                
        }
    }

// ---- xác nhận đăng nhập ---

accounts = {
    "userGuest": [
        {
            "username":"Vuvietanh",
            "password":"admin"
        },
        {
            "username":"huugo",
            "password":"admin"
        }
    ]
}

function login(){
var username = document.getElementById("username").value
var password = document.getElementById("password").value
var check  = false
accounts["userGuest"].map((account) =>{
    if(username == account.username && password == account.password) {
        check = true
    }
})
    if (check ){
        window.location.assign("http://127.0.0.1:5500/admin/trangchinh.html")
    }
    else{
        alert("Đăng nhập thất bại")
    }
}

    




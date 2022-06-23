var data = [];
function add(){





    let item_matintuc = document.getElementById("matintuc").value;
    let item_tieude = document.getElementById("tieude").value;
    let item_ngaydang = document.getElementById("ngaydang").value;
    let item_noidung = document.getElementById("noidung").value;



    var item = { 
        Matintuc:item_matintuc,
        Tieude:item_tieude,
        Ngaydang:item_ngaydang,
        Noidung:item_noidung,
   
    }

    let index = data.findIndex((c) => c.Matintuc == item.Matintuc)

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
        table = ` <tr>
        <th>Mã Tin tức</th>
        <th>Tiêu đề</th>
        <th>Ngày đăng</th>
        <th>Nội Dung</th>
        <th>Chức Năng</th>
      </tr>`
      for(let i= 0;i<data.length;i++){
        table +=`<tr>
        <td>${data[i].Matintuc}</td>
        <td>${data[i].Tieude}</td>
        <td>${data[i].Ngaydang}</td>
        <td>${data[i].Noidung}</td>


        <th> <button onclick = "DeleteItem(${data[i].Matintuc})">Delete</button> </th>
        <th> <button onclick = "EditItem(${data[i].Matintuc})">Edit</button> </th>

        
      </tr>`
      }
      document.getElementById("render").innerHTML = table;
    }


    function clear()
    {
        document.getElementById("matintuc").value = ""
        document.getElementById("tieude").value = ""
        document.getElementById("ngaydang").value = ""
        document.getElementById("noidung").value = ""

        

    }
    function DeleteItem(x)
    {
        for(let i = 0;i<data.length;i++){
            if(data[i].Matintuc == x){
                data.splice(i,1)
                render()
            }
                
        }
    }
    function EditItem(index)
    {
        for(let i = 0;i<data.length;i++){
            if(data[i].Matintuc == index){
                document.getElementById("matintuc").value = data[i].Matintuc
               document.getElementById("tieude").value = data[i].Tieude
               document.getElementById("ngaydang").value = data[i].Ngaydang
               document.getElementById("noidung").value = data[i].Noidung

               
            }
                
        }
    }

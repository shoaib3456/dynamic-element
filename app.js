let CreateTable =document.getElementById('CreateTable')
let container =document.getElementById('container')
let inputClas = document.querySelector('.inputClass')
let fetch = document.getElementById('fetch')

tablecol=['Remove','Employee Name','Designation','Age']

function removerow(val){
    val.parentElement.parentElement.remove()
    submit()
}


// To fetch input values on DOM
function submit(){
    fetch.innerText=""
    for(let rowcount=1;rowcount<table.rows.length;rowcount++){
        for (let cellcount=1 ; cellcount<4; cellcount++){
            fetch.innerText=fetch.innerText+" "+table.rows[rowcount].cells[cellcount].firstElementChild.value;
         }
         let br=document.createElement('br');
         fetch.appendChild(br)
    }
}


// To Creating a table Dynamically 
CreateTable.onclick =function(){
    // To creating new rows
    if(CreateTable.innerText=="Click To Add New Row"){
        data_tr =document.createElement('tr')
        table.appendChild(data_tr)
        remove_table_td=document.createElement('td')
        remove_btn = document.createElement('button')
        remove_btn.setAttribute('onclick','removerow(this)')
        remove_btn.setAttribute('class','remove-btn')
        remove_btn.innerText="Remove"
        remove_table_td.appendChild(remove_btn)
        data_tr.appendChild(remove_table_td)

        // Creating a input rows
        for(let r=0;r<3;r++){
            input_td=document.createElement('td')
            inputs =document.createElement('input')
            inputs.setAttribute('class','inputClass')
            input_td.appendChild(inputs)
            data_tr.appendChild(input_td)
        }
    }



    // To Creating table
    if (CreateTable.innerText=="Create Table"){
        table=document.createElement('table');
        table.setAttribute('id','mytable')
        container.appendChild(table)
        tr=document.createElement('tr')
        table.appendChild(tr)


        for(let x=0;x<tablecol.length;x++){
            th=document.createElement('th')
            th.innerText=tablecol[x]
            tr.appendChild(th)
        }
        CreateTable.innerText="Click To Add New Row"

        // To Creating a submit button
        let submit_btn  = document.createElement('button')
        submit_btn.innerText="Submit"
        submit_btn.setAttribute('onclick','submit()')
        container.appendChild(submit_btn)
    } 
}



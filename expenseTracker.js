
function handleFormSubmit(event){
    let count=Date.now();
    event.preventDefault();

    //catching input elements
    const exp_amt=document.querySelector("#exp_amt");
    const exp_description=document.querySelector("#exp_des");
    const exp_category=document.querySelector("#exp_cat");
  
    

    //creating li element to append to form 
    const li=document.createElement("li");
    li.id=count;

    //putting value inside li using innerHtml function
    li.innerHTML+=exp_amt.value+" "+exp_description.value+" "+ exp_category.value+" "+"<button type='button' class='del-btn'>Delete</button>"
    + " "+"<button type='button' class='edit-btn'>Edit</button>";

    //catching ul element 
    const ul=document.querySelector("ul");

    //append li to ul 
    ul.appendChild(li);

    //putting the information in localStorage
    //first storing the values as obj
    const expenseAmt=event.target.exp_amt.value;
    const expenseDes=event.target.exp_des.value;
    const expenseCat=event.target.exp_cat.value;
   
    let myobj={
        exp_amt1:expenseAmt,
        exp_description1:expenseDes,
        exp_category1:expenseCat,
       
    }

    //converting the obj to string to store in local storage
    let myobj_serialized=JSON.stringify(myobj);

   
    //storing the string data in localStorage
    localStorage.setItem(count, myobj_serialized);

    
    //attaching a event listener to Delete Button for delete functionality
    const delBtn=document.querySelectorAll(".del-btn");
    for(let i=0;i<delBtn.length;i++)
    {
    delBtn[i].addEventListener("click",(event)=>{
    const li_to_del=event.target.parentElement;
    ul.removeChild(li_to_del); 

    //removing the item from localStorage
    localStorage.removeItem(count)
    })
    }
    //edit functionality

    //attaching a event listener to Edit Button for Edit functionality
    const edtBtn=document.querySelectorAll(".edit-btn");
    //fillimg the input fields again
   
   
    for(let i=0;i<delBtn.length;i++)
    {
    edtBtn[i].addEventListener("click",(event)=>{
        const li_to_edit = event.target.parentElement;
    const [expAmt, expDes, expCat] = li_to_edit.textContent.split(" ").filter(Boolean);
    
        exp_amt.value=expAmt;
        exp_description.value=expDes;
        exp_category.value=expCat;
    ul.removeChild(li_to_edit); 

    //removing the item from localStorage
    localStorage.removeItem(count);
    
})
    }


    }


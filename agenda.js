(function (){

    var ui={

        fields:document.querySelectorAll("input"),
        buttom:document.querySelector(".pure-button"),
        table:document.querySelector("table tbody")



    
    };
    //actions
    var cleanFields=()=> ui.fields.forEach(field=>field.value="");

    var genericError=function(){};
    var validateFields=function(e){
        e.preventDefault();
        var errors=0;
        var contact={};
        console.log(ui.fields);

        ui.fields.forEach(function(field){
            if (field.value.trim().length===0){
                field.classList.add("error");
                errors++;
            } else {
                field.classList.remove("error");
                contact[field.id]=field.value.trim();
            }
        })

        console.log(errors,contact);

        if (errors>0){
            document.querySelector(".error").focus();
        } else {
            addContact(contact);
        }

    };

    var addContact=function(contact){
        var endpoint="http://localhost:3000/schedule";
        var config={
            method:"POST",
            body:JSON.stringify(contact),
            headers:new Headers({
                "content-type":"application/json"
            })
        }

        fetch(endpoint,config)
        .then(cleanFields)
        .then(getContacts)
        .catch(genericError);
    };



    var getContacts=function(){
        var endpoint="http://localhost:3000/schedule";
        var config={
            method:"GET",
            
            headers:new Headers({
                "content-type":"application/json"
            })
        }

        fetch(endpoint,config)
        .then(function(response){return response.json()})
        .then(getContactsSuccess)
        .catch(genericError);
    };

    var removeContact=function(){};

    var getContactsSuccess=function(contacts){
        var tableRows=[];
        contacts.forEach(function(contact){
            tableRows.push(`
                <tr>
                    <td>${contact.id}</td>
                    <td>${contact.name}</td>
                    <td>${contact.email}</td>
                    <td>${contact.phone}</td>
                </tr>          
            
            `)
        })
        
        ui.table.innerHTML=tableRows.join("");
        
    }

    var init=function(){

        //adds events
        ui.buttom.onclick=validateFields;
        getContacts();
       

    }();

    console.log(ui);

    
})();
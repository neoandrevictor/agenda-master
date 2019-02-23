(function (){

    var ui={

        fields:document.querySelectorAll("input"),
        buttom:document.querySelector(".pure-button"),
        table:document.querySelector("table")



    
    };
    //actions

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

        fetch(endpoint,config);
    };

    var getContacts=function(){};

    var removeContact=function(){};

    var init=function(){

        //adds events
        ui.buttom.onclick=validateFields;
       

    }();

    console.log(ui);

    
})();
$( document ).ready(function() {

});

function deleterow(num,cid){
        /*$("#ord"+num).hide();
        oid = document.getElementById("id"+num).innerHTML;
        pname = document.getElementById("Pid"+num).innerHTML;
        qty = document.getElementById("Qty"+num).innerHTML;
        alert("Deleting Oid=" + oid + " Pname=" + pname + " qty=" + qty);*/
        $.ajax({
            url : "http://www.google.com",
            type: "GET",
            /*data : {csrfmiddlewaretoken: document.getElementsByName('csrfmiddlewaretoken')[0].value,
                    oid = document.getElementById("id"+num).innerHTML;
                    },*/
            success: function( oid ){
                alert("Successfully deleted order " + oid);
                },
             error: function(xhr, textStatus, errorThrown) {
                alert("Please report this error: "+errorThrown+xhr.status+xhr.responseText);
                }
            });
     };
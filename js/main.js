$(document).ready(function(){
    $("#search_btn").click(getTransactions);

})

function getTransactions(){

    var address = $("#address").val();
    var fromBlock = $("#fromBlock").val();
    var toBlock = $("#toBlock").val();
    //console.log(address);

    $.ajax({
        url : "https://api.etherscan.io/api?module=account&action=txlist&address="+address+"&startblock="+fromBlock+"&endblock="+toBlock+"&sort=asc&apikey=PKIUS1NISTA3HUV7BS25VE44VP9AHQUZK1",
        method : "POST",
        dataType : "JSON",
        success : function(data, textStatus, xhr){
            console.log(data);
            transaction_list(data);
        },
        error : function(err){
            console.log(err);
        }
    })
}


function transaction_list(data){

    // function cutStrings(string){
    //     var done = string.substring(0, 20) + "...";
    //     return done;
    // };

    var content = `<table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Block hash</th>
                                <th scope="col">Block number</th>
                                <th scope="col">From wallet</th>
                                <th scope="col">To wallet</th>
                                <th scope="col">Value</th>
                            </tr>
                        </thead>
                    <tbody>`;
    var num = 1;
    data.result.forEach(function(t) {
      
        
        //Modifying value before entering
        var val = t.value;
        if(val.length<19){
            var br = 19-val.length;
            for(var i = 0; i<br; i++){
                val = "0"+val;
            }
        }
        var a = val.substring(val.length-18, val.length);
        var b = val.substring(0, val.length-18);
        var valDone = b + "." + a;
        //console.log(valDone);
        content += `
                            <tr>
                                <td>${num++}</td>
                                <td><a href="#"><p>${t.blockHash}</p></a></td>
                                <td>${t.blockNumber}</td>
                                <td><p>${t.from}</p></td>
                                <td><p>${t.to}</p></td>
                                <td><p>${valDone}</p></td>
                            </tr>`
        
    });

    content += `</tbody>
                    </table>
                </div>`;

    $("#list_transaction").html(content);

    $("#list_transaction tbody tr td a").click(function(){
        var tHash = $(this).find("p").html();

        data.result.forEach(function(t){
            if(t.blockHash == tHash){
                console.log(t);
            }
        })

        
    })
    // $("#list_transaction tbody tr").click(function(){
    //      console.log($(this).find("td").html());
    //  })

    // $("#list_transaction table").delegate("tr.rows", "click", function(){
    //     console.log($(this));
    // });

    // $("#list_transaction table tr").click(function(){
    //     $(this).find("td").each(function(){
    //         console.log($(this).html());
    //     });
    // });
}
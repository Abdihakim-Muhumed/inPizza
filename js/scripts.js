//back-end

function Pizza(size,flavour,crusts){
    this.size=size;
    this.flavour=flavour;
    this.crust=crusts;  
}

//front-end
var numberOfPizza=1;
var totalCost=0;
var deliveryCost=0;
$(document).ready(function(){   
    $("#order").click(function(){
        $("#to-hide").hide();
        var size=$("input[name='size']:checked").val();
        var flavour = $("input[name='flavour']:checked").val();
        var crusts = $("input[name='crusts']:checked").val();       
        var initialCost,toppingsCost,crustCost,newPizza;             
        if($("input[name='size']:checked").val()==="Regular"){
             initialCost = 500;
            if($("input[class='toppings']:checked").val().length >0){
                 toppingsCost = 50;               
            }
            else{
                toppingsCost=0;
            }
           
        }
        else if($("input[name='size']:checked").val()==="Medium"){
             initialCost = 700;
            if($("input[class='toppings']:checked").val().length >0){
                 toppingsCost = 100;
                
            }
            else{
                toppingsCost=0;
            }
           
        }
        else if($("input[name='size']:checked").val()==="Large"){
            initialCost = 900;
            if($("input[class='toppings']:checked").val().length >0){
                 toppingsCost = 150;
                
            }
            else{
                toppingsCost=0;
            }
            
        }
        else if($("input[name='size']:checked").val()==="Mega"){
             initialCost = 1100;
            if($("input[class='toppings']:checked").val().length >0){
                toppingsCost = 200;
                
            }
            else{
                toppingsCost=0;
            }
            
        }
        if($("input[id='crispy']:checked").val().length >0){
            crustCost=200;
        }         
        else{
            if($("input[id='stuffed']:checked").val().length >0){
                crustCost=300;
            }
            else{
                if($("input[id='gluten-free']:checked").val().length >0){
                    crustCost=400;
                }
                else{crustCost=0;}
            }
        }
      
        var price = initialCost+crustCost+toppingsCost;
        
        newPizza = new Pizza(size,flavour,crusts);
        $(".order-form").show();
        $("#order-size").append(newPizza.size);
        $("#flavour").append(newPizza.flavour);
        $("#crusts").append(newPizza.crust);
        $("#initial-cost").append(initialCost);
        $("#crust-cost").append(crustCost);       
        $("#toppings-cost").append(toppingsCost);
        $("#pizza-cost").append(price);
        
        $("#deliver").last().click(function(){
            deliveryCost=100;
            $(".location").show();                      
        });
        $("#confirm").click(function(){
            numberOfPizza=$("#pizza-number").val();
            totalCost=(price*numberOfPizza)+deliveryCost;
            if($("#location").val().length<0){              
                alert("Enter valid location!");
            }
            else{                
                alert("Your order will be delivered to "+ $("#location").last().val());
                alert(" Order placed Total charges:" +totalCost );
            }
            $(".history").show();
            $(".order-form").hide();
            $("#order-name").append(`<p>Pizza</P>`);
            $("#order-delivery").append($("#location").last().val());
            $("#order-cost").append(totalCost);
            $("#reload").click(function(){
                alert("Thanks for the feedack");
                location.reload(true);
            })
        });        
    });
    
});
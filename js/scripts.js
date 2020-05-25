//back-end
function Order(numberOfPizza,type,location,totalCost){
    this.pizzas=numberOfPizza;
    this.type= type;
    this.location=location;
    this.totalCost=totalCost;
}
function Pizza(size,flavour,crusts,toppings){
    this.size=size;
    this.flavour=flavour;
    this.crust=crusts;
    this.toppings=toppings;
   
}

//front-end
$(document).ready(function(){
    alert("yow1");
    $("#order").click(function(){
        var size=$("input[name='size']:checked").val();
        var flavour = $("input[name='flavour']:checked").val();
        var crusts = $("input[name='crusts']:checked").val();
        var toppings = $("input[class='toppings']:checked").val();
        var initialCost,toppingsCost,crustCost,newPizza;      
       
        if($("input[name='size']:checked").val()==="Regular"){
             initialCost = 500;
            if($("input[class='toppings']:checked").val().length >0){
                 toppingsCost = 50;               
            }
            else{
                toppingsCost=0;
            }
            if($("input[class='classic']:checked").val().length >0){
                 crustCost=200;
            }  
            else if($("input[class='median']:checked").val().length >0){
                 crustCost=300;
            }
            else if($("input[class='median']:checked").val().length >0){
                 crustCost=400;
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
            if($("input[class='classic']:checked").val().length >0){
                 crustCost=200;
            }  
            else if($("input[class='median']:checked").val().length >0){
                 crustCost=300;
            }
            else if($("input[class='median']:checked").val().length >0){
                 crustCost=400;
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
            if($("input[class='classic']:checked").val().length >0){
                 crustCost=200;
            }  
            else if($("input[class='median']:checked").val().length >0){
                 crustCost=300;
            }
            else if($("input[class='median']:checked").val().length >0){
                 crustCost=400;
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
            if($("input[class='classic']:checked").val().length >0){
                 crustCost=200;
            }  
            else if($("input[class='median']:checked").val().length >0){
                 crustCost=300;
            }
            else if($("input[class='median']:checked").val().length >0){
                 crustCost=400;
            }
        }
        var price = initialCost+crustCost+toppingsCost;
        
         newPizza = new Pizza(size,flavour,crusts,toppings);
        $(".order-form").show();
        alert(newPizza);
        $("#order-size").append(newPizza.size);
        $("#flavour").append(newPizza.flavour);
        $("#crust").append(newPizza.crusts);
        $("#initial-cost").append(initialCost);
        $("crust-cost").append(crustCost);
        $("#toppings").append(newPizza.toppings);
        $("#toppings-cost").append(toppingsCost);
        $("#pizza-cost").append(price);

        $("#deliver").click(function(){
            $(".location").show();
        });
    });
    
});
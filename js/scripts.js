//back-end
function Order(size,flavour,crusts,toppings,numberOfPizza,type,location,totalCost){
    this.size=size;
    this.flavour=flavour;
    this.crust=crusts;
    this.toppings=toppings;
    this.pizzas=numberOfPizza;
    this.type= type;
    this.location=location;
    this.totalCost=totalCost;
}
//front-end
$(document).ready(){
    $("form.order-form").submit(function(){
        var size=$("input[name='size']:checked").val();
        var flavour = $("input[name='flavour']:checked").val();
        var crusts = $("input[name='crusts']:checked").val();
        var toppings = $("input[name='toppings']:checked").val();
        var numberOfPizza = $("#number-pizza").val();
        var type = $("input[name='type']:checked").val();
        var location = $("#location").val();
        if($("input[name='size']:checked").val()==="Regular"){
            var initialCost = 500;
            if($("input[name='toppings']:checked").val().length >0){
                var toppingsCost = 50;
                
            }
            else{
                toppingsCost=0;
            }
        }
        else if($("input[name='size']:checked").val()==="Medium"){
            var initialCost = 700;
            if($("input[name='toppings']:checked").val().length >0){
                var toppingsCost = 100;
                
            }
            else{
                toppingsCost=0;
            }
        }
        else if($("input[name='size']:checked").val()==="Large"){
            var initialCost = 900;
            if($("input[name='toppings']:checked").val().length >0){
                var toppingsCost = 150;
                
            }
            else{
                toppingsCost=0;
            }
        }
        else if($("input[name='size']:checked").val()==="Mega"){
            var initialCost = 1100;
            if($("input[name='toppings']:checked").val().length >0){
                var toppingsCost = 200;
                
            }
            else{
                toppingsCost=0;
            }
        }
        
        if($("input[name='type']:checked").val()=="Deliver"){
            var deliveryCost=100;
        }
        else{
            deliveryCost=0;
        }
        var totalCost = initialCost+toppingsCost+deliveryCost;
        
    });
}
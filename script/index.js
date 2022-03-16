const order = document.querySelector("#form");
const menu =document.querySelector("#food");
const show = document.querySelector(".show");
const items = document.querySelector(".items");
const reject = document.querySelector(".reject");
const ready = document.querySelector("#ready");
const marq = document.querySelector("marquee");

const date = new Date();
let hours = date.getHours();
console.log(hours)

order.addEventListener("submit",food_order);


function food_order(event){
    event.preventDefault();
    let fries = document.querySelector("#fries").checked;
    let burger = document.querySelector("#burger").checked;
    let nugget = document.querySelector("#nugget").checked;
    let cappuccino = document.querySelector("#cappuccino").checked;
    let coke = document.querySelector("#coke").checked;
    let latte = document.querySelector("#latte").checked;
    let espresso = document.querySelector("#espresso").checked;
    let sandwich = document.querySelector("#sandwich").checked;
     
    let meal = document.querySelector("#meal").checked;
    let chickenwrap = document.querySelector("#chickenwrap").checked;
  
   
    if(fries|| burger || nugget  || cappuccino  || coke  ||latte   || espresso|| sandwich || meal || chickenwrap){

        let checked_value = document.querySelectorAll(".check");
        let checked_array=[];
        for(let i=0;i<checked_value.length;i++){
            if(checked_value[i].checked){
                checked_array.push(checked_value[i].value);
                
            }
         }

         console.log("checked_array",checked_array)

         let status;
         if(hours>=24 || hours<=8){
             status= "close";
         }else{
             status="open";
         }
        let order_id = Math.floor(Math.random()*10000);
        menu.style.display="none";
        
        let food_promise = new Promise(function(resolve,reject){
            let time =Math.floor(Math.random() * 6000) +5000;
            
    
            if(status==="close"){
                reject("We are not taking orders right now!");
            }else{
                show.innerHTML = `<h3>Thanks for order</h3><p>Your order id is ${order_id}</p><p>Please Wait, We are processing your order</p>`;
                show.style.transform="scale(1)";
                setTimeout(function(){
                    resolve(checked_array);
                },time);
            }
        });
    
        food_promise.then(function (res){
            show.style.display="none";
            items.style.transform="scale(1)";
            ready.innerHTML = "<h2>Your order is ready</h2>";
            res.map(function(el){
                switch(el){
                    case "fries":
                        let div = document.createElement("div");

                        let img = document.createElement("img");
                        img.src="https://www.pngitem.com/pimgs/m/119-1193094_fries-png-french-fries-transparent-background-png-download.png";
                        let p = document.createElement("p");
                        p.innerText=`Order id : ${order_id}`;

                        div.append(img,p);
                        items.append(div);
                        break;
                    case "burger":
                        let div_burger = document.createElement("div");

                        let img_burger = document.createElement("img");
                        img_burger.src="https://static.toiimg.com/thumb/msid-83007708/83007708.jpg?width=500&resizemode=4";
                        let p_burger = document.createElement("p");
                        p_burger.innerText=`Order id : ${order_id}`;

                        div_burger.append(img_burger,p_burger);
                        items.append(div_burger);
                        break;
                    case "nuggets":
                        let div_nuggets = document.createElement("div");

                        let img_nuggets = document.createElement("img");
                        img_nuggets.src="https://static-ssl.businessinsider.com/image/5a31659e4aa6b51d008b4a1e-1960/chicken%20nuggets-2.jp2";
                        let p_nuggets = document.createElement("p");
                        p_nuggets.innerText=`Order id : ${order_id}`;

                        div_nuggets.append(img_nuggets,p_nuggets);
                        items.append(div_nuggets);
                        break;
                    case "cappuccino":
                        let div_cappuccino = document.createElement("div");

                        let img_cappuccino = document.createElement("img");
                        img_cappuccino.src="https://media-cdn.tripadvisor.com/media/photo-s/08/61/a5/35/gotta-love-a-beautiful.jpg";
                        let p_cappuccino = document.createElement("p");
                        p_cappuccino.innerText=`Order id : ${order_id}`;

                        div_cappuccino.append(img_cappuccino,p_cappuccino);
                        items.append(div_cappuccino);
                        break;
                    case "coke":
                        let div_coke = document.createElement("div");

                        let img_coke = document.createElement("img");
                        img_coke.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9HWF_rX4hwxkWY1MBHSIzKV2t7vqLm-S2D45HcwlBV_3FCwwEbXkGUuZA0LQxcxlJbdQ&usqp=CAU";
                        let p_coke = document.createElement("p");
                        p_coke.innerText=`Order id : ${order_id}`;

                        div_coke.append(img_coke,p_coke);
                        items.append(div_coke);
                        break;

                      
                        case "latte":
                            let divlatte = document.createElement("div");
    
                            let imglatte = document.createElement("img");
                            imglatte.src="  https://coffeeaffection.com/wp-content/uploads/2020/01/how-to-make-a-latte-at-home.jpg";
                            let platte = document.createElement("p");
                            platte.innerText=`Order id : ${order_id}`;
    
                            divlatte.append(imglatte,platte);
                            items.append(divlatte);
                            break;

                            case "espresso":
                                let divespresso = document.createElement("div");
        
                                let imgespresso = document.createElement("img");
                                imgespresso.src="  https://coffeeaffection.com/wp-content/uploads/2020/01/how-to-make-a-latte-at-home.jpg";
                                let pespresso = document.createElement("p");
                                pespresso.innerText=`Order id : ${order_id}`;
        
                                divespresso.append(imgespresso,pespresso);
                                items.append(divespresso);
                                break;




                    case "sandwich":
                        let div_sandwich = document.createElement("div");

                        let img_sandwich = document.createElement("img");
                        img_sandwich.src="https://madhurasrecipe.com/wp-content/uploads/2020/10/Bahubali-Sandwich.jpg";
                        let p_sandwich = document.createElement("p");
                        p_sandwich.innerText=`Order id : ${order_id}`;

                        div_sandwich.append(img_sandwich,p_sandwich);
                        items.append(div_sandwich);
                        break;
                    case "meal":
                        let div_meal = document.createElement("div");

                        let img_meal = document.createElement("img");
                        img_meal.src="https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/regular/desktop/h-mcdonalds-Filet-O-Fish-Extra-Value-Meals.jpg";
                        let p_meal = document.createElement("p");
                        p_meal.innerText=`Order id : ${order_id}`;

                        div_meal.append(img_meal,p_meal);
                        items.append(div_meal);
                        break;
                    case "chickenwrap":
                        let div_chickenwrap = document.createElement("div");

                        let img_chickenwrap = document.createElement("img");
                        img_chickenwrap.src="https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Wrap-600x600.jpg";
                        let p_chickenwrap = document.createElement("p");
                        p_chickenwrap.innerText=`Order id : ${order_id}`;

                        div_chickenwrap.append(img_chickenwrap,p_chickenwrap);
                        items.append(div_chickenwrap);
                        break;
                }
            })
        });
    
        food_promise.catch(function(error){
                        reject.style.transform="scale(1)";
                        marq.innerText="We will be open at 9:00AM. Thanks!";
                        let div = document.createElement("div");
                        let img = document.createElement("img");
                        img.src="https://st.depositphotos.com/1259239/1541/v/600/depositphotos_15418753-stock-illustration-we-are-closed-sign.jpg";
                        let p = document.createElement("p");
                        p.innerText=`We are not taking orders right now`;

                        div.append(img,p);
                        reject.append(div); 
                        console.log(error);
        });
        resetForm();

    }
    else{
        alert("Please choose atleast One Item:");
    }

}


function resetForm(){
document.querySelector("#fries").checked = false; 
document.querySelector("#burger").checked = false; 
document.querySelector("#nugget").checked = false;
document.querySelector("#cappuccino").checked = false;
document.querySelector("#coke").checked = false;  
document.querySelector("#sandwich").checked = false;

document.querySelector("#latte").checked = false;
document.querySelector("#espresso").checked = false;
document.querySelector("#meal").checked = false;
document.querySelector("#chickenwrap").checked = false;
    
}

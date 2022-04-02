menu_list_array = ["Veg Margherita Pizza",
                        "Chicken Tandoori Pizza",
                        "Veg Supreme Pizza",
                        "Paneer Tikka Pizza",
                        "Deluxe Veggie Pizza",
                        "Veg Extravaganza Pizza"];
                        menu_open_list_array = ["Meal for 4: Indi Tandoori Paneer & Peppy Paneer Combo",
                       " Meal for 2: Chicken Dominator Combo",
                       "Party Combo - 4 Veg Pizza varieties + Sides & Pepsi",
                    "Party Combo - 4 Non-Veg Pizza varieties + Sides & Pepsi"
                    ];
    
    function getmenu(){
        var htmldata="";
        menu_open_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<br>'
        }
        document.getElementById("display_menu").innerHTML = htmldata;
        //give the appropriate id name as display_menu 
    }

    function add_item(){
        var htmldata="";
        menu_list_array.sort();
		var imgtags='<img id="im1" src="pizzaImg.png">'
        var item=document.getElementById("add_item").value;
        // use the sort function as - menu_list_array.sort();
        htmldata="";
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+imgtags+ menu_list_array[i]+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;
		
    }

function add_top(){
	var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}

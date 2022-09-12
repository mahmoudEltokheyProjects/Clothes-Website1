/* -------------------------------------------- jquery code ---------------------------------------- */
// nice scroll library : to change the shape of scroll 
$("document").ready(function(){
	/*  <html></html> بتاع صفحة ال scroll هغير شكل ال */
	/* ######### Trigger Nice scroll plugin ######### */
	$("html").niceScroll({
        /* scroll بتاع ال cursor هغير لون ال */
        cursorcolor: "#f7600e"     ,
        /* scroll بتاع ال cursor هغير العرض بتاع ال */
        cursorwidth: 10            , 
        /* scroll بتاع ال border-radius هغير ال */
        cursorborderradius: 0      ,
        /* scroll بتاع ال border هغير ال */
        cursorborder: "1px solid #f7600e " 
    });
});
/* -------------------------------------------- javascript code ---------------------------------------- */
var bigImgEl=document.getElementById("bigImgId")   ,
 	subImg1El=document.getElementById("subImg1Id") ,
	subImg2El=document.getElementById("subImg2Id") ,
	subImg3El=document.getElementById("subImg3Id") ,
	subImg4El=document.getElementById("subImg4Id") ;

subImg1El.onclick = function()
{
	bigImgName.src="images/gallery-1.jpg";
	subImg1El.style.border = "3px solid #666" ;	
	subImg2El.style.border = "transparent" ;	
	subImg3El.style.border = "transparent" ;	
	subImg4El.style.border = "transparent" ;	
}
subImg2El.onclick = function()
{
	bigImgName.src="images/gallery-2.jpg";
	subImg2El.style.border = "3px solid #666" ;	
	subImg1El.style.border = "transparent" ;	
	subImg3El.style.border = "transparent" ;	
	subImg4El.style.border = "transparent" ;	
}
subImg3El.onclick = function()
{
	bigImgName.src="images/gallery-3.jpg";
	subImg3El.style.border = "3px solid #666" ;	
	subImg2El.style.border = "transparent" ;	
	subImg1El.style.border = "transparent" ;	
	subImg4El.style.border = "transparent" ;	
}
subImg4El.onclick = function()
{
	bigImgName.src="images/gallery-4.jpg";
	subImg4El.style.border = "3px solid #666" ;	
	subImg2El.style.border = "transparent" ;	
	subImg3El.style.border = "transparent" ;	
	subImg1El.style.border = "transparent" ;	
}
/*  ################################## related Products section #################################  */	
var     hiddenProductEl = document.getElementsByClassName("hiddenProduct") ,
        viewMoreBtnEl = document.getElementById("viewMoreBtnId") ;

viewMoreBtnEl.onclick = function()
{
    for( var i=0 ; i <  hiddenProductEl.length ; i++ )
    {
        console.log("asdasdsadad");
        hiddenProductEl[i].style.display = "block" ;
    }
    
};

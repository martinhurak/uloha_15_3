var text_area = document.getElementById("text_area")
var pole =[]
var old_value="";
var analyza_result=document.getElementById("ul")
var search_result=document.getElementById("search_result")
var sifra_result=document.getElementById("sifra_result")



function analyza()
{   
    console.log(text_area.value)
    let text_area_String= text_area.value+"" //text do stringu 
    // celkova dlžka textu 
    analyza_result.innerHTML="<li>"+"celkova dlzka textu :"+text_area_String.length+"</li>"
    //dlzka textu bezmedzier
    let no_Spaces_String=text_area_String.replace(/ /g,'') // vytvory text bez medzier 
    analyza_result.innerHTML+="<li>"+"dlzka textu bez medzier :"+no_Spaces_String.length +"</li>"
     //pocet cisel 
     let number_count = text_area_String.replace(/[^0-9]/g, '').length;
     analyza_result.innerHTML+="<li>"+"pocet cisel je  :"+number_count +"</li>"
     //najdlhšie slovo 
     var str = text_area_String.split(" ");
     var longest = 0;
     var word = "";
     
        for(let i=0;i<str.length;i++)
        {if (str[i].length>=longest)
            {longest =+str[i].length
            word=str[i] 
            
                if (i==0)
                    {old_value=str[i]
                    pole.push(word)}

                if(i>=1) 
                    {old_value=str[i-1]

                        if(word.length>old_value.length)
                            {pole=[]
                            pole.push(word)}

                        if(word.length==old_value.length)
                            {pole.push(word) 
                            continue}
                    }
            }      
        }   
     if(pole.length>=2)
        {analyza_result.innerHTML+="<li>"+"najdlhsie slova su :"+pole +" maju dlzku "+longest+"pismen"+"</li>"}
     if(pole.length==1)
        {analyza_result.innerHTML+="<li>"+"najdlhsie slovo je :"+pole +" ma dlzku "+longest+"pismen"+"</li>"}
     pole=[]
}

function search()
{let text_area_String= text_area.value+""
if(document.getElementById("text").value.length>1)
{
    if (text_area_String.includes(document.getElementById("text").value)==true)
    {search_result.innerHTML="hladany vyraz sa v texte nachadza"}
    else 
    search_result.innerHTML="hladany vyraz sa v texte nenachadza"}
if (document.getElementById("text").value.length<=1)
{search_result.innerHTML="zadaj aspon dva znaky "}}

function sifrovanie()
{let text_area_String= text_area.value+""
let text_lowercase=text_area_String.toLowerCase()
let sifra_text=text_lowercase.replaceAll("0","O").replaceAll("o","O").replaceAll("i","1",).replaceAll("e","3").replaceAll("a","4").replaceAll("s","5").replaceAll("b","8")
sifra_result.innerHTML=sifra_text}   

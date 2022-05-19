var studentsArray=[];
function submit() {
    var displayArray=[];
    for(var j=1;j<=4;j++){
        var nameOfTheStudent=document.getElementById("name_of_the_student_"+j).value;
        studentsArray.push(nameOfTheStudent);
    }
    console.log(studentsArray);
     var l=studentsArray.length;
     for(var k=0;k<l;k++){
     displayArray.push("<h4>Name-"+studentsArray[k]+"</h4>");
     }
     document.getElementById("display_name_with_commas").innerHTML=displayArray;
     var remove_commas=displayArray.join(" ");
     document.getElementById("display_name_without_commas").innerHTML=remove_commas;
     document.getElementById("submit_button").style.display="none";
     document.getElementById("sort_button").style.display="inline-block";
    } 
function sorting() {
    studentsArray.sort();
    var display_array_sorting=[];
    var l=studentsArray.length;
    for(var a=0;a<l;a++){
        display_array_sorting.push("<h4>Name-"+studentsArray[a]+"</h4>");
    }
    var remove_commas=display_array_sorting.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}
$("#btnSend").click(function () {

    var hwGrade = $("#hwGrade").val();
    var gpGrade = $("#gpGrade").val();
    var qGrade = $("#qGrade").val();
    var testGrade = $("#testGrade").val();
    var intexGrade = $("#intexGrade").val();
    var finalGrade = parseInt(hwGrade) + parseInt(gpGrade) + parseInt(qGrade) + parseInt(testGrade) + parseInt(intexGrade);

    if (finalGrade >= 94)
        alert("Your final grade is " + finalGrade + ", A");
    else if ((finalGrade >= 90) & (finalGrade < 94))
        alert("Your final grade is " + finalGrade + ", A-");
    else if ((finalGrade >= 87) & (finalGrade < 90))
        alert("Your final grade is " + finalGrade + ", B+");
    else if ((finalGrade >= 84) & (finalGrade < 87))
        alert("Your final grade is " + finalGrade + ", B");
    else if ((finalGrade >= 80) & (finalGrade < 84))
        alert("Your final grade is " + finalGrade + ", B-");
    else if ((finalGrade >= 77) & (finalGrade < 80))
        alert("Your final grade is " + finalGrade + ", C+");
    else if ((finalGrade >= 74) & (finalGrade < 77))
        alert("Your final grade is " + finalGrade + ", C");
    else if ((finalGrade >= 70) & (finalGrade < 74))
        alert("Your final grade is " + finalGrade + ", C-");
    else if ((finalGrade >= 67) & (finalGrade < 70))
        alert("Your final grade is " + finalGrade + ", D+");
    else if ((finalGrade >= 64) & (finalGrade < 67))
        alert("Your final grade is " + finalGrade + ", D");
    else if ((finalGrade >= 60) & (finalGrade < 64))
        alert("Your final grade is " + finalGrade + ", D-");
    else 
        alert("Your final grade is " + finalGrade + ", E");
})
   

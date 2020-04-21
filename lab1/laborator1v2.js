const grade = 50 + Math.random()*50.0;
console.log(grade + '%' + " => " + letterGrade(grade));
function letterGrade(grade)
{   var X = (grade < 60 ) ? X = 'F'
         : (grade[0] = 6) ? X = 'D'
         : (grade[0] = 7) ? X = 'C'
         : (grade[0] = 8) ? X = 'B'
         : X = 'A';
    return X;
}
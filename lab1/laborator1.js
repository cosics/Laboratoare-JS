const grade = 50 + Math.random()*50.0;
console.log(grade +'%'+ " => "+ letterGrade(grade));
var X;
function letterGrade(grade)
{
    if (grade < 60 ) {
        X = 'F';
    } else if (grade[0] = 6) {
        X = 'D';
    } else if (grade[0] = 7) {
        X = 'C';
    } else if (grade[0] = 8) {
        X ='B'
    } else X ='A' ;

    return X;
}
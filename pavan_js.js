/*global console , $ , document*/
/*eslint-disable no-console*/


/**
* @jest-environment jsdom
*/
let scholarNo = document.getElementById("scholarNo")
let studentClass = document.getElementById("class")
let rollNo = document.getElementById("rollNo")
let studentName = document.getElementById("studentName")
let fatherName = document.getElementById("fatherName")
let motherName = document.getElementById("motherName")
let attandence = document.getElementById("attandence")
let DOB = document.getElementById("DOB")
let term1BestScore = document.getElementById("term1BestScore")
let term2BestScore = document.getElementById("term2BestScore")
let schoolAddress = document.getElementById("schoolAddress")
let schoolName = document.getElementById("schoolName")
let email = document.getElementById("email")

let engBestScore12 = document.getElementById("engBestScore12")
let engTerm1 = document.getElementById("engTerm1")
let engTerm1MarksObt = document.getElementById("engTerm1MarksObt")
let engBestScore34 = document.getElementById("engBestScore34")
let engTerm2 = document.getElementById("engTerm2")
let engTerm2MarksObt = document.getElementById("engTerm2MarksObt")
let engTerm1And2Percentage = document.getElementById("engTerm1And2Percentage")
let engGrade = document.getElementById("engGrade")

let hinBestScore12 = document.getElementById("hinBestScore12")
let hinTerm1 = document.getElementById("hinTerm1")
let hinTerm1MarksObt = document.getElementById("hinTerm1MarksObt")
let hinBestScore34 = document.getElementById("hinBestScore34")
let hinTerm2 = document.getElementById("hinTerm2")
let hinTerm2MarksObt = document.getElementById("hinTerm2MarksObt")
let hinTerm1And2Percentage = document.getElementById("hinTerm1And2Percentage")
let hinGrade = document.getElementById("hinGrade")

let matBestScore12 = document.getElementById("matBestScore12")
let matTerm1 = document.getElementById("matTerm1")
let matTerm1MarksObt = document.getElementById("matTerm1MarksObt")
let matBestScore34 = document.getElementById("matBestScore34")
let matTerm2 = document.getElementById("matTerm2")
let matTerm2MarksObt = document.getElementById("matTerm2MarksObt")
let matTerm1And2Percentage = document.getElementById("matTerm1And2Percentage")
let matGrade = document.getElementById("matGrade")

let totBestScore12 = document.getElementById("totBestScore12")
let totTerm1 = document.getElementById("totTerm1")
let totTerm1MarksObt = document.getElementById("totTerm1MarksObt")
let totBestScore34 = document.getElementById("totBestScore34")
let totTerm2 = document.getElementById("totTerm2")
let totTerm2MarksObt = document.getElementById("totTerm2MarksObt")
let totTerm1And2Percentage = document.getElementById("totTerm1And2Percentage")
let totGrade = document.getElementById("totGrade")

let resultEl = document.getElementById("result")
let percentageEl = document.getElementById("percentage")
let gradeEl = document.getElementById("grade")

const fetchData = async ()=>{
    const response = await fetch("http://stageapi.iguru.guru:222/api/ExamManagement/GetStudentProgressReports?schoolID=282&sectionID=2682&eXamMasID=8442&students=181521");
    const data = await response.json();
    const {ExamMasters,lstInternal,lstStudentInfo,stGrades} = data.Response.ProgressList;

    schoolName.textContent = lstStudentInfo[0].SchoolName
    schoolAddress.textContent = lstStudentInfo[0].SchoolAddress
    email.textContent = `E-mail : ${lstStudentInfo[0].SchoolEmail}`
    studentClass.textContent = `:- ${lstStudentInfo[0].ClassName}`;
    rollNo.textContent = `:- ${lstStudentInfo[0].RollNumber}`
    studentName.textContent = `:- ${lstStudentInfo[0].Name}`
    fatherName.textContent = `:- ${lstStudentInfo[0].FatherName}`
    motherName.textContent = `:- ${lstStudentInfo[0].MotherName}`
    const {Attandence} = lstStudentInfo[0]
    const totalAttandence = Attandence.map(value=>value.MonthPresence)
    attandence.textContent = `:- ${totalAttandence.reduce((preValue,currValue)=>preValue+currValue)}`
    const date = lstStudentInfo[0].DOB
    const formatedDate = new Date(date)
    const months = ['Jan','Feb','March','April','May','June','July','Aug','Sep','Oct','Nov','Dec']
    DOB.textContent = `${formatedDate.getDate()}-${months[formatedDate.getMonth()-1]}-${formatedDate.getFullYear()}`

    term1BestScore.textContent = ExamMasters[0].ExamMasterRptName
    term2BestScore.textContent = ExamMasters[1].ExamMasterRptName
    
    engBestScore12.textContent = lstStudentInfo[0].stInternals[5].ScoredMarks
    hinBestScore12.textContent = lstStudentInfo[0].stInternals[3].ScoredMarks
    matBestScore12.textContent = lstStudentInfo[0].stInternals[7].ScoredMarks
    totBestScore12.textContent = parseInt(engBestScore12.textContent)+parseInt(hinBestScore12.textContent)+parseInt(matBestScore12.textContent)


    engBestScore34.textContent = lstStudentInfo[0].stInternals[6].ScoredMarks
    hinBestScore34.textContent = lstStudentInfo[0].stInternals[4].ScoredMarks
    matBestScore34.textContent = lstStudentInfo[0].stInternals[8].ScoredMarks
    totBestScore34.textContent = parseInt(engBestScore12.textContent)+parseInt(hinBestScore12.textContent)+parseInt(matBestScore12.textContent)

    engTerm1.textContent = lstStudentInfo[0].lstStudent[5].Marks
    hinTerm1.textContent = lstStudentInfo[0].lstStudent[3].Marks
    matTerm1.textContent = lstStudentInfo[0].lstStudent[7].Marks
    totTerm1.textContent = parseInt(engTerm1.textContent)+parseInt(hinTerm1.textContent)+parseInt(matTerm1.textContent)

    engTerm2.textContent = lstStudentInfo[0].lstStudent[4].Marks
    hinTerm2.textContent = lstStudentInfo[0].lstStudent[2].Marks
    matTerm2.textContent = lstStudentInfo[0].lstStudent[6].Marks
    totTerm2.textContent = parseInt(engTerm2.textContent)+parseInt(hinTerm2.textContent)+parseInt(matTerm2.textContent)

    engTerm1MarksObt.textContent = parseInt(engBestScore12.textContent)+parseInt(engTerm1.textContent)
    hinTerm1MarksObt.textContent = parseInt(hinBestScore12.textContent)+parseInt(hinTerm1.textContent)
    matTerm1MarksObt.textContent = parseInt(matBestScore12.textContent)+parseInt(matTerm1.textContent)
    totTerm1MarksObt.textContent = parseInt(totBestScore12.textContent)+parseInt(totTerm1.textContent)

    engTerm2MarksObt.textContent = parseInt(engBestScore34.textContent)+parseInt(engTerm2.textContent)
    hinTerm2MarksObt.textContent = parseInt(hinBestScore34.textContent)+parseInt(hinTerm2.textContent)
    matTerm2MarksObt.textContent = parseInt(matBestScore34.textContent)+parseInt(matTerm2.textContent)
    totTerm2MarksObt.textContent = parseInt(totBestScore34.textContent)+parseInt(totTerm2.textContent)

    engTerm1And2Percentage.textContent = parseInt(engTerm1MarksObt.textContent)+parseInt(engTerm2MarksObt.textContent)
    hinTerm1And2Percentage.textContent = parseInt(hinTerm1MarksObt.textContent)+parseInt(hinTerm2MarksObt.textContent)
    matTerm1And2Percentage.textContent = parseInt(matTerm1MarksObt.textContent)+parseInt(matTerm2MarksObt.textContent)
    totTerm1And2Percentage.textContent = parseInt(totTerm1MarksObt.textContent)+parseInt(totTerm2MarksObt.textContent)

    const engTotal = parseInt(engTerm1And2Percentage.textContent)/2
    const hinTotal = parseInt(hinTerm1And2Percentage.textContent)/2
    const matTotal = parseInt(matTerm1And2Percentage.textContent)/2
    const totTotal = (parseInt(totTerm1And2Percentage.textContent)/2)/3

    const Grades = (total)=>{
        let grade;
        if(total >= 91 && total <= 100){
            grade = "A1"
        }else if(total >= 81 && total <= 90){
            grade = "A2"
        }else if(total >= 71 && total <= 80){
            grade = "B1"
        }else if(total >= 61 && total <= 70){
            grade = "B2"
        }else if(total >= 51 && total <= 60){
            grade = "C1"
        }else if(total >= 41 && total <= 50){
            grade = "C2"
        }else if(total >= 34 && total <= 40){
            grade = "D"
        }else if(total >= 0 && total <= 33){
            grade = "E"
        }
        return grade;
    }

    const Result = (grade)=>{
        switch (grade) {
            case 'E':
                return 'FAIL';
            default:
                return 'PASS';
        }
    }

    engGrade.textContent = Grades(engTotal)
    hinGrade.textContent = Grades(hinTotal)
    matGrade.textContent = Grades(matTotal)
    totGrade.textContent = Grades(totTotal)
    
    gradeEl.textContent = lstStudentInfo[0].Grade
    percentageEl.textContent = lstStudentInfo[0].Totalper
    resultEl.textContent = Result(gradeEl.textContent)
}

fetchData();



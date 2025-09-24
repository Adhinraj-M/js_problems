let classObj = {
  name: "class A",
  teacherName: "Mary",
  students: [
    {
      name: "Ravi",
      id: "101",
      marks: [
        { subject: "English", mark: 25 },
        { subject: "Maths", mark: 48 },
        { subject: "Physics", mark: 40 },
        { subject: "Chemistry", mark: 30 },
        { subject: "Computer", mark: 20 },
      ],
    },
    {
      name: "Aju",
      id: "102",
      marks: [
        { subject: "English", mark: 35 },
        { subject: "Maths", mark: 38 },
        { subject: "Physics", mark: 33 },
        { subject: "Chemistry", mark: 34 },
        { subject: "Computer", mark: 30 },
      ],
    },

    {
      name: "Binu",
      id: "104",
      marks: [
        { subject: "English", mark: 49 },
        { subject: "Maths", mark: 49 },
        { subject: "Physics", mark: 47 },
        { subject: "Chemistry", mark: 46 },
        { subject: "Computer", mark: 50 },
      ],
    },
  ],
};

// 1.Write a function to print the name of the class: "class A".

// function nameOfClass(classObj){
//     return classObj.name
// }

// console.log(nameOfClass(classObj))

// 2.Write a function to print the teacher's name: "Mary".

// function teachersName(classObj){
//     return classObj.teacherName
// }

// console.log(teachersName(classObj))

// 3.Write a function to print the names of all the students in the class.

// function nameOfStudents(classObj){
//     return classObj.students.map(students=> students.name)
// }

// console.log(nameOfStudents(classObj))

// 4.Write a function to print the IDs of all the students in the class.

// function studentIds(obj){
//  return obj.students.map(student=> student.id)
// }

// console.log(studentIds(classObj))

// 5.Write a function to print the subject names for a specific student.

// function subNameOfStudent(classObj,studentName){
//     return classObj.students.filter(student=> student.name === studentName)[0].marks.map(sub=>sub.subject)
// }

// console.log(subNameOfStudent(classObj,"Aju"))

// 6.Write a function to print the marks of a specific student in all subjects.

// function markOfStudent(classObj,studentName){
//     return classObj.students.filter(student=>student.name === studentName)[0].marks.map(sub=> sub.mark)
// }

// console.log(markOfStudent(classObj,"Binu"))

// 7.Write a function to calculate and print the average marks for a specific student.

// function avgOfaStudent(classObj,studentName){
//     const numberOfSub = classObj.students.filter(student=>student.name === studentName)[0].marks.length
//     return classObj.students.filter(student=>student.name === studentName)[0].marks.reduce((acc,item)=>acc+item.mark,0)/numberOfSub
// }

// console.log(avgOfaStudent(classObj,"Ravi"))

// 8.Write a function to calculate and print the total marks for a specific student.

// function totalMarks(classObj,studentName){
//     return classObj.students.filter(student=>student.name === studentName)[0].marks.reduce((acc,item)=>acc + item.mark,0)
// }

// console.log(totalMarks(classObj,"Binu"))

// 9.Write a function to calculate and print the average marks for all students in a specific subject.

// function avgMarkSub(classObj,subName){
//     const numberOfStudent = classObj.students.length
//     return classObj.students.map(student=> student.marks.filter(mark=>mark.subject === subName)).flat().reduce((acc,item)=>acc+item.mark,0)/numberOfStudent
// }

// console.log(avgMarkSub(classObj,"Physics"))

// 10.Write a function to calculate and print the total marks for all students in a specific subject.

// function totalMarkSub(classObj,subName){
//     return classObj.students.map(student=> student.marks.filter(sub=> sub.subject === subName)).flat().reduce((acc,item)=> acc + item.mark,0)
// }

// console.log(totalMarkSub(classObj,"Physics"))

// 11.Write a function to find and print the student with the highest marks in a specific subject.

// function studentWithHighestMark(classObj,subName){
//     const studentMarks = (classObj.students.map(student=>student.marks.filter(sub=>sub.subject === subName)).flat().map(subMark=>subMark.mark))
//     const largest = Math.max(...studentMarks)
//     const  index  = studentMarks.indexOf(largest)

//     return classObj.students[index].name

// }

// console.log(studentWithHighestMark(classObj,"Computer"))

// 12.Write a function to find and print the student with the lowest marks in a specific subject.

// function studentWithLowestMarks(classObj,subName){
//     const studentMarks = classObj.students.map(student=>student.marks.filter(sub=>sub.subject === subName)).flat().map(subMark=>subMark.mark)
//     const smallest = Math.min(...studentMarks)
//     const index = studentMarks.indexOf(smallest)

//     return classObj.students[index].name
// }

// console.log(studentWithLowestMarks(classObj,"Physics"))

// 13.Write a functoin to find and print the student with the highest total marks

// function topperStudent(classObj){
//     const studentMarks = classObj.students.map(student=>student.marks.reduce((total,subMark)=>total + subMark.mark,0))
//     const highestMark = Math.max(...studentMarks)
//     const index = studentMarks.indexOf(highestMark)

//     return classObj.students[index].name
// }

// console.log(topperStudent(classObj))

// 14.Write a function to find and print the student with the lowest total marks.

// function lowerStudent(classObj){
//     const studentMarks = classObj.students.map(student=> student.marks.reduce((total,subMark)=>total + subMark.mark,0))
//     const lowestMark  = Math.min(...studentMarks)
//     const index = studentMarks.indexOf(lowestMark)

//     return classObj.students[index].name
// }

// console.log(lowerStudent(classObj))

// 15.Write a function to find and print the subject with the highest average marks.

// function subWithHighestAvgMark(classObj){
//     let subjectsMark = {}
//     const avgMarkSub = classObj.students.map(student=> student.marks).flat()

//      for(const item of avgMarkSub){
//         if(!subjectsMark[item.subject]){
//             subjectsMark[item.subject] = item.mark
//         }
//         else{
//             subjectsMark[item.subject] = subjectsMark[item.subject] + item.mark
//         }
//     }

//    const markArr = Object.values(subjectsMark)
//    const numberOfStudent = classObj.students.length
//    const avgMarkArr = markArr.map(item=> item/numberOfStudent)
//    const highestAvg = avgMarkArr.indexOf(Math.max(...avgMarkArr))
//    return Object.entries(subjectsMark)[highestAvg][0]
// }

// console.log(subWithHighestAvgMark(classObj))

// 16.Write a function to find and print the subject with the lowest average marks.

// function subWithLowestAvgMark(){
//     let subMarks = {}

//     const markArr  = classObj.students.map(student=> student.marks).flat()
//     for(const item of markArr){
//         if(!subMarks[item.subject]){
//             subMarks[item.subject] = item.mark
//         }
//         else{
//             subMarks[item.subject] = subMarks[item.subject] + item.mark
//         }
//     }

//     const eachSubMark = Object.values(subMarks)
//     const totalStudent = classObj.students.length
//     const avgMarkArr = eachSubMark.map((item)=> item/totalStudent)
//     const indexOfLowest = avgMarkArr.indexOf(Math.min(...avgMarkArr) )
//     return Object.entries(subMarks)[indexOfLowest][0]

// }

// console.log(subWithLowestAvgMark(classObj))

// 17.Write a function to calculate and print the overall average marks for the class.

// function overallAvgMark(classObj){
//     const classAvg = classObj.students.map(student=>student.marks.reduce((total,item)=> total + item.mark,0)).reduce((total,mark)=>total + mark,0)
//     const totalStudent = classObj.students.length

//     return classAvg/totalStudent
// }

// console.log(overallAvgMark(classObj))

// 18.Write a funcition to calculate and print the overall total mark for the class

// function overallMark(classObj){
//     return classObj.students.map(student=>student.marks.reduce((total,submark)=> total + submark.mark,0)).reduce((total,item)=> total+item,0)
// }

// console.log(overallMark(classObj))

// 19.Write a function to calculate and print the average marks for each subject

// function averageMark(classObj){
//     let totalMarkEachSub = {}
//     let avgMarkEachSub = {}
//    const noOfStudents  = classObj.students.length
//    const marks =  classObj.students.map(student=> student.marks).flat()

//     for(const item of marks){
//         if(!totalMarkEachSub[item.subject]){
//             totalMarkEachSub[item.subject] = item.mark
//         }
//         else{
//             totalMarkEachSub[item.subject] = totalMarkEachSub[item.subject] + item.mark
//         }
//     }

//     for(const key in totalMarkEachSub){
//             avgMarkEachSub[key] = totalMarkEachSub[key]/noOfStudents
//     }

//     return avgMarkEachSub
// }

// console.log(averageMark(classObj))

// 20.Write a function to calculate and print the total marks for each subject.

// function totalMarkEachSub(classObj){
//     let totalMark = {}

//     const marks = classObj.students.map(student=>student.marks).flat()

//     for(const subMark of marks){
//         if(!totalMark[subMark.subject]){
//             totalMark[subMark.subject] = subMark.mark
//         }
//         else{
//             totalMark[subMark.subject] = totalMark[subMark.subject] + subMark.mark
//         }
//     }
//     return totalMark
// }

// console.log(totalMarkEachSub(classObj))

// 21.Write a function to find and print the subject with the highest total marks.

// function subWithhighestMark(classObj) {
//   let totalMark = {};

//   const marks = classObj.students.map((student) => student.marks).flat();

//   for (const subMark of marks) {
//     if (!totalMark[subMark.subject]) {
//       totalMark[subMark.subject] = subMark.mark;
//     } else {
//       totalMark[subMark.subject] = totalMark[subMark.subject] + subMark.mark;
//     }
//   }
//   const largest = Math.max(...Object.values(totalMark));

//   const index = Object.values(totalMark).indexOf(largest);

//   return Object.keys(totalMark)[index];
// }

// console.log(subWithhighestMark(classObj));

// 22.Write a function to find and print the subject with the lowest total marks.

// function subWithLowestTotalMark(classObj){
//     let totalMark = {}

//     const marks = classObj.students.map((student)=> student.marks).flat()

//     for(let subMark of marks){
//         if(!totalMark[subMark.subject]){
//             totalMark[subMark.subject] = subMark.mark
//         }
//         else{
//             totalMark[subMark.subject] = totalMark[subMark.subject] + subMark.mark
//         }
//     }

//     const smallest = Math.min(...(Object.values(totalMark)))
//     const index = Object.values(totalMark).indexOf(smallest)

//     return Object.keys(totalMark)[index]
// }

// console.log(subWithLowestTotalMark(classObj))

// 23.Write a function to find and print the student(s) with the highest average marks.


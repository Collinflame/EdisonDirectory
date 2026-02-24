const {Teacher, Period, Course} = require('../models');
let buildingChoices = ['All', 'Admin South', 'Art Building', 'CTE Building', 'Science Building', 'W-Building'];
let departmentChoices = ['All', 'ALPS', 'Biomedicine', 'Computer Science', 'Engineering', 'English', 'Green Academy', 'History', 'Math', 'Performing Arts', 'Science', 'Teacher Academy', 'Visual Arts'];
let sortedTeachers = [];


module.exports.viewAll = async function(req, res){
    const teachers = await Teacher.findAll();
    sortedTeachers = teachers.sort(sortName);
    let searchBuilding = req.query.building;
    let buildingFilter = true;
    if (buildingFilter){
        if (searchBuilding === 'All') {
            sortedTeachers = teachers.sort(sortName);
        } else if (searchBuilding === 'Admin South') {
            for (let i = sortedTeachers.length - 1; i >= 0; i--) {
                if (!sortedTeachers[i].room.startsWith("AS")) {
                    sortedTeachers.splice(i, 1);
                }
            }
        } else if (searchBuilding === 'Art Building') {
            for (let i = sortedTeachers.length - 1; i >= 0; i--) {
                if (!sortedTeachers[i].room.startsWith("D")) {
                    sortedTeachers.splice(i, 1);
                }
            }
        } else if (searchBuilding === 'CTE Building') {
            for (let i = sortedTeachers.length - 1; i >= 0; i--) {
                if (!(sortedTeachers[i].room.startsWith("1") || sortedTeachers[i].room.startsWith("2"))) {
                    sortedTeachers.splice(i, 1);
                }
            }
        }  else if (searchBuilding === 'Science Building') {
            for (let i = sortedTeachers.length - 1; i >= 0; i--) {
                if (!sortedTeachers[i].room.startsWith("S")) {
                    sortedTeachers.splice(i, 1);
                }
            }
        } else if (searchBuilding === 'W-Building') {
            for (let i = sortedTeachers.length - 1; i >= 0; i--) {
                if (!sortedTeachers[i].room.startsWith("W")) {
                    sortedTeachers.splice(i, 1);
                }
            }
        }
    }
    let APTeachers = req.query.AP;
    if (APTeachers){
        for (let i = sortedTeachers.length - 1; i >= 0; i--){
            let isAP = false;
            let teacher = await Teacher.findByPk(sortedTeachers[i].id, {
                include: ['courses']
            });
            for (let i = 0; i<teacher.courses.length; i++){
                if (teacher.courses[i].name.startsWith("AP")){
                    isAP = true;
                }
            }
            if (!isAP){
                sortedTeachers.splice(i, 1);
            }
        }
    }
    let searchDepartment = req.query.department;
    let departmentFilter = true;
    if (departmentFilter){
        if (searchDepartment === 'All') {
            sortedTeachers = teachers.sort(sortName);
        } else if (searchDepartment === 'ALPS') {
            for (let i = sortedTeachers.length - 1; i >= 0; i--) {
                let correctDepartment = false;
                let teacher = await Teacher.findByPk(sortedTeachers[i].id, {
                    include: ['courses']
                });
                for (let i = 0; i<teacher.courses.length; i++){
                    if (teacher.courses[i].department === "ALPS"){
                        correctDepartment = true;
                    }
                }
                if (!correctDepartment){
                    sortedTeachers.splice(i, 1);
                }
            }
        } else if (searchDepartment === 'Biomedicine') {
            for (let i = sortedTeachers.length - 1; i >= 0; i--) {
                let correctDepartment = false;
                let teacher = await Teacher.findByPk(sortedTeachers[i].id, {
                    include: ['courses']
                });
                for (let i = 0; i<teacher.courses.length; i++){
                    if (teacher.courses[i].department === "Biomedicine"){
                        correctDepartment = true;
                    }
                }
                if (!correctDepartment){
                    sortedTeachers.splice(i, 1);
                }
            }
        } else if (searchDepartment === 'Computer Science') {
            for (let i = sortedTeachers.length - 1; i >= 0; i--) {
                let correctDepartment = false;
                let teacher = await Teacher.findByPk(sortedTeachers[i].id, {
                    include: ['courses']
                });
                for (let i = 0; i<teacher.courses.length; i++){
                    if (teacher.courses[i].department === "Computer Science"){
                        correctDepartment = true;
                    }
                }
                if (!correctDepartment){
                    sortedTeachers.splice(i, 1);
                }
            }
        } else if (searchDepartment === 'Engineering') {
            for (let i = sortedTeachers.length - 1; i >= 0; i--) {
                let correctDepartment = false;
                let teacher = await Teacher.findByPk(sortedTeachers[i].id, {
                    include: ['courses']
                });
                for (let i = 0; i<teacher.courses.length; i++){
                    if (teacher.courses[i].department === "Engineering"){
                        correctDepartment = true;
                    }
                }
                if (!correctDepartment){
                    sortedTeachers.splice(i, 1);
                }
            }
        } else if (searchDepartment === 'English') {
            for (let i = sortedTeachers.length - 1; i >= 0; i--) {
                let correctDepartment = false;
                let teacher = await Teacher.findByPk(sortedTeachers[i].id, {
                    include: ['courses']
                });
                for (let i = 0; i<teacher.courses.length; i++){
                    if (teacher.courses[i].department === "English"){
                        correctDepartment = true;
                    }
                }
                if (!correctDepartment){
                    sortedTeachers.splice(i, 1);
                }
            }
        }  else if (searchDepartment === 'Green Academy') {
            for (let i = sortedTeachers.length - 1; i >= 0; i--) {
                let correctDepartment = false;
                let teacher = await Teacher.findByPk(sortedTeachers[i].id, {
                    include: ['courses']
                });
                for (let i = 0; i<teacher.courses.length; i++){
                    if (teacher.courses[i].department === "Green Academy"){
                        correctDepartment = true;
                    }
                }
                if (!correctDepartment){
                    sortedTeachers.splice(i, 1);
                }
            }
        } else if (searchDepartment === 'History') {
            for (let i = sortedTeachers.length - 1; i >= 0; i--) {
                let correctDepartment = false;
                let teacher = await Teacher.findByPk(sortedTeachers[i].id, {
                    include: ['courses']
                });
                for (let i = 0; i<teacher.courses.length; i++){
                    if (teacher.courses[i].department === "History"){
                        correctDepartment = true;
                    }
                }
                if (!correctDepartment){
                    sortedTeachers.splice(i, 1);
                }
            }
        } else if (searchDepartment === 'Math') {
            for (let i = sortedTeachers.length - 1; i >= 0; i--) {
                let correctDepartment = false;
                let teacher = await Teacher.findByPk(sortedTeachers[i].id, {
                    include: ['courses']
                });
                for (let i = 0; i<teacher.courses.length; i++){
                    if (teacher.courses[i].department === "Math"){
                        correctDepartment = true;
                    }
                }
                if (!correctDepartment){
                    sortedTeachers.splice(i, 1);
                }
            }
        } else if (searchDepartment === 'Performing Arts') {
            for (let i = sortedTeachers.length - 1; i >= 0; i--) {
                let correctDepartment = false;
                let teacher = await Teacher.findByPk(sortedTeachers[i].id, {
                    include: ['courses']
                });
                for (let i = 0; i<teacher.courses.length; i++){
                    if (teacher.courses[i].department === "Performing Arts"){
                        correctDepartment = true;
                    }
                }
                if (!correctDepartment){
                    sortedTeachers.splice(i, 1);
                }
            }
        } else if (searchDepartment === 'Science') {
            for (let i = sortedTeachers.length - 1; i >= 0; i--) {
                let correctDepartment = false;
                let teacher = await Teacher.findByPk(sortedTeachers[i].id, {
                    include: ['courses']
                });
                for (let i = 0; i<teacher.courses.length; i++){
                    if (teacher.courses[i].department === "Science"){
                        correctDepartment = true;
                    }
                }
                if (!correctDepartment){
                    sortedTeachers.splice(i, 1);
                }
            }
        } else if (searchDepartment === 'Teacher Acadmey') {
            for (let i = sortedTeachers.length - 1; i >= 0; i--) {
                let correctDepartment = false;
                let teacher = await Teacher.findByPk(sortedTeachers[i].id, {
                    include: ['courses']
                });
                for (let i = 0; i<teacher.courses.length; i++){
                    if (teacher.courses[i].department === "Teacher Academy"){
                        correctDepartment = true;
                    }
                }
                if (!correctDepartment){
                    sortedTeachers.splice(i, 1);
                }
            }
        } else if (searchDepartment === 'Visual Arts') {
            for (let i = sortedTeachers.length - 1; i >= 0; i--) {
                let correctDepartment = false;
                let teacher = await Teacher.findByPk(sortedTeachers[i].id, {
                    include: ['courses']
                });
                for (let i = 0; i<teacher.courses.length; i++){
                    if (teacher.courses[i].department === "Visual Arts"){
                        correctDepartment = true;
                    }
                }
                if (!correctDepartment){
                    sortedTeachers.splice(i, 1);
                }
            }
        }
    }
    res.render('teacher/view_all', {sortedTeachers, buildingChoices, searchBuilding, departmentChoices, searchDepartment});
}


function sortName(a, b){
    if (a.last_name < b.last_name){
        return -1;
    } else if (a.last_name > b.last_name){
        return 1;
    } else{
        return 0
    }
}

module.exports.viewProfile = async function(req, res){
    const teacher = await Teacher.findByPk(req.params.id, {
        include: ['courses', 'periods']
    });
    const periods = await Period.findAll({where: {teacher_id: teacher.id}});
    let allPeriods = [];
    let sevenPeriods = ['Period 1', 'Period 2', 'Period 3', 'Period 4', 'Period 5', 'Period 6', 'Period 7'];
    //Finds Courses of the Teacher
    for (let i=0; i<periods.length; i++) {
        if (coursePeriods(teacher, periods[i])){
            allPeriods.push(periods[i]);
        }
    }
    let setCourses = [];
    //Finalize Class Schedule
    for (let i=0; i<7; i++) {
        let x = checkPeriods(i, allPeriods, teacher);
        if (x === -1){
            setCourses.push([sevenPeriods[i], 'No Class', '', '']);
        } else{
            setCourses.push([sevenPeriods[i], teacher.courses[x].name, teacher.courses[x].department, teacher.courses[x].grade_levels]);
        }
    }
    res.render('teacher/profile', {teacher, allPeriods, setCourses});
}

module.exports.viewMap = async function(req, res){
    const express = require('express');
    const app = express();
    app.get('/map', (req) => {

    })
    let roomNumber = req.query.room;
    let teacher = await Teacher.findByPk(12, {
        include: ['courses', 'periods']
    });
    const teachers = await Teacher.findAll();
    for (let i=0; i<teachers.length; i++){
        if (teachers[i].room === roomNumber){
            teacher = await Teacher.findByPk(teachers[i].id, {
                include: ['courses', 'periods']
            });
        }
    }
    const periods = await Period.findAll({where: {teacher_id: await teacher.id}});
    let allPeriods = [];
    let sevenPeriods = ['Period 1', 'Period 2', 'Period 3', 'Period 4', 'Period 5', 'Period 6', 'Period 7'];
    //Finds Courses of the Teacher
    for (let i=0; i<periods.length; i++) {
        if (coursePeriods(teacher, periods[i])){
            allPeriods.push(periods[i]);
        }
    }
    let setCourses = [];
    //Finalize Class Schedule
    for (let i=0; i<7; i++) {
        let x = checkPeriods(i, allPeriods, teacher);
        if (x === -1){
            setCourses.push([sevenPeriods[i], 'No Class', '', '']);
        } else{
            setCourses.push([sevenPeriods[i], teacher.courses[x].name, teacher.courses[x].department, teacher.courses[x].grade_levels]);
        }
    }
    res.render('map', {teacher, allPeriods, setCourses});
}

function coursePeriods(teacher, period){
    for (let i=0; i<teacher.courses.length; i++){
        if (period.course_id === teacher.courses[i].id){
            return true
        }
    }
    return false;
}


function checkPeriods(i, allPeriods, teacher){
    if (i === 0){
        for (let x = 0 ; x<allPeriods.length; x++) {
            if (allPeriods[x].first_period === false){
                return -1;
            } else if (allPeriods[x].first_period === true){
                for (let y = 0; y < teacher.courses.length; y++) {
                    if (allPeriods[x].course_id === teacher.courses[y].id){
                        return y;
                    }
                }
            }
        }
    }
    if (i === 1){
        for (let x = 0 ; x<allPeriods.length; x++) {
            if (allPeriods[x].second_period === false){
                return -1;
            } else if (allPeriods[x].second_period === true){
                for (let y = 0; y < teacher.courses.length; y++) {
                    if (allPeriods[x].course_id === teacher.courses[y].id){
                        return y;
                    }
                }
            }
        }
    }
    if (i === 2){
        for (let x = 0 ; x<allPeriods.length; x++) {
            if (allPeriods[x].third_period === false){
                return -1;
            } else if (allPeriods[x].third_period === true){
                for (let y = 0; y < teacher.courses.length; y++) {
                    if (allPeriods[x].course_id === teacher.courses[y].id){
                        return y;
                    }
                }
            }
        }
    }
    if (i === 3){
        for (let x = 0 ; x<allPeriods.length; x++) {
            if (allPeriods[x].fourth_period === false){
                return -1;
            } else if (allPeriods[x].fourth_period === true){
                for (let y = 0; y < teacher.courses.length; y++) {
                    if (allPeriods[x].course_id === teacher.courses[y].id){
                        return y;
                    }
                }
            }
        }
    }
    if (i === 4){
        for (let x = 0 ; x<allPeriods.length; x++) {
            if (allPeriods[x].fifth_period === false){
                return -1;
            } else if (allPeriods[x].fifth_period === true){
                for (let y = 0; y < teacher.courses.length; y++) {
                    if (allPeriods[x].course_id === teacher.courses[y].id){
                        return y;
                    }
                }
            }
        }
    }
    if (i === 5){
        for (let x = 0 ; x<allPeriods.length; x++) {
            if (allPeriods[x].sixth_period === false){
                return -1;
            } else if (allPeriods[x].sixth_period === true){
                for (let y = 0; y < teacher.courses.length; y++) {
                    if (allPeriods[x].course_id === teacher.courses[y].id){
                        return y;
                    }
                }
            }
        }
    }
    if (i === 6){
        for (let x = 0 ; x<allPeriods.length; x++) {
            if (allPeriods[x].seventh_period === false){
                return -1;
            } else if (allPeriods[x].seventh_period === true){
                for (let y = 0; y < teacher.courses.length; y++) {
                    if (allPeriods[x].course_id === teacher.courses[y].id){
                        return y;
                    }
                }
            }
        }
    }
}
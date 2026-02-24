const {Course, Teacher} = require('../models');
let departmentChoices = ['All', 'ALPS', 'Biomedicine', 'Computer Science', 'Engineering', 'English', 'Green Academy', 'History', 'Math', 'Performing Arts', 'Science', 'Teacher Academy', 'Visual Arts'];
let classTypeChoices = ['All', 'AP Classes', 'Honors Classes']
let sortedCourses = []

module.exports.viewAll = async function(req, res){
    const courses = await Course.findAll();
    sortedCourses = courses.sort(sortName)
    let searchDepartment = req.query.department;
    let departmentFilter = true;
    if (departmentFilter){
        if (searchDepartment === 'All') {
            sortedCourses = courses.sort(sortName);
        } else if (searchDepartment === 'ALPS') {
            for (let i = sortedCourses.length - 1; i >= 0; i--) {
                if (sortedCourses[i].department !== searchDepartment) {
                    sortedCourses.splice(i, 1);
                }
            }
        } else if (searchDepartment === 'Biomedicine') {
            for (let i = sortedCourses.length - 1; i >= 0; i--) {
                if (sortedCourses[i].department !== searchDepartment) {
                    sortedCourses.splice(i, 1);
                }
            }
        } else if (searchDepartment === 'Computer Science') {
            for (let i = sortedCourses.length - 1; i >= 0; i--) {
                if (sortedCourses[i].department !== searchDepartment) {
                    sortedCourses.splice(i, 1);
                }
            }
        } else if (searchDepartment === 'Engineering') {
            for (let i = sortedCourses.length - 1; i >= 0; i--) {
                if (sortedCourses[i].department !== searchDepartment) {
                    sortedCourses.splice(i, 1);
                }
            }
        } else if (searchDepartment === 'English') {
            for (let i = sortedCourses.length - 1; i >= 0; i--) {
                if (sortedCourses[i].department !== searchDepartment) {
                    sortedCourses.splice(i, 1);
                }
            }
        } else if (searchDepartment === 'Green Academy') {
            for (let i = sortedCourses.length - 1; i >= 0; i--) {
                if (sortedCourses[i].department !== searchDepartment) {
                    sortedCourses.splice(i, 1);
                }
            }
        } else if (searchDepartment === 'History') {
            for (let i = sortedCourses.length - 1; i >= 0; i--) {
                if (sortedCourses[i].department !== searchDepartment) {
                    sortedCourses.splice(i, 1);
                }
            }
        } else if (searchDepartment === 'Math') {
            for (let i = sortedCourses.length - 1; i >= 0; i--) {
                if (sortedCourses[i].department !== searchDepartment) {
                    sortedCourses.splice(i, 1);
                }
            }
        } else if (searchDepartment === 'Performing Arts') {
            for (let i = sortedCourses.length - 1; i >= 0; i--) {
                if (sortedCourses[i].department !== searchDepartment) {
                    sortedCourses.splice(i, 1);
                }
            }
        } else if (searchDepartment === 'Science') {
            for (let i = sortedCourses.length - 1; i >= 0; i--) {
                if (sortedCourses[i].department !== searchDepartment) {
                    sortedCourses.splice(i, 1);
                }
            }
        } else if (searchDepartment === 'Teacher Academy') {
            for (let i = sortedCourses.length - 1; i >= 0; i--) {
                if (sortedCourses[i].department !== searchDepartment) {
                    sortedCourses.splice(i, 1);
                }
            }
        } else if (searchDepartment === 'Visual Arts') {
            for (let i = sortedCourses.length - 1; i >= 0; i--) {
                if (sortedCourses[i].department !== searchDepartment) {
                    sortedCourses.splice(i, 1);
                }
            }
        }
    }
    let searchClassType = req.query.classType;
    let classTypeFilter = true;
    if (classTypeFilter){
        if (searchClassType === 'All') {
            sortedCourses = courses.sort(sortName);
        } else if (searchClassType === 'AP Classes') {
            for (let i = sortedCourses.length - 1; i >= 0; i--){
                if (!sortedCourses[i].name.startsWith('AP ')) {
                    sortedCourses.splice(i, 1);
                }
            }
        } else if (searchClassType === 'Honors Classes') {
            for (let i = sortedCourses.length - 1; i >= 0; i--){
                if (!sortedCourses[i].name.endsWith(' Honors')) {
                    sortedCourses.splice(i, 1);
                }
            }
        }
    }
    let ninthGrade = req.query.ninth;
    let tenthGrade = req.query.tenth;
    let eleventhGrade = req.query.eleventh;
    let twelfthGrade = req.query.twelfth;
    if (ninthGrade){
        for (let i = sortedCourses.length - 1; i >= 0; i--){
            if (!sortedCourses[i].grade_levels.includes('9')) {
                sortedCourses.splice(i, 1);
            }
        }
    }
    if (tenthGrade){
        for (let i = sortedCourses.length - 1; i >= 0; i--){
            if (!sortedCourses[i].grade_levels.includes('10')) {
                sortedCourses.splice(i, 1);
            }
        }
    }
    if (eleventhGrade){
        for (let i = sortedCourses.length - 1; i >= 0; i--){
            if (!sortedCourses[i].grade_levels.includes('11')) {
                sortedCourses.splice(i, 1);
            }
        }
    }
    if (twelfthGrade){
        for (let i = sortedCourses.length - 1; i >= 0; i--){
            if (!sortedCourses[i].grade_levels.includes('12')) {
                sortedCourses.splice(i, 1);
            }
        }
    }
    res.render('course/view_all', {sortedCourses, departmentChoices, searchDepartment, classTypeChoices, searchClassType});
}

function sortName (a, b){
    if (a.department < b.department){
        return -1;
    } else if (a.department > b.department){
        return 1;
    } else{
        return 0
    }
}

module.exports.viewProfile = async function(req, res){
    const course = await Course.findByPk(req.params.id, {
        include: ['teachers']
    });
    res.render('course/profile', {course});
}
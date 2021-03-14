import allprojectsData from '../data/allprojects.json'

function findPreviousUrl(index) {
    let prevUrl = ""
    if (index === 0)
        prevUrl = ""
    else
        prevUrl = allprojectsData[index - 1].url
    return prevUrl
}
function findNextUrl(index) {
    let nextUrl = ""
    if (index === allprojectsData.length - 1)
        nextUrl = ""
    else
        nextUrl = allprojectsData[index + 1].url
    return nextUrl
}

function findPreviousProjectUrl(index) {
    let prevProjectUrl = "";
    if (index === 0)
        return prevProjectUrl;

    let i = index;
    while (i >= 1) {
        if (allprojectsData[i - 1].isproject === true)
            return allprojectsData[i - 1].url
        i--;
    }
    return prevProjectUrl;
}

function findNextProjectUrl(index) {
    let nextProjectUrl = "";
    if (index === allprojectsData.length - 1)
        return nextProjectUrl;

    let i = index;
    while (i <= allprojectsData.length - 2) {
        // console.log(`findNextProjectUrl: i: ${i} len: ${allprojectsData.length}`)
        if (allprojectsData[i + 1].isproject === true) {
            // console.log(`findNextProjectUrl: Found! i+1: ${i + 1}`)
            // console.log(`returning ${allprojectsData[i + 1].url}`)
            return allprojectsData[i + 1].url
        }
        i++;
        // console.log(`findNextProjectUrl: Not found! incremented i: ${i}`)
    }
    return nextProjectUrl;
}

export function getProjectData(projectId, includeBlogs) {
    const index = allprojectsData.findIndex((elem) => elem.id === projectId)
    let projectNum, prevProjectUrl, nextProjectUrl;
    if (index === -1) {
        projectNum = -1
        return {
            status: 'ERR: Not found'
        }
    } else
        projectNum = projectId;

    if (includeBlogs) {
        prevProjectUrl = findPreviousUrl(index);
        nextProjectUrl = findNextUrl(index)
    }
    else {
        prevProjectUrl = findPreviousProjectUrl(index);
        nextProjectUrl = findNextProjectUrl(index)
    }

    return {
        status: 'OK',
        isProject: allprojectsData[index].isproject,
        projectNum: projectNum,
        dayNum: allprojectsData[index].day,
        url: allprojectsData[index].url,
        blogUrl: allprojectsData[index].blogurl,
        githuburl: allprojectsData[index].githuburl,
        prevProjectUrl: prevProjectUrl,
        nextProjectUrl: nextProjectUrl,
        inspiration: allprojectsData[index].inspiration,
        timeline: allprojectsData[index].timeline,
        about: allprojectsData[index].about,
        checkins: allprojectsData[index].checkins,
        timetocomplete: allprojectsData[index].timetocomplete
    }
}
import allprojectsData from '../data/allprojects.json'

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
export function getProjectData(projectId) {
    const index = allprojectsData.findIndex((elem) => elem.id === projectId)
    let projectNum, prevProjectUrl, nextProjectUrl;
    if (index === -1) {
        projectNum = -1
        return {
            status: 'ERR: Not found'
        }
    } else
        projectNum = projectId;

    prevProjectUrl = findPreviousProjectUrl(index);

    // if (index === 0)
    //     prevProjectUrl = ""
    // else

    //     prevProjectUrl = allprojectsData[index - 1].url

    // if (index === allprojectsData.length - 1)
    //     nextProjectUrl = ""
    // else
    //     nextProjectUrl = allprojectsData[index + 1].url
    nextProjectUrl = findNextProjectUrl(index)
    // console.log(`${projectName} has index ${index}`)
    return {
        status: 'OK',
        isProject: allprojectsData[index].isproject,
        projectNum: projectNum,
        dayNum: allprojectsData[index].day,
        blogUrl: allprojectsData[index].blogurl,
        githubUrl: allprojectsData[index].githuburl,
        prevProjectUrl: prevProjectUrl,
        nextProjectUrl: nextProjectUrl,
        inspiration: allprojectsData[index].inspiration,
        timeline: allprojectsData[index].timeline,
        about: allprojectsData[index].about
    }
}
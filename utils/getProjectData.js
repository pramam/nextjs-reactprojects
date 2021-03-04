import allprojectsData from '../data/allprojects.json'

export function getProjectData(projectName) {
    const index = allprojectsData.findIndex((elem) => elem.name === projectName)
    let projectNum, prevProjectUrl, nextProjectUrl;
    if (index === -1) {
        projectNum = -1
        return {
            status: 'ERR: Not found'
        }
    } else
        projectNum = index + 1;

    if (index === 0)
        prevProjectUrl = ""
    else
        prevProjectUrl = allprojectsData[index - 1].url

    if (index === allprojectsData.length - 1)
        nextProjectUrl = ""
    else
        nextProjectUrl = allprojectsData[index + 1].url

    // console.log(`${projectName} has index ${index}`)
    return {
        status: 'OK',
        projectNum: projectNum,
        dayNum: allprojectsData[index].day,
        blogUrl: allprojectsData[index].blogurl,
        githubUrl: allprojectsData[index].githuburl,
        prevProjectUrl: prevProjectUrl,
        nextProjectUrl: nextProjectUrl,
        inspiration: allprojectsData[index].inspiration
    }
}
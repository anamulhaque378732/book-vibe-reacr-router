 

// const getStoreJobApplication = () => {

//     const storeJobApplication = localStorage.getItem('job-application');
//     if (storeJobApplication) {
//         return JSON.parse(storeJobApplication)
//     }
//     return [];

// };
const getStoreReadBooks = () => {
    const storeReadBook = localStorage.getItem('read-Book');
    if (storeReadBook) {
        return JSON.parse(storeReadBook)
    } return []
}


const saveReadBooks = id => {
    const storeReadBooks = getStoreReadBooks();
    const exists = storeReadBooks.find(bookId => bookId == id);
    if (!exists) {
        storeReadBooks.push(id);
        localStorage.setItem('read-Book', JSON.stringify(storeReadBooks))
     
    }
}

// const saveJobApplication = id => {
//     const storeJobApplications = getStoreJobApplication()

//     const exists = storeJobApplications.find(jobId => jobId === id);
//     if (!exists) {
//         storeJobApplications.push(id);
//         localStorage.setItem('job-application', JSON.stringify(storeJobApplications))
//     }
// };




export { getStoreReadBooks, saveReadBooks }
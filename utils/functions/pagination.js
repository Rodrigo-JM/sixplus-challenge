export const totalPages = (totalCount) => {
    
    if (totalCount % 20 === 0) {
        return totalCount / 20
    } else {
        return Math.trunc(totalCount / 20) + 1
    }

}
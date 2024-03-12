const getFiveComments = (commentsData, chunkSize) => {
  let currentIndex = 0;

  const fetchNextComments = () => {
    const endIndex = currentIndex + chunkSize;
    const chunk = commentsData.slice(currentIndex, endIndex);
    currentIndex = endIndex;
    return chunk
  }
  return fetchNextComments;
}

export {getFiveComments}

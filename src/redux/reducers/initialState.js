const state = {
  list: {
    files: [],
    tags: [],
    isReadingTags: false,
    isReadingFiles: false,
    tagName: null,
    file: null,
    currentPage: 1,
    totalFiles: null,
    isError: false
  },
  rename: {
    isRenaming: false,
    isRenamed: false
  }
}

export default state;
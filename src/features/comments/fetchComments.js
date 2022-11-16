export async function fetchComments(ids) {
  if (ids !== null && ids !== undefined) {
    return await Promise.all(ids.map(id => fetchComment(id)));
  }
}

export async function fetchComment(commentId) {
  return await fetch(`https://hacker-news.firebaseio.com/v0/item/${commentId}.json`).then(res => res.json());
}
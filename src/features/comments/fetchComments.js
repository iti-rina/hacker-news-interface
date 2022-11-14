export async function fetchComments(ids) {
  return await Promise.all(ids.map(id => fetchComment(id)));
}

export async function fetchComment(commentId) {
  return await fetch(`https://hacker-news.firebaseio.com/v0/item/${commentId}.json`).then(res => res.json());
}
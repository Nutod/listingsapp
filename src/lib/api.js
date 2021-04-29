export async function fetchLists() {
  const response = await fetch('http://fakeapi.jsonparseronline.com/posts')
  return await response.json()
}

export async function fetchList(id) {
  const response = await fetch(
    `http://fakeapi.jsonparseronline.com/posts/${id}`,
  )
  return await response.json()
}

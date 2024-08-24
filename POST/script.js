const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}
async function getComentarios(){
    const idPost = localStorage.getItem("postID")
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}/comments`,{
        headers:headers,
    })
    const result = await response.json()
    console.log(result,"result comments")
}
getComentarios()
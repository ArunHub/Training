$(() => {
    let tableBody = $("#postsTableBody");
    fetch("https://jsonplaceholder.typicode.com/posts").then(
        response => response.json(),
        reason => reason
    ).then(
        posts => {
            for (const post of posts) {
                var row = `
                    <tr>
                        <td>${post.userId}</td>
                        <td>${post.id}</td>
                        <td>${post.title}</td>
                        <td>${post.body}</td>
                    </tr>
                `;
                tableBody.append(row);
            }
        },
        reason => console.log(reason)
    )
});
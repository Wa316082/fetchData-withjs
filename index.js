//dummy data
/*
const posts =[
    {
        title : "this is title 1",
        body: "This is body description 1"
    },
    {
        title : "this is title 2",
        body: "This is body description 2"
    },
    {
        title : "this is title 3",
        body: "This is body description 3"
    },
    {
        title : "this is title 4",
        body: "This is body description 4"
    },
    {
        title : "this is title 5",
        body: "This is body description 5"
    },
    {
        title : "this is title 6",
        body: "This is body description 6"
    },
    {
        title : "this is title 7",
        body: "This is body description 7"
    },
    {
        title : "this is title 8",
        body: "This is body description 8"
    }


]
*/


/*
<div class="post">
            <h3 class="post-title">Post title 1</h3>
            <p class="post-body">Post description 1</p>
        </div>
*/

/*fetch data*/

const fetchData = async(config)=>{
    try{
        const res = await axios(config);
        return res.data;
    }catch(error){
        throw Error("Data not found");
    }
    
};






/*selection  */

const postElements = document.querySelector('.posts');

const loadAllData = async() =>{
    const posts = await fetchData("https://jsonplaceholder.typicode.com/posts");

    posts.map((post) =>{
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML=`
            <h3 class="post-title">${post.title} </h3>
            <p class="post-body">${post.body}</p>`;
        postElements.appendChild(postElement);
    });
};

loadAllData();



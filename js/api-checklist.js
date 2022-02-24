//১. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ comments এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। 
//২. যে কমেন্ট এর ডাটাগুলো কনসোল এ দেখাতে পারছো। সেগুলা আবার তুমি html এ দেখাতে পারতেছো কিনা। একটা সিস্টেম হবে তোমার একটা বাটন। থাকবে সেটাতে ক্লিক করলে ডাটা লোড হবে। তারপর সেই ডাটা তুমি ওয়েবসাইট এ দেখাবে। 

/* const loadComments = () =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComments(data));
}

const displayComments = (comments) => {
    const commentHolder = document.getElementById('display-comment');
    comments.forEach(element => {
        console.log(element.body);
        const p = document.createElement('p');
        p.innerText = element.body;
        commentHolder.appendChild(p);
    });
} */

//৩. আরেকটা সিস্টেম হবে। তুমি যে ডাটা লোড করেছো। সেটা কোন বাটনে ক্লিক করা লাগবে না। ওয়েবসাইট লোড হলেই সরাসরি ডাটা লোড হয়ে তারপর সেই ডাটা ওয়েবসাইট এ দেখাবে। চেষ্টা করবে লোড করা ডাটা এর দুইটা প্রপার্টি অবশ্যই দেখাবে। 
//৪. তুমি যে ডাটা লোড করেছো। বা ডাটা ওয়েবসাইট এ দেখাচ্ছ। সেই কোড এর মধ্যে arrow ফাংশন ইউজ করতে পারতেছো কিনা। যখন লুপ চালাচ্ছ সেখানে forEach ইউজ করতে পারতেছো কিনা। 

/* fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComments(data));

const displayComments = (comments) => {
    const commentHolder = document.getElementById('display-comment');
    comments.forEach(element => {
        console.log(element.body);
        const p = document.createElement('p');
        p.innerText = element.body;
        commentHolder.appendChild(p);
    });
} */

//৫. ডাইনামিক ডাটা লোড। কোন একটা কমেন্ট এ ক্লিক করলে (কমেন্ট এর div এ বা কোন একটা বাটন এ )সেই কমেন্ট এর আইডি নিয়ে সেটা api এর url এ বসিয়ে (ডাইনামিকভাবে টেমপ্লেট স্ট্রিং দিয়ে) সেই ডাটা লোড করে। সেই ডাটা ওয়েবসাইট এ দেখাতে পারতেছো কিনা। 
const loadComments = () =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComments(data));
}

const displayComments = (comments) => {
    const commentHolder = document.getElementById('display-comment');
    comments.forEach(element => {
        const div = document.createElement('div');
        div.innerHTML = `
         <h4 >${element.body}</h4>
         <button onclick= "getId('${element.id}')">get details</button>
        `
        commentHolder.appendChild(div);
    });
}

const getId = (data) =>{
    const url = `https://jsonplaceholder.typicode.com/posts/${data}`;
    fetch(url)
    .then(res => res.json())
    .then(details => displayDetails(details));

}

const displayDetails = (detail) =>{
    const detailsContainer = document.getElementById('comment-details');
    detailsContainer.innerText = "";
    const div = document.createElement('div');
    div.innerHTML = `
      <h5>Title: ${detail.title}</h5>
      <p>Comments: ${detail.body}</p>
    `
    detailsContainer.appendChild(div);
}
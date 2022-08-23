const Posts = [
    {title:'this is 1sth post',body:'thisis the 1st Post body'},
    {title:'this is 2sth post',body:'thisis the 1st Post body'}
]
var lastUserActivity = new Date().getSeconds();
function getPost(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            output = '';
            for(let i = 0;i<Posts.length;i++){
                output += `<li>${Posts[i].title}--created ${new Date().getSeconds - Posts[i].createdAt} Seconds ago</li>`
            }
            document.body.innerHTML = output
            console.log(Posts)
            console.log('lastUserActivity :'+ (new Date().getSeconds()-lastUserActivity)+'Seconds ago')
            resolve();
            
        }, 1000);
    })
}
function createPost(post){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            Posts.push({...post,createdAt:new Date().getSeconds()});
            const error = false;
            if(!error){
                resolve();
            }else{
                reject('Error:Something went wrong')
            }
         },1000);
    })

}
function create4Post(post){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            Posts.push({...post,createdAt:new Date().getSeconds()});
            Promise.resolve(updateUserActivity);

        },2000)
    })
}
function deletePost(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(Posts.values !== 0){
                resolve(Posts.pop());
            }else{
                reject(' Array is empty')
            }
            
        }, 4000);
    })
}
function delete4Post(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(Posts.values !== 0){
                resolve(Posts.pop());
            }else{
                reject(' Array is empty')
            }
            
        }, 0);
    })


}


createPost({title:'this is 3sth post',body:'thisis the 3rd Post body '})
.then(getPost)
.catch(err => console.log(err))
.then(deletePost)
.catch(err => console.log(err))
create4Post({title:'this is 4th post',body:'this is the body of 4th post'})
.then(getPost).catch((err)=>console.log(err));

const updateUserActivity = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('user activity Updated')
        lastUserActivity = new Date().getSeconds();
    },1000)
})
const Promise1 = Promise.resolve('HY Im shubham')
const Promise2 = 100;
const Promise3 = new Promise((resolve,reject) => setTimeout(resolve,1000,'goodbye'))
Promise.all([Promise1,Promise2,Promise3])
.then(values => console.log(values));
Promise.all([create4Post(),delete4Post(),getPost()])
.catch(err => console.log(err));


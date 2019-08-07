// object literals

let user = {
    name: 'Justice',
    age: '18',
    email: 'justice@justicebanson.com',
    location: 'Bellingham',
    blog: ['Modern JavaScript', 'html, css and jquery are dead but javascript rules', 'Justice is a web developer'],
    login(){
        console.log('ths user logged in');
    },
    logout(){
        console.log('this user is logged out');
    },

    logBlogs(){
        // console.log(this.blog);
        this.blog.forEach(blog =>{
            console.log(blog);
        })
    }

}


// console.log(user);
// console.log(user.name);

user['name'] = 'Jonathan';

console.log(user.name);
console.log(user.age);
console.log(typeof user);

user.logBlogs()
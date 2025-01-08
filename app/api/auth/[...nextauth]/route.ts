import NextAuth from 'next-auth'
import  CredentialsProvider  from 'next-auth/providers/credentials'
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";


const handler =  NextAuth({
    providers:[
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "email",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
              username: { label: "Username", type: "text", placeholder: "ashim@gmail.com" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
             const userName = credentials?.username;
             const password = credentials?.password
                console.log(userName)
                console.log(password)
             //db  request to see if the user and password is correct.
             const user = {
                name: "ashim",
                id:"1",
                email:"ashim@gmail.com"
             }

             if(!user){
                return null 
             }
             return user

            }
          })    

        // GoogleProvider({
        // clientId: "asdf",
        // clientSecret: "asdf"
        // }),
        // GitHubProvider({
        //     clientId: "asdf",
        //     clientSecret: "asdf"
        //   })
    ],
    secret:process.env.NEXTAUTH_SECRET
})

export {handler as GET, handler as POST}
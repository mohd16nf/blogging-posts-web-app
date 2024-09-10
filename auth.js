import NextAuth from "next-auth";
import Credentials from 'next-auth/providers/credentials'

export const { handlers, signIn, signOut , auth } = NextAuth({
    providers:[Credentials({
        
        async authorize(){
            let user = null 

            user= {
                id:1,
                name: "Asif Md",
                email: 'md@gmail.com'
            }

            if(!user){
                return null
            }
            else{
                return user
            }
        }
    })]
})
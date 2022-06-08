import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({
    providers: [
        GitHubProvider({
            clientId: 'd10baf2fe9a03be8d42a',
            clientSecret: 'e95ce327dba774f5e5249ed6eb2f292d20389345'
        })
    ]
})
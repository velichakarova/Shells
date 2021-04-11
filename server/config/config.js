const config = {
    development:{
        PORT:5000, 
        DB_CONNECTION:"mongodb://localhost/shell",
        SALT_ROUND:10,
        SECRET:'someTingStrong',
        COOKIE_NAME: 'x-auth-token',
    },
    production:{
        PORT:80,
        DB_CONNECTION:'mongodb cloud',
        SALT_ROUND:10,
        SECRET:'someTingStrong',
        COOKIE_NAME: 'USER_SESSION',

    }

}

module.exports = config[process.env.NODE_ENV.trim()]
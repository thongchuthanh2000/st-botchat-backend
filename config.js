module.exports = {
    // FB_PAGE_TOKEN: process.env.FB_PAGE_TOKEN,
    // FB_APP_ID: process.env.FB_APP_ID,
    // FB_VERIFY_TOKEN: process.env.FB_VERIFY_TOKEN,
    // FB_APP_SECRET: process.env.FB_APP_SECRET,
    // SERVER_URL: process.env.SERVER_URL,
    // GOOGLE_PROJECT_ID: process.env.GOOGLE_PROJECT_ID,
    // DF_LANGUAGE_CODE: process.env.DF_LANGUAGE_CODE,
    // GOOGLE_CLIENT_EMAIL: process.env.GOOGLE_CLIENT_EMAIL,
    // GOOGLE_PRIVATE_KEY: JSON.parse(process.env.GOOGLE_PRIVATE_KEY),
    // SENGRID_API_KEY: process.env.SENGRID_API_KEY,
    // EMAIL_FROM: process.env.EMAIL_FROM,
    // EMAIL_TO: process.env.EMAIL_TO,
    // ADMIN_ID: process.env.ADMIN_ID,
    MYSQL_CONFIG: {
        host: process.env.MYSQL_CONFIG_HOST,
        port: 3306,
        user: process.env.MYSQL_CONFIG_USER,
        database: process.env.MYSQL_CONFIG_DATABASE,
        password: process.env.MYSQL_CONFIG_PASSWORD
    },
    // FB_PAGE_INBOX_ID: process.env.FB_PAGE_INBOX_ID
};
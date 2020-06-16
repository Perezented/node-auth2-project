require("dotenv").config();

const pgConnection =
    process.env.DATABASE_URL || "postgresql://postgres@localhost/auth";
module.exports = {
    development: {
        client: "sqlite3",
        useNullAsDefault: true, // needed for sqlite
        connection: {
            filename: "./data/nodeAuth2.db3",
        },
        migrations: {
            directory: "./data/migrations",
        },
        seeds: {
            directory: "./data/seeds",
        },
        // pool: {
        //     afterCreate: (conn, done) => {
        //         // runs after a connection is made to the sqlite engine
        //         conn.run("PRAGMA foreign_keys = ON", done); // turn on FK enforcement
        //     },
        // },
    },

    staging: {
        client: "postgresql",
        connection: {
            database: "my_db",
            user: "username",
            password: "password",
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
        },
    },

    production: {
        client: "pg",
        connection: pgConnection,
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            directory: "./database/migrations",
        },
        seeds: {
            directory: "./database/seeds",
        },
    },
};
